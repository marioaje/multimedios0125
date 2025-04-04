const listaPersonas = `[
    {"nombre": "Mario", "edad": 40, "estado" : true},
    {"nombre": "Alberto", "edad": 40, "estado" : false},
    {"nombre": "Isaac", "edad": 8, "estado" : true}
]`;



function mostrarpersonas() {
    listaObjetoPersonas = JSON.parse(listaPersonas);

    let filasTabla = document.getElementById("filasTabla");


    listaObjetoPersonas.forEach(element => {
        console.log(element.nombre);

        let fila = `<tr class="">
                <td>${element.nombre}</td>
                <td>${element.edad}</td>
                <td>${element.estado}</td>
                <td>
                        <a
                            name=""
                            id=""
                            class="btn btn-primary"
                            href="#"
                            role="button"
                            >Editar</a
                        >
                            ||
                        <a
                            name=""
                            id=""
                            class="btn btn-danger"
                            href="#"
                            role="button"
                            >Eliminar</a
                        >
                </td>
            </tr>`;

        filasTabla.innerHTML += fila;

    });

}