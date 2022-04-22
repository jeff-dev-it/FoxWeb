import {$, $Fox, $Foxes, $Create} from "./functions/Foxes.js";
import Conversor from "./functions/Conversor.js";
import {FindAllIndex, GenRandom, GenRandomText, MaskText, RoundNum, RoundNumUp, RoundNumDown} from "./functions/Utils.js"
import {IsArray, IsMatriz, IsNum, IsObj} from "./functions/VerifyTypes.js"
import { Component } from "./class/Component.js";
import ScrollView from "./class/Components/ScrollView.js";
import Card from "./class/Components/Card.js";
import { IsFoxElement } from "./functions/InstanceOf.js";
import FoxApi from "./functions/Connection.js";
import History, {AddStatePage, RedirectState, SetMain} from "./functions/History.js";


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