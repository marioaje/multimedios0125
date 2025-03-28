
//Declarando variable 

let nombre = "Mario";
//y constante
const edad = 20;

//Imprimiendo un mensaje en consola
console.log(nombre);

//Condicionales
console.log("if");
if( edad >= 18 ){
    console.log("Es mayor.");
}
else{
    console.log("Es menor.")
}


console.log("switch");
//Seleccionador, case, switch
let dia = "viernes";

switch(dia){
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes"     :
        console.log("Fin de semana");
        break;
    default:
        console.log("No esta la opcion");
}

//Seccion de cicllos
console.log("for");
//Ciclo for
for (let index = 0; index < 10; index++) {
    
    console.log(index);
    
}
console.log("do");
//Ciclo do
let j =6;
do {
    console.log("Numero: " + j);    
    j++;
}while(j <= 80)

console.log("while");
//ciclo while
let i = 0;

while(i <= 20){
    console.log("Numero: " + i);   
    i++;
}

//fucniones
function saludo(nombre){
    return "Saludos, " + nombre;
}

console.log(saludo("Mario"));

//Funcion flecha =>
const saludar = (nombre) => "Saludos, " + nombre;
console.log(saludar("Alberto"));