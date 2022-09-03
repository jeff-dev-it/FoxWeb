import { $FoxElm } from "../class/FoxElm.js";
import { $Foxes as FoxesGet } from "../class/FoxesGet.js";
import { $Fox as FoxGet } from "../class/FoxGet.js";
/**
 * @typedef { import("../interfaces/Interface.Fox.d.ts").StylesFoxes } StylesFoxes
 * @typedef { import("../interfaces/Interface.Fox.d.ts").SettingsFox } SettingsFox
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElement} FoxElement
 * @typedef { import("../interfaces/Types.Fox.ts").FoxENV} FoxENV
 * @typedef { import("../interfaces/Types.Fox.ts").ConversorTo} ConversorTo
 * @typedef { import("../interfaces/Types.Fox.ts").FoxEvents} FoxEvents
 * @typedef { import("../interfaces/Types.Fox.ts").FoxTags} FoxTags
 * @typedef { import("../interfaces/Types.Fox.ts").FoxElm} $FoxElm
 *
*/
/**
 *
 * @param {string} query
 * @returns
 */
export function $Fox(query) {
    return new FoxGet(query);
}
/**
 *
 * @param {FoxElement} legacyElement
 * @returns
 */
export function $(legacyElement) {
    return new $FoxElm(legacyElement);
}
/**
 *
 * @param {string} query
 * @returns
 */
export function $Foxes(query) {
    return new FoxesGet(query);
}
/**
 *
 * @param {string} tagName
 * @param {SettingsFox} settings
 * @returns {$FoxElm}
 */
export function $Create(tagName, settings) {
    const newElement = $(document?.createElement(tagName));
    newElement.SetSetting({ ...settings });
    return newElement;
}
