import {elementos} from "./main.js";
import {randomColor} from "./elements control.js";

const randomBTN = document.getElementById(`randomBTNDOM`);

export let guiControls = 0;


randomBTN.addEventListener('click',()=>{
    for (let i = 0; i < 15; i++) {
        elementos[i].actualizarColor(randomColor());
        console.log("en el bucle");
    }
    console.log("fuera del bucle");
});

console.log("funciona");