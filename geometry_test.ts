import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle from x: 5 to y: 2 with radius 7 is roughtly 153.94", () => {
  // Given
  const circle = new Circle(new Point2D(5, 2), 7);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 153.94, 0.01);
});

Deno.test("diameter of a circle with radius 3 is 6", () => {
  // Given
  const circle = new Circle(new Point2D(-2, 2), 3);

  // When
  const actual = circle.diameter();

  // Then
  assertAlmostEquals(actual, 6, 0.01);
});

Deno.test("circumference of a rectangle with bottomLeft (-2, 2) and topRight (3, 4) is 18", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(-2, 2), new Point2D(3, 4));

  // When
  const actual = rectangle.circumference();

  // Then
  assertAlmostEquals(actual, 18, 0.01);
})

Deno.test("area of a rectangle with bottomLeft (3, 2) and topRight (8, 4) is 10", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(3, 2), new Point2D(8, 4));

  // When
  const actual = rectangle.area();

  // Then
  assertAlmostEquals(actual, 10, 0.01);
})

Deno.test("diagonal of a rectangle with bottomLeft (7, 8) and topRight (1, 4) is 10", () => {
  // Given
  const rectangle = new Rectangle(new Point2D(7, 8), new Point2D(1, 4));

  // When
  const actual = rectangle.diagonal();

  // Then
  assertAlmostEquals(actual, 7.21, 0.01);
})