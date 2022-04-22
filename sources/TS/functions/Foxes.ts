import { $FoxElm } from "../class/FoxElm.js";
import { $Foxes as FoxesGet } from "../class/FoxesGet.js";
import { $Fox as FoxGet } from "../class/FoxGet.js";
import { SettingsFox } from "../Interface.Fox.d";
import { FoxElement } from "../Types.Fox.d";

/**
 * @typedef { import("../Interface.Fox").StylesFoxes } StylesFoxes
 * @typedef { import("../Interface.Fox").SettingsFox } SettingsFox
 * @typedef { import("../Types.Fox").FoxElement} FoxElement
 * @typedef { import("../Types.Fox").FoxENV} FoxENV
 * @typedef { import("../Types.Fox").ConversorTo} ConversorTo
 * @typedef { import("../Types.Fox").FoxEvents} FoxEvents
 * @typedef { import("../Types.Fox").FoxTags} FoxTags
 * @typedef { import("../Types.Fox").FoxElm} $FoxElm
 * 
*/
/**
 * 
 * @param {string} query 
 * @returns 
 */
export function $Fox(query: string){
    return new FoxGet(query);
}
/**
 * 
 * @param {FoxElement} legacyElement 
 * @returns 
 */
export function $(legacyElement: FoxElement){
    return new $FoxElm(legacyElement);
}
/**
 * 
 * @param {string} query 
 * @returns 
 */
export function $Foxes(query: string){
    return new FoxesGet(query);
}
/**
 * 
 * @param {string} tagName 
 * @param {SettingsFox} settings 
 * @returns {$FoxElm}
 */
export function $Create(tagName: string, settings:SettingsFox): $FoxElm{
    const newElement = $(document.createElement(tagName));

    newElement.SetSetting({...settings})

    return newElement;
}