import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});
Deno.test("2/4 - 1/3 = 2/12 is roughly 0.17", () => {
// Arrange
  const left = new Fraction(2, 4);
  const right = new Fraction(1, 3);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.17);
});

Deno.test("2/4 * 1/3 = 2/12 is roughly 0.17", () => {
// Arrange
  const left = new Fraction(2, 4);
  const right = new Fraction(1, 3);

  // Act
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.17);
});

Deno.test("2/4 / 1/3 = 6/4 is roughly 1.5", () => {
// Arrange
  const left = new Fraction(2, 4);
  const right = new Fraction(1, 3);

  // Act
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 1.5);
});

Deno.test("2/4 / 1/3 = 6/4 is roughly 1.5", () => {
// Arrange
  const left = new Fraction(2, 4);
  const right = new Fraction(1, 3);

  // Act
  left.divide(right);

  // Assert
  assertEquals(left.toString(), "6/4");
});

Deno.test("3/4 is parsed correctly", () => {
  // Arrange
  const input = "3/4";

  // Act
  const result = Fraction.parse("3/4");

  // Assert
  assertEquals(result.toString(), "3/4");
});

Deno.test("invalid format throws error", () => {
  // Arrange
  const input = "3-4";

  // Act
  // Assert
  assertThrows(() => Fraction.parse(input));
});

Deno.test("non-numeric numerator or denominator throws error", () => {
  // Arrange
  const input = "a/b";

  // Act
  // Assert
  assertThrows(() => Fraction.parse(input));
});

Deno.test("creating a fraction with denominato 0 throws error", () => {
  assertThrows(() => new Fraction(3, 0), Error, "denominator cannot be zero");
});

Deno.test("parsing a fraction with denominato 0 throws error", () => {
  assertThrows(() => Fraction.parse("3/0"), Error, "denominator cannot be zero");
});