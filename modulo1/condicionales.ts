// function zodical(day:number,month: number): string {
//     if((month == 3 && day >= 21 ) || (month == 4 && day <= 19)){
//         return "aries";
//     }
//     else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)){
//         return "tauro";
//     }
//     else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)){
//         return "geminis";
//     }
//     else if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
//         return "cancer";
//     }
//     else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)){
//         return "leo";
//     }
//     else if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
//         return "virgo";
//     }
//     else if((month == 9 && day >= 23 )|| (month == 10 && day <= 22)){
//         return "libra";
//     }
//     else if((month == 10 && day >= 23 )||(month == 11 && day <= 21)){
//         return "Escorpio"
//     }
//     else if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
//         return "Sagitario";
//     }
//     else if ((month == 12 && day >= 22)|| (month == 1 && day <= 19)){
//         return "capricornio";
//     }
//     else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)){
//         return "acuario";
//     }
//     else if ((month == 2 && day >= 19)|| (month == 3 && day <= 20)){
//         return "piscis";
//     }
//     else{
//         return "fecha de nacimiento invalidad"
//     }
    
// }
 

// console.log(zodical(26,12));



// function continent(country : string): void{
//     switch(country){
//         case "Tailandia":
//             console.log("Asia");
//             break;
//          case "Vietnam":
//             console.log("Asia");
//             break;
//          case "Singapur":
//             console.log("Asia");
//             break;
//          case "Malasia": 
//              console.log("Asia");
//              break;
//          case "Indonesia":
//             console.log("Asia");
//             break;
//          case "Nigeria":
//             console.log("Africa");
//             break;
//          case "Egipto":
//             console.log("Africa");
//             break;
//          case "Argelia":
//             console.log("Africa");
//             break;
//          case "botsuana":
//             console.log("Africa");
//             break;
//          case "Sudafrica":
//             console.log("Africa");
//             break;
//          case "Canada":
//             console.log("America del norte");
//             break;
//          case "Bahamas":
//             console.log("America del norte");
//             break;
//          case "Costa Rica":
//             console.log("America del norte");
//             break;
//          case "Dominica":
//             console.log("America del norte");
//             break;
//          case "Cuba":
//             console.log("America del norte");
//             break;
//          case "Argentina":
//             console.log("America del sur");
//             break;
//          case "Venezuela" :
//             console.log("America del sur");
//             break;
//          case "Chile":
//             console.log("America del sur");
//             break;
//          case "Colombia":
//             console.log("America del sur");
//             break;
//          case "Peru":
//             console.log("America del sur");
//             break;
//          case "Alemania":
//             console.log("Europa");
//             break;
//          case "Croacia":
//             console.log("Europa");
//             break;
//          case "Viena":
//             console.log("Europa");
//             break;
//          case "Italia":
//             console.log("Europa");
//             break;
//          case "Grecia":
//             console.log("Europa");
//             break;
//          case "Australia":
//             console.log("Oceania");
//             break;
//          case "Nueva Zelanda":
//             console.log("Oceania");
//             break;
//          case "Nauru":
//             console.log("Oceania");
//             break;
//          case "Fiyi":
//             console.log("Oceania");
//             break;
//          case "Isla Salomon":
//             console.log("Oceania");
//             break;
//          default:
//             console.log("pais no encontrado");
//             break;            
         
            
//     }
// }



//         continent("Venezuela")





export function isEven(number : number): boolean {
    if(number % 2 === 0){
        console.log("el numero es par");

        return true;
        
    }
    else{
        console.log("el numero es impar");
        
    }
    return false;
}

// isEven(8)



