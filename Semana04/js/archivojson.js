let persona = {
    nombre: "Mario",
    edad: 40,
    estado : true
}
let jsonPersona = JSON.stringify(persona);


let recibiendoJSON = '{"nombre": "Mario", "edad": 40, "estado" : true}';
let objetorecibiendoJSON = JSON.parse(recibiendoJSON);

console.log(listaPersonas);
function mostrarpersona(){
    let personaConversion = JSON.parse(recibiendoJSON);

    console.log(recibiendoJSON);
    console.log(personaConversion);


    let contenidoWeb = `
        <ul>
            <li>${ personaConversion.nombre}</li>
            <li>${personaConversion.edad}</li>
            <li>${personaConversion.estado}</li>
        </ul>
    `;

    document.getElementById("nombre").value = personaConversion.nombre;
    document.getElementById("edad").value = personaConversion.edad;
    document.getElementById("estado").value = personaConversion.estado;


    document.getElementById("resultado").innerHTML = contenidoWeb;

}
