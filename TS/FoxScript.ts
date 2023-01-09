import { $Fox } from "./class/FoxGet.js";
import { $Foxes } from "./class/FoxesGet.js";
import { $FoxElm } from "./class/FoxElm.js";
import { $FoxGet, $, $Create, $FoxesGet } from "./functions/Foxes.js";
import { MaskText, FindAllIndex, GenRandom, GenRandomText, RoundNum, RoundNumDown, RoundNumUp } from "./functions/Utils.js";
import RequestInstance from "./HTTP/instance.js";
import QueryParser from "./HTTP/queryParser.js";
import { SendRequest } from "./HTTP/request.js";
import { IsArray, IsMatriz, IsNum, IsObj} from "./functions/VerifyTypes.js";
import "./preload.js";

const script = `
    function Load(){
        // Class
        ${$FoxElm}
        ${$Fox}
        ${$Foxes}

        return {
            // Fox Elements
            DOM: {
                $Fox: ${$FoxGet},
                $Foxes: ${$FoxesGet},
                $Create: ${$Create},
                $: ${$},
            },
            // Math
            $Math: {
                RoundNum: ${RoundNum},
                RoundNumDown: ${RoundNumDown},
                RoundNumUp: ${RoundNumUp},
                GenRandom: ${GenRandom},    
            },
            // Utils
            $Utils: {
                MaskText: ${MaskText},
                FindAllIndex: ${FindAllIndex},
                GenRandomText: ${GenRandomText},
            },
            // Verify
            $VerifyTypes: {
                IsArray: ${IsArray},
                IsMatriz: ${IsMatriz},
                IsNum: ${IsNum},
                IsObj: ${IsObj},    
            },
            // HTTP
            HTTP: {
                RequestInstance: ${RequestInstance},
                SendRequest: ${SendRequest},
                QueryParser: ${QueryParser}
            }
            
        }
    }

    FoxScript = Load()

`

eval(script)