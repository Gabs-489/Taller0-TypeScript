console.log("Hola Mundo");

let miTexto: string= "Hola mundo de nuevo";
console.log(miTexto);

let tagUno: string = "<div class=\"ejemplo\">";
let tagDos: string="<div class='ejemplo'>";

console.log(tagUno);
console.log(tagDos);

console.log("Esta es una linea \n enter");
console.log(`Esta es primera linea
enter`);
console.log(`El valor de i variable es ${miTexto}`);

let op1: number=10;
let op2: number =15;

console.log(`Mis variables inciales son ${op1} y ${op2}`);

op1++;
op2+=4;

console.log(`Mis variables finales son ${op1} y ${op2}`);

let resultado: number = op1/op2;
console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${resultado.toPrecision(2)}`);

let varTipoDesc:any;
console.log(`La variable es ${varTipoDesc} y es de tipo ${typeof(varTipoDesc)}`);
varTipoDesc = "Ahora es un texto"
console.log(`La variable es ${varTipoDesc} y es de tipo ${typeof(varTipoDesc)}`);
varTipoDesc = 2.8
console.log(`La variable es ${varTipoDesc} y es de tipo ${typeof(varTipoDesc)}`);

function imprimirMensaje(): void{
    console.log("Mensaje generico");
    
}

function imprimirMensaje2(msj:string):void {
    console.log(msj);
}

imprimirMensaje();
imprimirMensaje2("Mensaje parametro");

function sumar(op1:number, op2:number):number {
    return op1+op2
}

var fSumar = sumar;

console.log(sumar(2,4));
console.log(fSumar(4,6));

