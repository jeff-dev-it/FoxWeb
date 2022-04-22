import Convertor from "../functions/Conversor.js";
export default function FoxApi(uri, options) {
    return fetch(uri, options);
}
FoxApi.GET = function (uri, req) {
    if (typeof req.body != "string" && req.body)
        req.body = Convertor.ToJSON(req.body || {});
    return FoxApi(uri, {
        ...req,
        method: "GET"
    });
};
FoxApi.POST = function (uri, req) {
    if (typeof req.body != "string" && req.body)
        req.body = Convertor.ToJSON(req.body || {});
    return FoxApi(uri, {
        ...req,
        method: "POST"
    });
};
