import { $, $Fox, $Foxes, $Create } from "./functions/Foxes.js";
import Conversor from "./functions/Conversor.js";
import { FindAllIndex, GenRandom, GenRandomText, MaskText, RoundNum, RoundNumUp, RoundNumDown } from "./functions/Utils.js";
import { IsArray, IsMatriz, IsNum, IsObj } from "./functions/VerifyTypes.js";
import { Component } from "./class/Component.js";
import ScrollView from "./class/Components/ScrollView.js";
import Card from "./class/Components/Card.js";
import { IsFoxElement } from "./functions/InstanceOf.js";
import FoxApi from "./functions/Connection.js";
import History, { AddStatePage, RedirectState, SetMain } from "./functions/History.js";
Number.prototype.model = function (x) {
    let template = "0".repeat(x);
    let numBase = this.toString();
    return `${template.slice(numBase.length)}${numBase}`;
};
Number.prototype[Symbol.iterator] = function () {
    let currentNum = 0;
    return {
        next: () => {
            if (currentNum == this) {
                return { done: true };
            }
            else if (this < 0) {
                return {
                    value: currentNum--,
                    done: false
                };
            }
            else if (this >= 0) {
                return {
                    value: currentNum++,
                    done: false
                };
            }
        }
    };
};
Object.prototype[Symbol.iterator] = function () {
    let send = false;
    return {
        next: () => {
            if (send) {
                return { done: true };
            }
            else {
                send = true;
                return {
                    value: this.toMatrix(),
                    done: false
                };
            }
        }
    };
};
Object.prototype.toString = function () {
    return JSON.stringify(this, null, 3);
};
Object.prototype.values = function () {
    return Object.values(this);
};
Object.prototype.keys = function () {
    return Object.keys(this);
};
Object.prototype.toMatrix = function () {
    return [
        this.keys(),
        this.values()
    ];
};
String.prototype.toObject = function () {
    try {
        let obj = this.toString();
        return JSON.parse(obj);
    }
    catch (error) {
        return {
            erro: "Data isn't json string."
        };
    }
};
export default {
    $,
    $Fox,
    $Foxes,
    $Create,
    $IsFox: IsFoxElement,
    FoxApi,
    $Component: Component,
    $Components: {
        ScrollView,
        Card,
    },
    $VerifyTypes: {
        IsArray,
        IsMatriz,
        IsNum,
        IsObj
    },
    $Math: {
        RoundNum,
        RoundNumUp,
        RoundNumDown,
        GenRandom
    },
    $Utils: {
        FindAllIndex,
        GenRandomText,
        MaskText
    },
    $Conversor: Conversor,
    $History: History,
    $StatePage: {
        RedirectState,
        SetMain,
        AddStatePage
    }
};
