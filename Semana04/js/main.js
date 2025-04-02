import { CarroFactory } from './factory.js';


// class Carro{
//     //
//     //Atributos
//     //El constructor
//     constructor(modelo){
//         this.modelo = modelo;
//     }
// }


// class CarroFactory{
//     static crearCarro(modelo){
//         return new Carro(modelo);
//     }
// }

// //Exporto funciones, objetos, variables.
// export { CarroFactory };


const generarAuto = CarroFactory.crearCarro("Nissan");

console.log(generarAuto.modelo);