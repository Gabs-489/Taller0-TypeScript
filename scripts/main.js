import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [new Curso("Dalgo", 30, 80, true, 2024),
    new Curso("Imagenes", 40, 90, false, 2024),
    new Curso("DPO", 35, 100, true, 2023),
    new Curso("SW", 30, 95, false, 2024)];
export var ap = new Aprendiz("Gabriela", "Zambrano Zuluaga", "avatar.png", 20, NivelEducativo.UNIVERSITARIO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos: </td><td>" + aprendiz.apllidos + "</td></tr>\n    <tr><td>Nivel educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var numeroCertificados = aprendiz.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b> Cursos certificados </b></td><td> " + numeroCertificados + " </td>";
    estadisticasTable.appendChild(trElement);
}
