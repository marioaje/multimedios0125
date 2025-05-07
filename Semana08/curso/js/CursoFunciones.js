import { CursoModel } from "../model/CursoModel.js";

const URL_API = 'https://paginas-web-cr.com/Api/apis/';
const consultarAPI ='ListaCurso.php';
const crearAPI ='';
const actualizarAPI ='';

const mensajeSuccess = `
                <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                    <strong>Curso</strong> Accion Finalizada
                </div>`;


const mensajeDelete = `
                <div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                    <strong>Curso</strong> Accion Finalizada
                </div>`;                
$(document).ready(function () {
    obtenerCursos();


    $("#formularioCrear").submit(function (e) { 
        e.preventDefault();
        crearCurso();
    });

    $("#formularioEditar").submit(function (e) { 
        e.preventDefault();
        actualizarCurso();
    });

});
// document.addEventListener('DOMContentLoaded', () =>{

//     obtenerCursos();


//     document.getElementById('formularioCrear').addEventListener('submit', (evento)=>{
//         evento.preventDefault();
//         crearCurso();
//     })

//     document.getElementById('formularioEditar').addEventListener('submit', (evento)=>{
//         evento.preventDefault();
//         actualizarCurso();
//     })
    
//     document.getElementById('formularioEliminar').addEventListener('submit', (evento)=>{
//         evento.preventDefault();
//         eliminarCurso();
//     })
    
// });





//CRUD
export function obtenerCursos(){
    //Funcion nativa que consume APIs
    // //https://paginas-web-cr.com/Api/apis/ListaCurso.php
    // fetch(`${URL_API}${consultarAPI}`, 
    //     { method: 'POST'})
    // .then(response => response.json())
    // .then(
    //     data => cargarDatos(data.data)
    // )
    // .catch(error => console.error(error));

    $.ajax({
        type: "POST",
        url: `${URL_API}${consultarAPI}`,        
        dataType: "json",
        beforeSend: function(){
            let htmlString = `
                        <button
                            class="btn btn-primary"
                            type="button"
                            disabled
                        >
                            <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Loading...
                        </button>`;

            $("#mensajePersonalizado").html(htmlString);

        },
        success: function (response) {
            console.log(response.data);
            cargarDatos(response.data);
            $("#mensajePersonalizado").html("");
        },
        error: function(xhr, status, error){
            let htmlString = `<div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                    <strong>Error: </strong> ${error} <br>
                    <strong>Status: </strong> ${status} <br>
                    <strong>Xhr: </strong> ${xhr} <br>
                </div>`;

            $("#mensajePersonalizado").html(htmlString);
        }
    });


}

function cargarDatos(lista){
    //console.info(lista);
    //const tablaBody = document.getElementById('tablaBody');
    const $tablaBody = $('#tablaBody');
    //tablaBody.innerHTML = '';
    $tablaBody.empty();

    lista.forEach(element => {
        let fila = `        
                <tr class="">
                    <td scope="row">${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.descripcion}</td>
                    <td>${element.tiempo}</td>
                    <td>${element.usuario}</td>
                    <td>
                        <a
                            name=""
                            id=""
                            class="btn btn-primary"
                            onclick="editarCurso(${element.id}, '${element.nombre}', '${element.descripcion}', '${element.tiempo}','${element.usuario}')"
                            role="button"
                            >Editar</a
                        >
                        ||
                        <a
                            name=""
                            id=""
                            class="btn btn-danger"
                            onclick="eliminarCurso(${element.id})"
                            role="button"
                            >Eliminar</a
                        >
                    </td>
                </tr>
        `;

        //tablaBody.innerHTML += fila;
        $tablaBody.append(fila);
    });

}

function crearCurso(){
    alert("Creando");
    // const nombre = document.getElementById('nombre').value;
    // const descripcion = document.getElementById('descripcion').value;
    // const tiempo = document.getElementById('tiempo').value;
    const nombre = $("#nombre").val();
    const descripcion = $("#descripcion").val();
    const tiempo = $("#tiempo").val();

    const usuario = 'Prof Mario';

    const nuevoCurso = new CursoModel(null, nombre, descripcion, tiempo, usuario);



    $.ajax({
        type: "POST",
        url: `${URL_API}InsertarCursos.php`, 
        data: JSON.stringify(nuevoCurso),
        contentType: 'application/json',              
        dataType: "json",
        beforeSend: function(){
            let htmlString = `
                        <button
                            class="btn btn-primary"
                            type="button"
                            disabled
                        >
                            <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Loading...
                        </button>`;

            $("#mensajePersonalizado").html(htmlString);

        },
        success: function (response) {
            // console.log(response.data);
            // cargarDatos(response.data);
            finalizarCreacion(response);
            $("#mensajePersonalizado").html("");
            obtenerCursos();
        },
        error: function(xhr, status, error){
            let htmlString = `<div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                    <strong>Error: </strong> ${error} <br>
                    <strong>Status: </strong> ${status} <br>
                    <strong>Xhr: </strong> ${xhr} <br>
                </div>`;

            $("#mensajePersonalizado").html(htmlString);
        }
    });

    //console.log(nuevoCurso);
    // fetch (`${URL_API}InsertarCursos.php`, 
    //     { 
    //         method: 'POST',
    //         body: JSON.stringify(nuevoCurso)
    //     })
    //     .then(response => response.json())
    //     .then(
    //         data => {
    //             finalizarCreacion(data);
    //         }
    //     )
    //     .catch(error => console.error(error));

}

function finalizarCreacion(data) {
    //const mensajePersonalizado = document.getElementById('mensajePersonalizado');

    //mensajePersonalizado.innerHTML = mensajeSuccess;
    $("#mensajePersonalizado").html(mensajeSuccess);

    //document.getElementById('formularioCrear').reset();
    $('#formularioCrear')[0].reset();

    // const modalCrear = bootstrap.Modal.getInstance(document.getElementById('modalCrear'));
    // modalCrear.hide();
    //bootstrap.Modal.getInstance($('#modalCrear')[0].hide());
    $('#modalCrear').modal('hide');

}


window.editarCurso = (id, nombre, descripcion, tiempo, usuario) =>{

    // document.getElementById('ideditar').value = id;
    // document.getElementById('nombreeditar').value = nombre;
    // document.getElementById('descripcioneditar').value = descripcion;
    // document.getElementById('tiempoeditar').value = tiempo;
    // document.getElementById('usuarioeditar').value = usuario;

    $("#ideditar").val(id);
    $("#nombreeditar").val(nombre);
    $("#descripcioneditar").val(descripcion);
    $("#tiempoeditar").val(tiempo);
    $("#usuarioeditar").val(usuario);

    // const modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));
    // modalEditar.show();

    $("#modalEditar").modal('show');

    
 }


 function actualizarCurso(){
    const nombre = document.getElementById('nombreeditar').value;
    const descripcion = document.getElementById('descripcioneditar').value;
    const tiempo = document.getElementById('tiempoeditar').value;
    const usuario =  document.getElementById('usuarioeditar').value;
    const id =  document.getElementById('ideditar').value;


    const editarCurso = new CursoModel(id, nombre, descripcion, tiempo, usuario);




    $.ajax({
        type: "POST",
        url: `${URL_API}ActualizarCursos.php`, 
        data: JSON.stringify(editarCurso),
        contentType: 'application/json',              
        dataType: "json",
        beforeSend: function(){
            let htmlString = `
                        <button
                            class="btn btn-success"
                            type="button"
                            disabled
                        >
                            <span
                                class="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                            ></span>
                            Loading...
                        </button>`;

            $("#mensajePersonalizado").html(htmlString);

        },
        success: function (response) {
            // console.log(response.data);
            // cargarDatos(response.data);
            finalizarEdicion(response);
            $("#mensajePersonalizado").html("");
            obtenerCursos();
        },
        error: function(xhr, status, error){
            let htmlString = `<div
                    class="alert alert-danger alert-dismissible fade show"
                    role="alert"
                >
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                    ></button>
                    <strong>Error: </strong> ${error} <br>
                    <strong>Status: </strong> ${status} <br>
                    <strong>Xhr: </strong> ${xhr} <br>
                </div>`;

            $("#mensajePersonalizado").html(htmlString);
        }
    });




    //console.log(nuevoCurso);
    // fetch (`${URL_API}ActualizarCursos.php`, 
    //     { 
    //         method: 'POST',
    //         body: JSON.stringify(editarCurso)
    //     })
    //     .then(response => response.json())
    //     .then(
    //         data => {
    //             finalizarEdicion(data);
    //         }
    //     )
    //     .catch(error => console.error(error));



 }

function finalizarEdicion(data){
    // const mensajePersonalizado = document.getElementById('mensajePersonalizado');

    // mensajePersonalizado.innerHTML = mensajeSuccess;
    $("#mensajePersonalizado").html(mensajeSuccess);

    //document.getElementById('formularioEditar').reset();
    $('#formularioEditar')[0].reset();

    // const modalEditar = bootstrap.Modal.getInstance(document.getElementById('modalEditar'));
    // modalEditar.hide();
    $("#modalEditar").modal("hide");

    obtenerCursos();
}


window.eliminarCurso=(id)=>{
    document.getElementById('ideliminar').value = id;

    const modalEliminar = new bootstrap.Modal(document.getElementById('modalEliminar'));
    modalEliminar.show();
    
}


function eliminarCurso(){
    const id =  document.getElementById('ideditar').value;
    //console.log(nuevoCurso);
    fetch (`${URL_API}BorrarCursos.php`, 
        { 
            method: 'POST',
            body: JSON.stringify({id: id})
        })
        .then(response => response.json())
        .then(
            data => {
                finalizarEliminar(data);
            }
        )
        .catch(error => console.error(error));
}

function finalizarEliminar(){
    const mensajePersonalizado = document.getElementById('mensajePersonalizado');

    mensajePersonalizado.innerHTML = mensajeDelete;

    document.getElementById('formularioEliminar').reset();

    const modalEliminar = bootstrap.Modal.getInstance(document.getElementById('modalEliminar'));
    modalEliminar.hide();

    obtenerCursos();
    
}