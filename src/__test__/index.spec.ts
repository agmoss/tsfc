import { compose } from "../index";

/**
 * function compose(a->b)->(b->c)->(a->c)
 */
describe('compose one', () => {

    type A = number;
    type B = string;
    type C = Array<string>;

    /**
     * @name f a->b
     * @param val A 
     * @returns B
     */
    const aToB = (val: A): B => {
        return val.toString();
    }

    /**
     * @name g b->c
     * @param val B
     * @returns C
     */
    const bToC = (
        val: B
    ): C => {
        return [val]
    }

    const aToC = compose(aToB, bToC);

    const ret = aToC(4);

    it("should be of type string", () => {
        expect(Array.isArray(ret)).toBe(true)
    })

    it('should evaluate to ["4"]', () => {
        expect(ret).toStrictEqual(["4"])
    })
})
