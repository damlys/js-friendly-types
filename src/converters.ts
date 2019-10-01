const enum Type {
    Undefined = "undefined",
    Boolean = "boolean",
    Number = "number",
    String = "string",
    Object = "object",
    Symbol = "symbol",
    Function = "function",
}

type PrimitiveType = undefined | null | boolean | number | string;

/**
 * Converts value to the boolean type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {boolean}
 */
export function toBoolean(value: PrimitiveType | unknown): boolean {
    switch (typeof value) {
        case Type.Undefined:
            return false;

        case Type.Boolean:
            return value as boolean;

        case Type.Number:
            if (isNaN(value as number)) {
                return false;
            }
            if (!isFinite(value as number)) {
                return true;
            }
            return value !== 0;

        case Type.String:
            return !(value === "" || ["0", "false", "off", "no"].includes((value as string).toLowerCase()));

        case Type.Object:
            if (value === null) {
                return false;
            }
            throw new TypeError("Can not convert an object to the boolean type.");

        case Type.Function:
            throw new TypeError("Can not convert a function to the boolean type.");

        case Type.Symbol:
            throw new TypeError("Can not convert a symbol to the boolean type.");

        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}

/**
 * Converts value to the number type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {RangeError|TypeError|Error}
 * @returns {number}
 */
export function toNumber(value: PrimitiveType | unknown): number {
    switch (typeof value) {
        case Type.Undefined:
            return 0;

        case Type.Boolean:
            return value ? 1 : 0;

        case Type.Number:
            if (isNaN(value as number)) {
                return 0;
            }
            if (!isFinite(value as number)) {
                throw new RangeError("Can not convert the infinity to a specific number.");
            }
            return value as number;

        case Type.String:
            if (value === "") {
                return 0;
            }
            if (/^[-]{0,1}[0-9]{1,}([.]{0,1}[0-9]{1,}){0,1}$/.test(value as string)) {
                return parseFloat(value as string);
            }
            throw new Error("Can not convert a non-numeric string to the number type.");

        case Type.Object:
            if (value === null) {
                return 0;
            }
            throw new TypeError("Can not convert an object to the number type.");

        case Type.Function:
            throw new TypeError("Can not convert a function to the number type.");

        case Type.Symbol:
            throw new TypeError("Can not convert a symbol to the number type.");

        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}

/**
 * Converts value to the string type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {string}
 */
export function toString(value: PrimitiveType | unknown): string {
    switch (typeof value) {
        case Type.Undefined:
            return "";

        case Type.Boolean:
            return (value as boolean).toString();

        case Type.Number:
            return (value as number).toString();

        case Type.String:
            return value as string;

        case Type.Object:
            if (value === null) {
                return "";
            }
            throw new TypeError("Can not convert an object to the string type.");

        case Type.Function:
            throw new TypeError("Can not convert a function to the string type.");

        case Type.Symbol:
            throw new TypeError("Can not convert a symbol to the string type.");

        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}
