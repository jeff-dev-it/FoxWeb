import { $FoxElm } from "./FoxElm.js";
export class $Fox extends $FoxElm {
    /**
     * @param {string} query
     */
    constructor(query) {
        super(document?.querySelector(query));
    }
}
