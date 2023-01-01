import { FoxModule } from "../JS/FoxWeb.js";

const base = FoxModule.HTTP.RequestInstance("https://jsonplaceholder.typicode.com/")
const api = base.instance("/todos");

api.send("/1", {
}).then(d=>{
    console.log(d.resJSON);
})

api.send("/2", {
}).then(d=>{
    console.log(d.resJSON);
})