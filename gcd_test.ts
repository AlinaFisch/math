import { assertEquals } from "@std/assert";
import { Gcd } from "./gcd.ts";
import { Fraction } from "./fraction.ts";

Deno.test("ggt(1, 1)", () => {
// Arrange
  const gcd = new Gcd();

  // Act
  const gcdBrute = gcd.gcdBruteForce(1, 1);

  // Assert
  assertEquals(gcdBrute, 1);
});

Deno.test("ggt(8, 20)", () => {
// Arrange
  const gcd = new Gcd();

  // Act
  const gcdBrute = gcd.gcdBruteForce(8, 20);

  // Assert
  assertEquals(gcdBrute, 4);
});

Deno.test("cancel 8/12", () => {
  const f = new Fraction(8, 12);

  const result = f.cancel();

  assertEquals(result.toString(), "2/3");
});

Deno.test("ggt(7, 11) = 1", () => {
    const gcd = new Gcd();

    const result = gcd.gcdBruteForce(7, 11);

    assertEquals(result, 1);
});

Deno.test("gcdEuclid when b > a", () => {
  const gcd = new Gcd();

  const result = gcd.gcdEuclid(4, 10);

  assertEquals(result, 2);
});

Deno.test("gcdEuclid table test", () => {
    const gcdTests = [
        { a: 1, b: 1, gcd: 1 },
        { a: 1, b: 2, gcd: 1 },
        { a: 2, b: 2, gcd: 2 },
        { a: 3, b: 4, gcd: 1 },
        { a: 6, b: 9, gcd: 3 },
        { a: 81, b: 36, gcd: 9 },  
    ];

    const gcd = new Gcd();

    for (const { a, b, gcd: expected } of gcdTests) {
        const actual = gcd.gcdEuclid(a, b);
        assertEquals(actual, expected);
    }
});