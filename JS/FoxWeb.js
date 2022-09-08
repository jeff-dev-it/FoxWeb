"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoxModule = void 0;
const Foxes_js_1 = require("./functions/Foxes.js");
const Utils_js_1 = require("./functions/Utils.js");
const VerifyTypes_js_1 = require("./functions/VerifyTypes.js");
const InstanceOf_js_1 = require("./functions/InstanceOf.js");
require("./preload.js");
exports.FoxModule = {
    DOM: {
        $: Foxes_js_1.$,
        $Fox: Foxes_js_1.$Fox,
        $Foxes: Foxes_js_1.$Foxes,
        $Create: Foxes_js_1.$Create,
        $IsFoxElement: InstanceOf_js_1.IsFoxElement,
    },
    $VerifyTypes: {
        IsArray: VerifyTypes_js_1.IsArray,
        IsMatriz: VerifyTypes_js_1.IsMatriz,
        IsNum: VerifyTypes_js_1.IsNum,
        IsObj: VerifyTypes_js_1.IsObj
    },
    $Math: {
        RoundNum: Utils_js_1.RoundNum,
        RoundNumUp: Utils_js_1.RoundNumUp,
        RoundNumDown: Utils_js_1.RoundNumDown,
        GenRandom: Utils_js_1.GenRandom
    },
    $Utils: {
        FindAllIndex: Utils_js_1.FindAllIndex,
        GenRandomText: Utils_js_1.GenRandomText,
        MaskText: Utils_js_1.MaskText
    },
};
