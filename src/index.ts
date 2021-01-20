/**
 * Function composition in typescript
 * 
 * @remarks
 * Examples of how to apply a function to the result of another
 * 
 * function compose(a->b)->(b->c)->(a->c)
 * 
 */


/**
 * Apply the result of function f2 to f1 
 * right to left  
 * left(right(x))
 * 
 * @param f1 a->b
 * @param f2 b->c
 * @returns a->c (x: A) => f(g(x))
 */
export const compose = <A, B, C>(
    f1: (x: B) => C,
    f2: (x: A) => B,
): (x: A) => C => {
    return x => f1(f2(x))
}
