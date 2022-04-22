/**
 * @typedef { import("../Types.Fox").commandHistory } commandHistory
 * 
*/

import { $FoxElm } from "../class/FoxElm.js";
import { $Fox } from "../class/FoxGet.js";
import { HistoryState } from "../Interface.Fox.js";
import { commandHistory } from "../Types.Fox.js";
import { $ } from "./Foxes.js";

const pages: Array<HistoryState> = [];
const elements = {
    main: $(document.body)
};
/**
 * Receba informações do histórico, ou execute funções dele
 * @param {commandHistory} command 
 */
export default function History(command?: commandHistory, uriPath?: string){
    if(command) switch(command){
        case "back":
            history.go(-1); 
            break;
        case "next":
            history.forward();
            break;
        case "reload":
            location.reload();
            break;
        case "redirect_page":
            var a:any = uriPath
            location.href = a; 
            break;
        case "redirect_path":
            var a:any = uriPath
            location.pathname = a; 
            break;
        case "redirect_state":
            history.pushState("", "", uriPath);
            break;
        default:
            console.error("Comando inválido"); 
    }
    else return {
        ...location,
        ...history
    }
}

export function RedirectState(path: string){
    History("redirect_state", path);
}

export function AddStatePage(settings:HistoryState){
    pages.push(settings);
}

export function SetMain(main: $Fox | $FoxElm){
    elements.main = main;
}

setInterval(()=>{
    pages.map(v=>{
        if(v.toPath == location.pathname){
            elements.main.SetHTML("");

            if(typeof v.content == "string") elements.main.SetHTML(v.content);
            else elements.main.AddChild(v.content)
        }
    })
})