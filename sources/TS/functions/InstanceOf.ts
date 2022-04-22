import { Component } from "../class/Component.js";
import { $FoxElm } from "../class/FoxElm.js";
import { $Fox } from "../class/FoxGet.js";

export function IsFoxElement(elm: any){
    return elm instanceof $FoxElm 
}

export function IsFoxComponent(elm:any){
    return elm instanceof Component
}