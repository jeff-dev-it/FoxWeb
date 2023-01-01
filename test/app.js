import FoxModule from "../JS/FoxWeb.js";

const myQuery = {
    name: "jeff",
    token: "xxx-xxx.23.aa"
}

const stringQuery = FoxModule.HTTP.QueryParser(myQuery)
// ?name=jeff&token=xxx-xxx.23.aa
const objQuery = FoxModule.HTTP.QueryParser("?app=Fox", "object")
// {app: "Fox"}