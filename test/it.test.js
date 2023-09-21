import {sum} from "../src/sum.js";

describe("when call sum()", () => {
    it("should get 20 with parameter [10,10]", () => {
        expect(sum(10,10)).toBe(20);
    });
})