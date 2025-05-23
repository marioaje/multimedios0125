<?php

    require_once '../../controller/UsuarioController.php';

    $controller = new UsuarioController();
    $usuarios = $controller->obtenerTodos();
    //$usuarioId = $controller->obtenerPorId("2");

//     print_r($usuarios);
// echo "<br><br><br>";
//     print_r($usuarioId);

?>


<!doctype html>
<html lang="en">
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <!-- Bootstrap CSS v5.2.1 -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
    </head>

    <body>

        <div
            class="container"
        >
            <h1>Consulta Datos Usuario</h1>
            <div
                class="table-responsive"
            >
                <table
                    class="table table-primary"
                >
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">nombre</th>
                            <th scope="col">apellidos</th>
                            <th scope="col">estado</th>                            
                        </tr>

                        <!-- return new Usuario($row['id'],$row['nombre'], $row['apellidos'], $row['estado']);; -->
                    </thead>
                    <tbody>
                       <?php  foreach ($usuarios as $key) {
                        # code..
                        //print_r($key->id);
                            // echo '
                            //         <tr class="">
                            //             <td scope="row">'.$key->id.'</td>
                            //             <td>R1C2</td>
                            //             <td>R1C3</td>
                            //             <td>R1C3</td>
                            //         </tr>';

                            echo "
                                    <tr class=''>
                                        <td scope='row'>$key->id</td>
                                        <td>$key->nombre</td>
                                        <td>$key->apellidos</td>
                                        <td>$key->estado</td>
                                    </tr>";
                       }  ?>



                    </tbody>
                </table>
            </div>
            
        </div>
        

        <!-- Bootstrap JavaScript Libraries -->
        <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
