import Convertor from "./Conversor.js";
/**
 * @typedef { import("../Interface.Fox").FoxReq } FoxReq
 * @typedef { import("../Types.Fox").FoxHTTPMethod } FoxHTTPMethod
 *
*/
/**
 * @param {String} uri
 * @param {FoxReq} req
 * @returns {Promise<Response>}
 */
export default function FoxApi(uri, req) {
    if (typeof req.body != "string" && req.body)
        req.body = Convertor.ToJSON(req.body || {});
    if (!req.headers || !req.headers["Content-Type"])
        req.headers = {
            ...req.headers || {},
            "Content-Type": "application/json"
        };
    if (!req.headers || !req.headers["Content-Encoding"])
        req.headers = {
            ...req.headers || {},
            "Content-Encoding": "utf-8"
        };
    if (!req.signal)
        req.signal = new AbortController().signal;
    if (!req.method)
        req.method = "GET";
    let a = req;
    return fetch(uri, a);
}
/**
 * @param {string} uri
 * @param {FoxReq} req
 * @returns {Promise<Response>}
 */
FoxApi.GET = function (uri, req) {
    return FoxApi(uri, {
        ...req,
        method: "GET"
    });
};
/**
 * @param {string} uri
 * @param {FoxReq} req
 * @returns {Promise<Response>}
 */
FoxApi.POST = function (uri, req) {
    return FoxApi(uri, {
        ...req,
        method: "POST"
    });
};
/**
 * @param {string} uri
 * @param {FoxReq} req
 * @returns {Promise<any>}
 */
FoxApi.JSON_POST = async (uri, req) => {
    const res = await FoxApi.POST(uri, {
        ...req,
        headers: {
            ...req?.headers || {},
            "Content-Type": "application/json",
        }
    });
    return await res.json();
};
/**
 * @param {string} uri
 * @param {FoxReq} req
 * @returns {Promise<any>}
 */
FoxApi.JSON_GET = async (uri, req) => {
    const res = await FoxApi.GET(uri, {
        ...req,
        headers: {
            ...req?.headers || {},
            "Content-Type": "application/json",
        }
    });
    return await res.json();
};
