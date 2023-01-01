import ParseQuery from "./queryParser.js";
let Request = null;
try {
    if (window)
        Request = XMLHttpRequest;
}
catch (error) {
    const xr2 = require("xhr2");
    Request = xr2;
}
export async function SendRequest(uri, config) {
    const res = await sendReq(uri, config || {});
    return res;
}
const sendReq = (uri, config) => {
    return new Promise((resolve) => {
        const req = new Request();
        const res = {};
        req.open(config?.method || "GET", `${uri}${config?.query ? ParseQuery(config.query, "string") : ""}`, true);
        for (const key of Object.keys(config?.headers || [])) {
            if (typeof config.headers[key] !== "function") {
                req.setRequestHeader(key, config.headers[key]);
            }
        }
        if (config.signal)
            config.signal.onabort = () => {
                req.abort();
                res.res = "This call is aborted! :(";
                res.resText = "This call is aborted! :(";
                res.status = {
                    number: 0,
                    text: "Aborted!"
                };
                resolve(res);
            };
        req.onreadystatechange = () => {
            if (req.readyState === Request.DONE) {
                res.res = req.response;
                res.status = {
                    number: req.status,
                    text: req.statusText
                };
                res.resJSON = req.responseText?.toObject() || req.responseText;
                res.typeRes = req.responseType;
                res.resText = req.responseText;
                res.resURL = req.responseURL;
                res.resXML = req.responseXML;
                res.headers = req.getAllResponseHeaders();
                resolve(res);
            }
        };
        req.response;
        req.send(config?.body);
    });
};
