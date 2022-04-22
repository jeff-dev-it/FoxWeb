import { Component } from "../class/Component.js";
import { $FoxElm } from "../class/FoxElm.js";
export function IsFoxElement(elm) {
    return elm instanceof $FoxElm;
}
export function IsFoxComponent(elm) {
    return elm instanceof Component;
}
