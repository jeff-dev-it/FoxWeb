import { $FoxElm as $ } from "./FoxElm.js";
export class $Fox extends $ {
    /**
     * @param {string} query
     */
    constructor(query) {
        super(document?.querySelector(query));
    }
}
