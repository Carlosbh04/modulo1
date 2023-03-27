

// function hasEven(myNums:number[]){
//     let i = 0 ;
//     let resultado = false;

//     while(i < myNums.length && !resultado){
//         if(myNums[i] % 2 === 0){
//             resultado = true;
//      }

//         i++;
//     }

//     return resultado;

// }

// console.log(hasEven([21]));


function startWithM(myNames : string[]): boolean{
    let i = 0;
    while(i < myNames.length){
        if(!myNames[i].startsWith('m')){
            return false;
        }
        i++;
    }
    return true;
}


let myNames = ["marta","maria","mary"]
console.log(startWithM(myNames));


