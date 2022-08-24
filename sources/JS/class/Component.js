import { $, $Create } from "../functions/Foxes.js";
/**
 * @typedef { import("../Interface.Fox").SettingsFox } SettingsFox
 * @typedef { import("../Types.Fox").FoxElm} $FoxElm
 *
*/
export class Component {
    /**
     *
     * @param {{main?: $FoxElm, feather?: $FoxElm,start?: boolean,children?: $FoxElm[],settings?: SettingsFox}} param0
     */
    constructor({ main, feather, start, children, settings }) {
        if (start === void 0)
            start = true;
        this.SetContainer(main || $(document.body));
        this.SetFeather(feather || $Create("div", { ...settings }));
        feather?.SetSetting({ ...settings });
        if (children)
            for (let c of children) {
                feather?.AddChild(c);
            }
        if (start)
            this.AppendOnContainer();
    }
    /**
     * @param {$FoxElm} f
     */
    SetFeather(f) {
        this.feather = f;
    }
    /**
     * @param {$FoxElm} c
     */
    SetContainer(c) {
        this.main = c;
    }
    Remove() {
        this.feather.Remove();
    }
    AppendOnContainer() {
        let fe = this.feather.elm;
        this.main.AddChild(fe);
    }
}
