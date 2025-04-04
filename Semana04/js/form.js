function salvando(){

    const nombre = document.getElementById('nombre').value;
    const edad = document.querySelector('#edad').value;
    const estado = document.getElementById('estado').value;


    let persona = {
        nombre: nombre,
        edad: edad,
        estado : estado
    }


    const jsonObjeto = JSON.stringify(persona);
    console.log(persona);
    console.log(jsonObjeto);

}


