import { getNames } from "./api.js";
import { deleteName } from "./api.js";
import { addName } from "./api.js";

const getNamesButton = document.getElementById("getNamesButton");
const addNewNameButton = document.getElementById("addNewNameButton");
const deleteNameButton = document.getElementById("deleteNameButton");

window.addEventListener("load", async (event) => {
    const catNames = await getNames();
    reRender(await getNames());
});

addNewNameButton.addEventListener("click", async (event) => {
    const name = document.getElementById("nameBox").value;
    const occupation = document.getElementById("occupationBox").value;
    const catNames = await addName(name, occupation);
    reRender(catNames);
});

deleteNameButton.addEventListener("click", async (event) => {
    const id = document.getElementById("idBox").value;
    const catNames = await deleteName(id);
    reRender(catNames);
});

function reRender(catNames) {
    if (catNames.length > 0) {
        document.getElementById("namesDisplay").innerHTML = "";
        for (let i = 0; i < catNames.length; i++) {
            document.getElementById("namesDisplay").innerHTML +=
                "id: " +
                catNames[i].id +
                ". " +
                catNames[i].name +
                ", Occupation: " +
                catNames[i].occupation +
                "<br>";
        }
    } else {
        document.getElementById("namesDisplay").innerHTML =
            "Nothing to display";
    }
}
