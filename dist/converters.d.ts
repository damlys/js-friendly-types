declare type PrimitiveType = undefined | null | boolean | number | string;
/**
 * Converts value to the boolean type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {boolean}
 */
export declare function toBoolean(value: PrimitiveType | unknown): boolean;
/**
 * Converts value to the number type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {RangeError|TypeError|Error}
 * @returns {number}
 */
export declare function toNumber(value: PrimitiveType | unknown): number;
/**
 * Converts value to the string type.
 *
 * @param {undefined|null|boolean|number|string} value
 * @throws {TypeError|Error}
 * @returns {string}
 */
export declare function toString(value: PrimitiveType | unknown): string;
export {};
