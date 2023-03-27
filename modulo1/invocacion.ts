import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let  arr1 = ["Casa","Coche","Ciudad","Cesta"];
let arr2 = ["Barco","Baca","Bicicleta","Balon","Bisiesto","Brasil"];
let arr3 = ["venezuela","Veneno","Voltaje"];

let suma1 = arr1.reduce((acc,str)=> acc + add([str]),0);
let suma2 = arr2.reduce((acc, str)=> acc + add([str]),0);
let suma3 = arr3.reduce((acc,str)=> acc + add([str]),0);

console.log(`la suma de mi primer array es ${suma1}. y es ${isEven(suma1)  ? 'par' : 'impar'}.`);
console.log(`la suma de mi segundo array es ${suma2}. y es ${isEven(suma2)  ? 'par' : 'impar'}.`);
console.log(`la suma de mi tercer array es ${suma3}. y es ${isEven(suma3) ? 'par': 'impar'}.`);




