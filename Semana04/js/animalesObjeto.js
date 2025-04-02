//
// peso
// fechanacimiento
// color
// nombre
// descripcion

export class Animales {
    constructor(peso, fechanacimiento, color, nombre, descripcion) {

       // if ( typeof peso !== "number") throw new Error("No es un numero");

        this.peso = peso;
        this.fechanacimiento = fechanacimiento;
        this.color = color;
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    obtenerpeso() {
        return this.peso;
    }

    obtenerfechanacimiento() {
        return this.fechanacimiento;
    }


    obtenercolor() {
        return this.color;

    }

    obtenernombre() {
        return this.nombre;
        this.descripcion;
    }


    obtenerdescripcion() {
        return this.descripcion;
    }


    ajustarpeso(_datos){
        this.peso = _datos;
    }

    ajustarcolor(_datos){
        this.color = _datos;
    }

    ajustardescripcion(_datos){
        this.descripcion = _datos;
    }


    ajustarfechanacimiento(_datos){
        this.fechanacimiento = _datos;
    }

    ajustarnombre(_datos){
        this.nombre = _datos;
    }

}