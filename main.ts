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
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement> document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () =>  {
    let text:string = textoBusqueda.value;
    text = (text==null)?"": text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
};



mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);




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

function  mostrarCursosAprendiz(cursos:Curso[]):void {
    let cursosTbody:HTMLElement = document.createElement("tbody");
    let estado:string[] = cursos.map(c => (c.calificacion >60)? 'green':'red');
    let index:number = 0;
    for (let curso of cursos)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement);
        index++;
    }
    
    cursosTable.appendChild(cursosTbody);
}
