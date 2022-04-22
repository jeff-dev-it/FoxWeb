export default async function FoxApiSync(uri, options) {
    console.log(await fetch(uri, options));
    return (await fetch(uri, options));
}
FoxApiSync.GET = async function (uri, req) {
    return await FoxApiSync(uri, {
        ...req,
        method: "GET"
    });
};
FoxApiSync.POST = async function (uri, req) {
    return await FoxApiSync(uri, {
        ...req,
        method: "POST"
    });
};
