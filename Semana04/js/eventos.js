//Eventos
document.getElementById("botonGuardar").addEventListener("click", function () {
    alert("Guardando datos");
    //Llamamos una funcin
})

//Eventos del teclado
document.addEventListener("keydown", function(event)
{
    //alert("Tecla presionada " + event.key);
    console.log("Tecla presionada " + event.key);
})

//Eventos para el mouse
//contendor
document.getElementById("contendor").addEventListener("mouseover", function(){
    this.style.backgroundColor = "blue";
})

document.getElementById("contendor").addEventListener("mouseout", function(){
    this.style.backgroundColor = "white";
})


//Eventos sobre el input
document.getElementById("nomnbre").addEventListener("input", function(event){
    alert("escribio o digito "+ event.target.value );
})




