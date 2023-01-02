import { $FoxElm  } from "./FoxElm.js";


export class $Fox extends $FoxElm{  
    /** 
     * @param {string} query 
     */
    constructor(query: string){
        super(document?.querySelector(query));
    }
}