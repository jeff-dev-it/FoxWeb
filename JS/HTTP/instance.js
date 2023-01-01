import { SendRequest } from "./request.js";
export default function RequestInstance(baseUri) {
    const uri = baseUri;
    const is = {
        send: (path, config) => SendRequest(`${uri}${uri.at(-1) === "/" ? path[0] !== "/" ? path : path.replace("/", "") : path[0] === "/" ? path : `/${path}`}`, config),
        instance: (path) => RequestInstance(`${uri}${uri.at(-1) === "/" ? path[0] !== "/" ? path : path.replace("/", "") : path[0] === "/" ? path : `/${path}`}`)
    };
    return is;
}
