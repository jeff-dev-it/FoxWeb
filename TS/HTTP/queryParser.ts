
export default function QueryParser(value: any, to?: "object"|"string"){

    return to !== "object"? parseObjectQueryToString(value): parseStringQueryToString(value)

    function parseObjectQueryToString(q: object){
        let query = "?";
        let i = 0;
        for(const qr of Object.keys(q)){
            query += `${qr}=${q[qr]}`
            i++
            if(i < Object.keys(q).length) query += "&"
        }
    
        return query
    }

    function parseStringQueryToString(q: string){
        const obj = {}
        const base = q.replace("?", "").split("&");
        for(const qq of base){
            const [key, val] = qq.split("=")
               obj[key] = val
        }
        return obj
    }
}