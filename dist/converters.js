"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts value to the boolean type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {boolean}
 */
function toBoolean(value) {
    switch (typeof value) {
        case "undefined" /* Undefined */:
            return false;
        case "boolean" /* Boolean */:
            return value;
        case "number" /* Number */:
            if (isNaN(value)) {
                return false;
            }
            if (!isFinite(value)) {
                return true;
            }
            return value !== 0;
        case "string" /* String */:
            return !(value === "" || ["0", "false", "off", "no"].includes(value.toLowerCase()));
        case "object" /* Object */:
            if (value === null) {
                return false;
            }
            throw new TypeError("Can not convert an object to the boolean type.");
        case "function" /* Function */:
            throw new TypeError("Can not convert a function to the boolean type.");
        case "symbol" /* Symbol */:
            throw new TypeError("Can not convert a symbol to the boolean type.");
        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}
exports.toBoolean = toBoolean;
/**
 * Converts value to the number type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {RangeError|TypeError|Error}
 * @returns {number}
 */
function toNumber(value) {
    switch (typeof value) {
        case "undefined" /* Undefined */:
            return 0;
        case "boolean" /* Boolean */:
            return value ? 1 : 0;
        case "number" /* Number */:
            if (isNaN(value)) {
                return 0;
            }
            if (!isFinite(value)) {
                throw new RangeError("Can not convert the infinity to a specific number.");
            }
            return value;
        case "string" /* String */:
            if (value === "") {
                return 0;
            }
            if (/^[-]{0,1}[0-9]{1,}([.]{0,1}[0-9]{1,}){0,1}$/.test(value)) {
                return parseFloat(value);
            }
            throw new Error("Can not convert a non-numeric string to the number type.");
        case "object" /* Object */:
            if (value === null) {
                return 0;
            }
            throw new TypeError("Can not convert an object to the number type.");
        case "function" /* Function */:
            throw new TypeError("Can not convert a function to the number type.");
        case "symbol" /* Symbol */:
            throw new TypeError("Can not convert a symbol to the number type.");
        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}
exports.toNumber = toNumber;
/**
 * Converts value to the string type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {string}
 */
function toString(value) {
    switch (typeof value) {
        case "undefined" /* Undefined */:
            return "";
        case "boolean" /* Boolean */:
            return value.toString();
        case "number" /* Number */:
            return value.toString();
        case "string" /* String */:
            return value;
        case "object" /* Object */:
            if (value === null) {
                return "";
            }
            throw new TypeError("Can not convert an object to the string type.");
        case "function" /* Function */:
            throw new TypeError("Can not convert a function to the string type.");
        case "symbol" /* Symbol */:
            throw new TypeError("Can not convert a symbol to the string type.");
        default:
            throw new Error(`Unknown type: "${typeof value}".`);
    }
}
exports.toString = toString;
