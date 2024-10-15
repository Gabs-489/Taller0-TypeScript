import {Aprendiz, NivelEducativo} from './aprendiz.js';
import {Curso} from './curso.js';


let cursos = [new Curso("Dalgo",30,80,true,2024),
new Curso("Imagenes",40,90,false,2024),
new Curso("DPO",35,100,true,2023),
new Curso("SW",30,95,false,2024)];

export const ap = new Aprendiz("Gabriela", "Zambrano Zuluaga", "avatar.png",20, NivelEducativo.UNIVERSITARIO,cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!;

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);

function mostrarDatosAprendiz(aprendiz:Aprendiz):void {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${aprendiz.avatar}" height="100"></td></tr>
    <tr><td>Nombres: </td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos: </td><td>${aprendiz.apllidos}</td></tr>
    <tr><td>Nivel educativo: </td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${aprendiz.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(aprendiz:Aprendiz): void {
    let numeroCertificados:number = aprendiz.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");
    trElement.innerHTML = `<td><b> Cursos certificados </b></td><td> ${numeroCertificados} </td>`;
    estadisticasTable.appendChild(trElement);
    
}
