/*
IDEAS

Que cada elemento guarde el anterior valor del color que tenia, asi en caso de darle al boton random de mas podes volver a recuperar el mismo color

*/
//import
import {Color,randomColor} from "./elements control.js";
import {guiControls} from "./gui control.js";
import {showMessage} from "./messages.js";
import {exportColors,importColors} from "./import and export.js";

//create variables
const gridContainer = document.getElementById("grid-container");
console.log(gridContainer);
export let elementos = [];

//recorrer cada uno de los elementos Color
for (let i = 0; i < 16; i++) {
    //create elements
    elementos[i] = new Color(randomColor(),i);
    
    //add random BTN
    let randomBTN = document.getElementById(`element-button-random-${i}`);
    randomBTN.addEventListener(`click`,()=>{
        if (elementos[i].locked) {
            showMessage("El elemento esta bloqueado",false);
            
        } else {
            elementos[i].actualizarColor(randomColor());
        }
        
    })
    
    //add lock BTN
    let lockBTN = document.getElementById(`element-button-lock-${i}`);
    let lockIcon = document.getElementById(`element-locked-icon-${i}`)
    lockBTN.addEventListener(`click`,()=>{
        if (elementos[i].locked == false) {
            elementos[i].locked = true;
            lockBTN.innerHTML = `<i class="fas fa-lock"></i>`;
            lockIcon.style.display = "flex";
        } else {
            elementos[i].locked = false;
            lockBTN.innerHTML = `<i class="fas fa-unlock"></i>`;
            lockIcon.style.display = "none";
        }
    })
    
    //add copy text function
    let text = document.getElementById(`element-text-${i}`);
    text.addEventListener(`click`,(e)=>{
        copyText(e);
        showMessage("copiado!",true);
    })
}

//
const exportBTN = document.getElementById(`export-btn`);
exportBTN.addEventListener(`click`,()=>{
    exportColors();
})

//
const importBTN = document.getElementById(`import-btn`);
importBTN.addEventListener(`click`,()=>{
    importColors(prompt("Ingrese el input de colores"));
})


//copy text
function copyText(element) {
    //agregar animacion del cuadro modal que diga que el texto fue copiado con exito
    
    console.log(element.path[0]);
    element.path[0].select();
    document.execCommand("copy");
    let sel = document.getSelection();
    sel.removeAllRanges();
}


//Sortable JS list
Sortable.create(gridContainer,{
    animation: 300,
    ghostClass: "sortable-ghost",  // Class name for the drop placeholder
	chosenClass: "sortable-chosen",  // Class name for the chosen item
	dragClass: "sortable-drag",
    filter : ".ignore-elements",
    swap: true,
    swapClass: 'highlight'
})