import { Aprendiz, NivelEducativo } from './aprendiz.js';
export var ap = new Aprendiz("Gabriela", "Zambrano Zuluaga", "avatar.png", 20, NivelEducativo.UNIVERSITARIO);
var aprendizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./" + aprendiz.avatar + "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>" + aprendiz.nombres + "</td></tr>\n    <tr><td>Apellidos: </td><td>" + aprendiz.apllidos + "</td></tr>\n    <tr><td>Nivel educativo: </td><td>" + aprendiz.nivelEducativo + "</td></tr>\n    <tr><td>Edad: </td><td>" + aprendiz.edad + "</td></tr>";
    aprendizTable.appendChild(tbodyAprendiz);
}
