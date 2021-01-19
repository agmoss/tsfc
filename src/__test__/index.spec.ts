import { compose } from "../index";

describe('compose', () => {

    /**
     * @name f
     * @param val 
     */
    const numberToString = (val: number): string => {
        return val.toString()
    }

    /**
     * @name g
     * @param val 
     */
    const doubleNumber = (
        val: number
    ): number => {
        return val + 1
    }

    // fN: (x: number) => string
    const fN = compose(doubleNumber,numberToString)

    const ret = fN(4)

    it("should be of type string", () => {
        expect(typeof ret).toBe('string')
    })

    it("should evaluate to '5'", () => {
        expect(ret).toBe('5')
    })
})
