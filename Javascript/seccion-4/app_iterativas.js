//Estructuras de Control IF

let nota1=40;

if(nota1>=60){
    console.log('Aprueba la clase');
    }
else
{
    console.log('Reprueba la clase');
    }

//console.log('Fin del Programa');

//Estructuras de Control IF Anidado

let nota=80;
let letra;
if(nota >90 && nota <=100){
    letra='A';
}
else if(nota >= 80){
    letra='B';
}
else if(nota >= 70){
    letra='C';
}
else if(nota >=60){
    letra='D';
}
else{
    letra='F';
}
console.log('Nota es'+ ' '+letra);

//Estructura Switch

let dia=1;

switch(dia){
    case 0:
    console.log("Domingo");
        break;

    case 1:
    console.log("Lunes");
        break;

    case 2:
    console.log("Martes");
        break;
    
    case 3:
    console.log("Miercoles");
        break;
    
    case 4:
    console.log("Jueves");
        break;
    
    case 5:
    console.log("Viernes");     
        break;

    case 6:
    console.log("Sabado");
        break;

    default:
        console.log("No permitido");

}
