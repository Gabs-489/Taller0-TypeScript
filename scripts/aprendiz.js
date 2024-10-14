export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apllidos, avatar, edad, nivelEducativo) {
        this.nombres = nombres;
        this.apllidos = apllidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
