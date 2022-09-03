import {$, $Fox, $Foxes, $Create} from "./functions/Foxes.js";
import {FindAllIndex, GenRandom, GenRandomText, MaskText, RoundNum, RoundNumUp, RoundNumDown} from "./functions/Utils.js"
import {IsArray, IsMatriz, IsNum, IsObj} from "./functions/VerifyTypes.js"
import { IsFoxElement } from "./functions/InstanceOf.js";
import "./preload.js"

export default {
    DOM: {
        $,
        $Fox,
        $Foxes,
        $Create,
        $IsFoxElement: IsFoxElement,
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
};