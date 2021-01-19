/**
 * Function composition in typescript
 * 
 * @remarks
 * Examples of how to apply a function to the result of another
 * 
 * Target: function compose(a->b)->(b->c)->(a->c)
 * 
 */


/**
 * Apply the result of function f to g 
 * @param f a->b
 * @param g g->c
 * @returns a->c (x: A) => g(f(x))
 */
export const compose = <A, B, C>(
    f: (x: A) => B,
    g: (x: B) => C,
): (x: A) => C => {
    return x => g(f(x))
}
