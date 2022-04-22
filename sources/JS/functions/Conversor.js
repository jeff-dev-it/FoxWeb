import { IsArray, IsObj } from "./VerifyTypes.js";
const convertor = {
    /**
     * Conversor geral, converte para qualquer tipo
     * @param {{to:("str"|"obj"|"num"|"JSON"|"obj"), value:any}} set - no set ponha: obj | str | num | int | float | bool
     * obj - Para objeto ; str - para string
     * num - Para número ; int - para inteiro
     * float - Para num flutuante ; bool - para booleano
     */
    Conversor: (set) => {
        switch (set.to) {
            case "str":
                return convertor.ToStr(set.value);
            case "obj":
                return convertor.ToObj(set.value);
            case "num":
                return convertor.ToNum(set.value);
            case "JSON":
                return convertor.ToJSON(set.value);
            default:
                return "Tipo inválido";
        }
    },
    /**
     *
     * @param {any} value
     * @returns
     */
    ToStr: (value) => {
        if (typeof value == "number") {
            return value.toString();
        }
        else if (typeof value == "boolean") {
            switch (value) {
                case true:
                    return "true";
                case false:
                    return "false";
                default:
                    return `${value}`;
                    break;
            }
        }
        else if (IsObj(value) || IsArray(value)) {
            return JSON.stringify(value);
        }
        else {
            return `${value}`;
        }
    },
    ToNum: (value) => {
        if (value <= 0 || value > 0) {
            return Number(value);
        }
        else {
            throw new Error("Este valor pode virar um número!");
        }
    },
    ToInt: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseInt(num) : -1;
        }
        catch (error) {
            throw new Error("Este valor pode virar um número inteiro!");
        }
    },
    ToFloat: (value) => {
        try {
            let confNum = convertor.ToNum(value);
            let num = confNum.toString();
            return typeof num == "string" ? parseFloat(num) : 0;
        }
        catch (error) {
            throw new Error("Este valor pode virar um número real!");
        }
    },
    ToJSON: (obj, replacer = null, value = 3) => {
        if (typeof obj == "object") {
            return JSON.stringify(obj, replacer, value);
        }
        else {
            throw new Error("O valor passado como argumento não pode virar um JSON!");
        }
    },
    ToObj: (obj) => {
        try {
            return JSON.parse(obj);
        }
        catch (error) {
            throw new Error("O valor passado como argumento não pode virar um Objeto!");
        }
    }
};
export default {
    ToNum: convertor.ToNum,
    ToInt: convertor.ToInt,
    ToFloat: convertor.ToFloat,
    ToJSON: convertor.ToJSON,
    ToObj: convertor.ToObj,
    ToStr: convertor.ToStr,
};
