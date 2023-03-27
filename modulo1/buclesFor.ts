// function evenNumbers(num : number): void{
//     for(let i = 0; i < num ; i++){
//         if(i%2 !== 0){
//             console.log(i);
            
//         }
        
//     }
// }

// evenNumbers(10);



// function myRevert(myArr){
//     let newArray = [];
//     for(let i = myArr.length -1 ; i >= 0 ; i--){
//         newArray.push(myArr[i]);
        
//     }
//     return newArray;
// }


// console.log(myRevert([1,2,3,4,5]));


// function isRainbow(colors:string []): void{
//     let Colors =["rojo ", "naranja","amarillo","verde","azul","indigo","violeta"];
//     colors.forEach(color =>{
//         if(Colors.includes(color)){
//             console.log(`${color} esta en el arcoiris`);

//       }else{
        
//             console.log(`${color} no esta en el arcoiris`);   
//         }
//     });
// }


// isRainbow(["gris"];



export function add(myWords:string[]){
    let suma = 0;
    for(let i = 0 ; i < myWords.length; i++){
        suma += myWords[i].length;
    }
    return suma
}


console.log(add( ["Casa","Coche","Ciudad","Cesta"]));





