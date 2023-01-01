import { Config } from "../interfaces/Interface.Fox";
import { SendRequest } from "./request.js";


export default function RequestInstance(baseUri: string){
    const uri = baseUri;
    const is = {
        send: (path: string, config?: Config)=>
            SendRequest(`${uri}${uri.at(-1) === "/"? path[0] !== "/"? path: path.replace("/", ""):  path[0] === "/"? path: `/${path}`}`, config),
        instance: (path: string) => 
            RequestInstance(`${uri}${uri.at(-1) === "/"? path[0] !== "/"? path: path.replace("/", ""):  path[0] === "/"? path: `/${path}`}`)
    }
    
    return is
}