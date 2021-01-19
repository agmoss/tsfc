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
 * Apply the result of function f to g 
 * @param f a->b
 * @param g b->c
 * @returns a->c (x: A) => g(f(x))
 */
export const compose = <A, B, C>(
    f: (x: A) => B,
    g: (x: B) => C,
): (x: A) => C => {
    return x => g(f(x))
}
