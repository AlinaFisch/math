export class Gcd {
    public gcdBruteForce(a: number, b: number): number {

        a = Math.abs(a);
        b = Math.abs(b);
        const min = Math.min(a, b);

        for(let i = min; i > 1; i --){
            if (a % i == 0 && b % i == 0){
                return i;
            }
        }
        return 1;
    }

    public gcdEuclid(a: number, b: number): number {

        a = Math.abs(a);
        b = Math.abs(b);

    if (a === b) {
        return a;
    }

    if (a > b) {
        return this.gcdEuclid( a - b, b);
    } else {
        return this.gcdEuclid(a, b - a);
    }
    }
}