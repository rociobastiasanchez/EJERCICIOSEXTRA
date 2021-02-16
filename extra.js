'use strict';
//Ejercicio 1 Años bisisestos

// const bisisestos = [0,4,8,12,16,20,24,28];

// let años = prompt("¿Cúando cree que será el préximo año bisisesto")

// if (años !== bisisestos.element ){
//     alert("el proximo año bisiesto será" + )

// }

//Ejercicio 2 Usuarios Premium

const users = [
    {username: 'ppc90', age: 30, premium: true},
    {username: 'ana', age: 35, premium: false},
    {username: 'matilda', age: 21, premium: true},
    {username: 'paco80', age: 22, premium: true},
    {username: 'juana8', age: 52, premium: true},
    {username: 'alonso23', age: 40, premium: false},
    {username: 'ines777', age: 20, premium: false},
   ];

//filtramos los objetos del array que son premium
const premium = users.filter(prm => prm.premium);
console.log(premium);

//escribimos una frase para cada usuario
for (let element of premium) {
    console.log(`El usuario ${element.username} es premium`);
};

//filtramps para los usuarios no premium
const notpremium = users.filter(noprm =>noprm.premium == false);
console.log(notpremium);

//Ejercicio 3 Ganadora 100m lisos

const scores = [
    {name: 'Christania Williams', country: 'Jamaica', time: 11.80},
    {name: 'Elaine Thompson', country: 'Jamaica', time: 10.71},
    {name: 'Tori Bowie', country: 'EEUU', time: 10.83},
    {name: 'Marie Josée Ta Lou', country: 'Irlanda', time: 10.86},
    {name: 'Dafne Schippers', country: 'Holanda', time: 10.90},
    {name: 'English Gardner', country: 'EEUU', time: 10.94},
    {name: 'Michelle-Lee Ahye', country: 'Trinidad', time: 10.92},
    {name: 'Shelly-Ann Fraser-Pryce', country: 'Jamaica', time: 10.86}
   ];

// Utilizamos el map para que nos devuelva un array con sólo los tiempos

const tiempos = scores.map(function(elemento){
        return (elemento.time);
    
});
console.log(tiempos);

//con este array vamos a utilizar el reduce para que nos coja a la ganadora

let winner = 15;
tiempos.reduce(function(acumulador, valorinicial){
    if (acumulador<valorinicial){
        return winner = acumulador
    } else {
        return winner = valorinicial
    }
}, 15);
console.log(winner);

//directamente con el array de objetos ¿? Porque no me lo coje
let ganadora = {};
scores.reduce(function(acumulado, valorinicio){
    if (acumulado<valorinicio){
        return ganadora = acumulado
    } else {
        return ganadora = valorinicio
    }
}, {});
console.log(ganadora);

//Ejercicio 4 Bucle con números del 1 al 10

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let number of numeros){
    console.log(number)
};

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//Ejercicio 5 Bucle en orden inverso del 1 al 10

for (let number of numeros.reverse()){
    console.log(number)
};

//Ejercicio 6 visualizar los números primos del 1 al 20

const numerosprimos = [2,3,5,7,11,13,17,19];
console.log(numerosprimos);

// Ejercicio 7 Replicar pantallas con HTML y CSS

//Ejericicio 8 Valor facorial de un número ¿?

// let numeroentero = prompt("Indique un número entero");

// for (let number of numeroentero){
//     number = numeroentero * ;
//     return number;
// };

// let valorfactorial = prompt("Este es su valor factorial" + number);

//Ejercicio 9 Pide al usuario su nombre y ponle un mensaje de bienvenida personificado en la página HTML creando un nuevo nodo o añadiendo contenido a uno ya existente.

const usuarionombre = prompt ("Indique su nombre:");
const parrafo = document.createElement ('p');
const contenido = document.createTextNode (`Bienvenid@ a la página web ${usuarionombre}`);
parrafo.appendChild(contenido);
document.body.appendChild(parrafo);
