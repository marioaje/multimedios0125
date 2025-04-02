import { Funciones } from './objetofunciones.js';


const misFuncionesdesdeunobjeto = new Funciones();

document.getElementById("mensajedesdeobjeto").textContent = misFuncionesdesdeunobjeto.saludar("A la clase");