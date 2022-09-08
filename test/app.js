import FoxModule from  "../../FoxWeb/sources/JS/FoxWeb.js";
const {DOM} = FoxModule;

const root = DOM.$Fox("#root");
const cards = DOM.$Foxes(".card");

root.$Styles({
    width: "100%",
    backgroundColor: "#152339",
    color: "#333",
    display: "flex"
});

cards.$Styles({
    width: "100px",
    height: "100px",
    backgroundColor: "#e7e7e7",
    margin: ".5rem",
    borderRadius: ".5rem"
})

cards[1].$Styles({
    backgroundColor: "#ff9000"
})
