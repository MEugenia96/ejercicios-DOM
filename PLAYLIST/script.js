// 📀 Playlist
// Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

//Input con label "nombre de la playlist" y otro type number con la cantidad de canciones que desea
//Con el value captado del input number se deben generar nuevos input en donde va a escribir las canciones

//Agregar p abajo en donde vaya indicando cuantas canciones quedan por completar, detectar si esta completado el campo con el input.value.

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

$('#input-title').addEventListener('input', (e) =>{
    $('#title').innerHTML = $('#input-title').value;
})


$('#input-number').addEventListener('change', (e) =>{
    const inputContent = Number($('#input-number').value);
    for(let i=0; i<inputContent; i++){
        const create = document.createElement('input');
        const type = create.setAttribute('type', 'text')
        $('#content-playlist').appendChild(create)
    }
})


