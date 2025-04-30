$("#crear").click(function (e) { 
    e.preventDefault();
    crear();
});


function crear(){
    //alert("Ingresando datos");
    $("#primer").hide();
    $("#segundo").addClass("bg-danger");
}