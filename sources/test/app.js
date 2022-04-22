import FoxModule from  "../JS/FoxWeb.js";
import { RedirectState } from "../JS/functions/History.js";

const root = FoxModule.$Fox("#root");


const main = new FoxModule.$Components.Card({
    start: false,
    settings: {
        textHTML: "<h1>Olá mundo</h1>",
    }
})

const about = new FoxModule.$Components.Card({
    start: false,
    settings: {
        textHTML: "<h1>Teste</h1>",
    },
})

main.feather.OnPress(()=>{
    FoxModule.$StatePage.RedirectState("/p")
})
about.feather.OnPress(()=>{
    FoxModule.$StatePage.RedirectState("/p")
})

FoxModule.$StatePage.SetMain(root);
FoxModule.$StatePage.AddStatePage({toPath: "/", content: main});
FoxModule.$StatePage.AddStatePage({toPath: "/p", content: about.feather});

RedirectState("/")