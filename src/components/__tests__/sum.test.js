import { sum } from "../Sum"

test("testing sum function",()=>{
    const result = sum(3,4)
    //Assertion
    expect(result).toBe(7);
})