let dia="lunes"
switch (dia) {
  case "lunes":
  console.log("Hoy es lunes")
    break
  case "martes":
  console.log("Hoy es martes");
  break;
  default:
    console.log("Dia desconocido");
}

//Ciclo for

//for (inicializion; condicion; actualizacion) {
//      // Codigo en cada interacion
//  }
console.log("viendo loop")
for (let i=0; i<=10; i++){
    console.log(i);
}

console.log("tabla del 5")
let numero =5;
for (let i=5; i<=50; i+=5){
    console.log(`${numero} x ${i}=${numero*i}`);
}

console.log("tabla del 6")
for (let i=0; i<=60; i+=6){
    console.log(i);
}

let nombre = "Paco"
console.log(`Hola,${nombre}!`)

//while

let i = 0;
do{
    console.log(`Iteracion ${i}`)
    i++
} while (i < 5)

//for .. of

let frutas = ["manzana", "banana", "naranjas"];

for (let item of frutas) {
    console.log(item);
}

//Manipulacion objetos

//Valor vs referencia
//Tipos primitivos (number,string,boolean,null,undefined,symbol)

let a = 10;
let b =a;

b=20;

console.log(a); //10
console.log(b); //20

let persona1 = {nombre : "Ana"};
let persona2 = persona1;

persona2.nombre = "Juan"

console.log(persona1.nombre);
console.log(persona1.nombre);

//SPREAD (...)

let numeros=[1,2,3];

let persona = {nombre : "Ana", edad : 30};
let nuevaPersona = {...persona,ciudad : "Madrid"};

console.log(persona)
console.log(nuevaPersona);


let persona3 = {nombre: "Ana", edad:30};
let nuevaPersona4 = structuredClone(persona3);

console.log(persona3);
console.log(nuevaPersona4);

//Desectruturacion

//function obtenerCoordenadas(){
//    return {x : 10, y : 20};
//};

//let {x,y} = coordenadas;
//console.log(x,y);

