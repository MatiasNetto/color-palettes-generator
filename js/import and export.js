import {elementos} from "./main.js";

let preFabs = [];
preFabs[0] = "#599645,#0f66e1,#c43413,#d21c42,#39ec82,#43b8e5,#4dce4a,#04bd2a,#aa38a9,#3e9af6,#de2763,#dd89fa,#eb9ec0,#15d9f1,#b9a6b9,#db47ce";


export function exportColors() {
    let colors = [];
    for (let i = 0; i < elementos.length; i++) {
        let elemento = document.getElementById(`element-text-${i}`);
        colors[i] = elemento.value;
    }
    let resultado = prompt("Tus colores",colors);
    console.log(colors);
}

export function importColors(data){
    let colorsInput = data.split(",");

    for (let i = 0; i < elementos.length; i++){
        elementos[i].actualizarColor(colorsInput[i]);
    }
}

//importColors(prompt("ingrese los colores"));