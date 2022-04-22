import { Component } from "../Component.js";
export default class Card extends Component {
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
     * @param {{ main?: $FoxElm, feather?: $FoxElm, start?: boolean, children?: $FoxElm[], settings?: SettingsFox}} param0
     */
    constructor({ main, children, feather, settings, start }) {
        super({ main, feather, start, children, settings });
        this.feather?.$Styles({
            backgroundColor: "#e7e7e7",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "100px",
            height: "100px",
            borderRadius: "10px"
        });
    }
}
