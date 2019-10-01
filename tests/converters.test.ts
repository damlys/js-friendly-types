import "jest";
import { toBoolean, toNumber, toString } from "../src/converters";

test("convert undefined value", () => {
    expect(toBoolean(undefined)).toBe(false);

    expect(toNumber(undefined)).toBe(0);

    expect(toString(undefined)).toBe("");
});

test("convert null value", () => {
    expect(toBoolean(null)).toBe(false);

    expect(toNumber(null)).toBe(0);

    expect(toString(null)).toBe("");
});

test("convert boolean values", () => {
    expect(toBoolean(false)).toBe(false);
    expect(toBoolean(true)).toBe(true);

    expect(toNumber(false)).toBe(0);
    expect(toNumber(true)).toBe(1);

    expect(toString(false)).toBe("false");
    expect(toString(true)).toBe("true");
});

test("convert numeric values", () => {
    expect(toBoolean(0)).toBe(false);
    expect(toBoolean(-0)).toBe(false);
    expect(toBoolean(0.0)).toBe(false);
    expect(toBoolean(-0.0)).toBe(false);
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean(-1)).toBe(true);
    expect(toBoolean(2)).toBe(true);
    expect(toBoolean(-2)).toBe(true);

    expect(toNumber(0)).toBe(0);
    expect(toNumber(123.45)).toBe(123.45);
    expect(toNumber(-123.45)).toBe(-123.45);

    expect(toString(0)).toBe("0");
    expect(toString(123.45)).toBe("123.45");
    expect(toString(-123.45)).toBe("-123.45");
});

test("convert NaN value", () => {
    expect(toBoolean(NaN)).toBe(false);

    expect(toNumber(NaN)).toBe(0);
    expect(() => toNumber("NaN")).toThrow("Can not convert a non-numeric string to the number type.");

    expect(toString(NaN)).toBe("NaN");
});

test("convert Infinity value", () => {
    expect(toBoolean(Infinity)).toBe(true);
    expect(toBoolean(-Infinity)).toBe(true);

    expect(() => toNumber(Infinity)).toThrow("Can not convert the infinity to a specific number.");
    expect(() => toNumber(-Infinity)).toThrow("Can not convert the infinity to a specific number.");
    expect(() => toNumber("Infinity")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("-Infinity")).toThrow("Can not convert a non-numeric string to the number type.");

    expect(toString(Infinity)).toBe("Infinity");
    expect(toString(-Infinity)).toBe("-Infinity");
});

test("convert string values", () => {
    expect(toBoolean("")).toBe(false);
    expect(toBoolean("0")).toBe(false);
    expect(toBoolean("false")).toBe(false);
    expect(toBoolean("False")).toBe(false);
    expect(toBoolean("FALSE")).toBe(false);
    expect(toBoolean("off")).toBe(false);
    expect(toBoolean("Off")).toBe(false);
    expect(toBoolean("OFF")).toBe(false);
    expect(toBoolean("no")).toBe(false);
    expect(toBoolean("No")).toBe(false);
    expect(toBoolean("NO")).toBe(false);
    // ---
    expect(toBoolean(" ")).toBe(true);
    expect(toBoolean("00")).toBe(true);
    expect(toBoolean("falsee")).toBe(true);
    expect(toBoolean("offf")).toBe(true);
    expect(toBoolean("noo")).toBe(true);
    expect(toBoolean("1")).toBe(true);
    expect(toBoolean("true")).toBe(true);
    expect(toBoolean("yes")).toBe(true);
    expect(toBoolean("on")).toBe(true);
    expect(toBoolean("whatever")).toBe(true);

    expect(toNumber("")).toBe(0);
    expect(toNumber("0")).toBe(0);
    expect(toNumber("123")).toBe(123);
    expect(toNumber("-123")).toBe(-123);
    expect(toNumber("123.45")).toBe(123.45);
    expect(toNumber("-123.45")).toBe(-123.45);
    expect(() => toNumber("123,45")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("-123,45")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber(".1")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("-.1")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("1.")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("-1.")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("1.1.1")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("whatever")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("123whatever")).toThrow("Can not convert a non-numeric string to the number type.");
    expect(() => toNumber("whatever123")).toThrow("Can not convert a non-numeric string to the number type.");

    expect(toString("whatever")).toBe("whatever");
});

test("convert objects", () => {
    expect(() => toBoolean({} as unknown)).toThrow("Can not convert an object to the boolean type.");
    expect(() => toBoolean([] as unknown)).toThrow("Can not convert an object to the boolean type.");

    expect(() => toNumber({} as unknown)).toThrow("Can not convert an object to the number type.");
    expect(() => toNumber([] as unknown)).toThrow("Can not convert an object to the number type.");

    expect(() => toString({} as unknown)).toThrow("Can not convert an object to the string type.");
    expect(() => toString([] as unknown)).toThrow("Can not convert an object to the string type.");
});

test("convert symbols", () => {
    expect(() => toBoolean(Symbol("whatever") as unknown)).toThrow("Can not convert a symbol to the boolean type.");

    expect(() => toNumber(Symbol("whatever") as unknown)).toThrow("Can not convert a symbol to the number type.");

    expect(() => toString(Symbol("whatever") as unknown)).toThrow("Can not convert a symbol to the string type.");
});

test("convert functions", () => {
    expect(() => toBoolean((() => undefined) as unknown)).toThrow("Can not convert a function to the boolean type.");

    expect(() => toNumber((() => undefined) as unknown)).toThrow("Can not convert a function to the number type.");

    expect(() => toString((() => undefined) as unknown)).toThrow("Can not convert a function to the string type.");
});
