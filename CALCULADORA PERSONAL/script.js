// 📈 Total de gastos
// Crear un programa que muestre:

// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// GUARDA EL CONTENIDO DEL INPUT
let inputContent = '';


$('#input-number').addEventListener('change',()=>{
    inputContent = $('#input-number').value;
})

//CAPTAR EVENTO DE LOS BOTONES


$$('.btn').forEach((button) => {
    button.addEventListener('click', ()=> pressButton(button));
        
})

//EJECUTAR ACCION POR BOTON
const arrayNumber = [];

const pressButton = button =>{
    $('#input-number').value = '';
    if(button.getAttribute("id")==='gasto'){
        const valorNegativo = inputContent * -1;
        arrayNumber.push(valorNegativo)
        
    }
    else if(button.getAttribute("id")==='ganancia'){
        arrayNumber.push(Number(inputContent));
        
    }
    addItem(arrayNumber)
}

//FUNCION PARA AGREGAR LI

const addItem = array =>{
    $('#registro').innerHTML = '';
    for(const elem of array){
        console.log(elem)
        const listItem = document.createElement('li');
        const formato$ = elem.toLocaleString()
        const nodoText = document.createTextNode(`$${formato$}`)
        listItem.appendChild(nodoText)
        $('#registro').appendChild(listItem)

        suma(arrayNumber)
        
    }
}

//FUNCION PARA EL RESULTADO

const suma = arrayFinal =>{
    const resultado = arrayNumber.reduce((acc, elemento) => acc + elemento);
    const formato$ = resultado.toLocaleString()
    $('#resultado').textContent = `Tu dinero disponible es $${formato$}`
}


