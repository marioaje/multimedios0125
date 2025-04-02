class Carro{
    //
    //Atributos
    //El constructor
    constructor(modelo){
        this.modelo = modelo;
    }
}


class CarroFactory{
    static crearCarro(modelo){
        return new Carro(modelo);
    }
}

//Exporto funciones, objetos, variables.
export { CarroFactory };