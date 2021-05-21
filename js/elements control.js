const gridContainer = document.getElementById("grid-container");

export class Color {
    constructor(color,UID) {
        //set atributes
        this.UID = UID;
        this.locked = false;
        this.position = UID;
        //create DOMelement
        createElement(UID,color);
        //set DOMelement color
        let elemento = document.getElementById(`element-${this.UID}`);
        elemento.style.background = color;
    }
    
    actualizarColor(newColor) {
        if (this.locked) {
            
        } else if(newColor == undefined){
            let elemento = document.getElementById(`element-${this.UID}`);
            elemento.style.background = "#444";
            let texto = document.getElementById(`element-text-${this.UID}`);
            texto.value = "Error";
            
        } else {
            let elemento = document.getElementById(`element-${this.UID}`);
            elemento.style.background = newColor;
            let texto = document.getElementById(`element-text-${this.UID}`);
            console.log(texto);
            texto.value = newColor;
        }
        
    }
}


function createElement(UID,color) {
    let newElement = document.createElement(`DIV`);
    newElement.classList.add(`color-container`)
    newElement.setAttribute(`id`,`element-${UID}`);
    //add the iner html
    newElement.innerHTML = `
            <input id=element-text-${UID} class="color-text" value="${color}" readonly></input>
            <div class="color-btn-container">
               <button id=element-button-lock-${UID} class="color-btn"><i class="fas fa-unlock"></i></button>
               <button id=element-button-random-${UID} class="color-btn"><i class="fas fa-random"></i></button>
            </div>
            <p style="display: none;" id=element-locked-icon-${UID} class="blocked-icon"><i class="fas fa-lock"></i></p>`;
    gridContainer.appendChild(newElement);
}


export function randomColor() {
    //caracteres en hexadecimal (16)
    let caracteres = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    let resultado = "#";
    
    let random = Math.random()*100;
    
    //resultado debe tener 7 caracteres, el # y 6 caracteres para el color
    while (resultado.length < 7) {
        //establece random en un numero menor a 16
        random = Math.random()*100;
        while (random > 15) random = Math.random()*100;
        
        //agrega los caracteres al resultado final
        resultado += caracteres[Math.round(random)]
        console.log(Math.round(random));
    }
    console.log(resultado);
    //restorna el color resultante
    return resultado;
}
