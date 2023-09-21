import {callMe, MyException} from "../src/exception.js";

test('exception luur', () => {
    expect(() => callMe('Laksa')).toThrow();
    expect(() => callMe('Laksa')).toThrow(MyException);
    expect(() => callMe('Laksa')).toThrow("Ups my Exception happens");
})