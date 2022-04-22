import { $, $Create } from "../functions/Foxes.js";
import { SettingsFox } from "../Interface.Fox.d";
import { $FoxElm } from "./FoxElm.js";

interface initialConfig {
    main?: $FoxElm,
    feather?: $FoxElm,
    start?: boolean,
    children?: $FoxElm[],
    settings?: SettingsFox
}

/**
 * @typedef { import("../Interface.Fox").SettingsFox } SettingsFox
 * @typedef { import("../Types.Fox").FoxElm} $FoxElm
 * 
*/

export class Component{
    main!: $FoxElm;
    feather!: $FoxElm;

    /**
     * 
     * @param {{main?: $FoxElm, feather?: $FoxElm,start?: boolean,children?: $FoxElm[],settings?: SettingsFox}} param0 
     */
    constructor({main, feather, start, children, settings}:initialConfig){
        if(start === void 0) start = true;

        this.SetContainer(main || $(document.body));
        this.SetFeather(feather || $Create("div", {...settings}));

        feather?.SetSetting({...settings})

        if(children) for(let c of children){
            feather?.AddChild(c);
        }
        
        if(start) this.AppendOnContainer();
    }

    /** 
     * @param {$FoxElm} f 
     */
    SetFeather(f: $FoxElm){
        this.feather = f;
    }
    /** 
     * @param {$FoxElm} c 
     */
    SetContainer(c: $FoxElm){
        this.main = c;
    }

    Remove(){
        this.feather.Remove();
    }

    AppendOnContainer(){
        let fe:any = this.feather.elm
        this.main.AddChild(fe);
    }
}