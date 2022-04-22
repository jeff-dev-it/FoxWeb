import { SettingsFox } from "../../Interface.Fox.js";
import { Component } from "../Component.js";
import { $FoxElm } from "../FoxElm.js";

interface initialConfig {
    main?: $FoxElm,
    feather?: $FoxElm,
    start?: boolean,
    children?: $FoxElm[],
    settings?: SettingsFox,
    horizontal?: boolean,
    biLateral?: boolean,
}

export default class ScrollView extends Component{

    
    /**
     * @typedef { import("../../Interface.Fox").StylesFoxes } StylesFoxes
     * @typedef { import("../../Interface.Fox").SettingsFox } SettingsFox
     * @typedef { import("../../Types.Fox").FoxElement} FoxElement
     * @typedef { import("../../Types.Fox").FoxENV} FoxENV
     * @typedef { import("../../Types.Fox").ConversorTo} ConversorTo
     * @typedef { import("../../Types.Fox").FoxEvents} FoxEvents
     * @typedef { import("../../Types.Fox").FoxTags} FoxTags
     * @typedef { import("../../Types.Fox").FoxElm} $FoxElm
     * 
    */

    /**
     * @param {{horizontal?: boolean, biLateral?: boolean, main?: $FoxElm, feather?: $FoxElm,start?: boolean,children?: $FoxElm[], settings?: SettingsFox}} param0 
     */

    constructor({main, feather, start, children, settings, horizontal, biLateral}:initialConfig) {
        super({main, feather, start, children, settings});
        
        let sideScroll =  biLateral? "XY": horizontal? "x": "y";
        
        console.log(sideScroll);
        

        this.feather?.$Styles({
            overflow: biLateral? "scroll":"hidden",
            [`overflow-${sideScroll}`]: "scroll",
            width: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "no-wrap",
            borderRadius: ".5rem"
        });
    }
}