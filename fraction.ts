import { roundTo } from "./utils.ts";
import { Gcd } from "./gcd.ts";

export class Fraction {
  constructor(
    private numerator: number,
    private denominator: number,
  ) {
    if (denominator === 0) {
      throw new Error("denominator cannot be zero")
    }

    const gcd = new Gcd();
    const g = gcd.gcdEuclid(numerator, denominator);

    this.numerator = numerator / g;
    this.denominator = denominator / g;
  }
  
  public cancel(): Fraction {
      const gcd = new Gcd();
      const g = gcd.gcdEuclid(Math.abs(this.numerator), Math.abs(this.denominator));

      return new Fraction( 
        this.numerator / g,
        this.denominator / g
      );
    }

  public add(other: Fraction): Fraction { //
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;

    const newDenominator = this.denominator * other.denominator;

    return new Fraction(newNumerator, newDenominator);
  }

  public subtract(other: Fraction) { //
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;

    return new Fraction(newNumerator, newDenominator);
  }

  public multiply(other: Fraction) { //
    const newNumerator = this.numerator * other.numerator;
    const newDenominator = this.denominator * other.denominator;

    return new Fraction(newNumerator, newDenominator);

  }

  public divide(other: Fraction) { //
    const newNumerator = this.numerator * other.denominator;
    const newDenominator = this.denominator * other.numerator;

    return new Fraction(newNumerator, newDenominator);

  }

  public toFloat(precision: number): number { //
    return roundTo(this.numerator / this.denominator, precision);
  }

  public toString(): string { //
    return `${this.numerator}/${this.denominator}`;
  }

  public static parse(expression: string): Fraction {
    const parts = expression.split("/");
    if (parts.length != 2) {
      throw new Error(`illegal syntax: "[numerator]/[denominator]" required`);
    }
    const numerator = Number.parseInt(parts[0].trim());
    const denominator = Number.parseFloat(parts[1].trim());
    if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
      throw new Error(`non-numeric numerator/denominator`);
    }
    if (denominator === 0){
      throw new Error("denominator cannot be zero")
    }
    return new Fraction(numerator, denominator);
  }
}
