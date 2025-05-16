<?php

  //  echo "Procesando solicitud";
//nombre, correo, telefono
echo  "<br>";
//echo $_SERVER['REQUEST_METHOD'];//Validacion del formulario que recibe un post
if ($_SERVER['REQUEST_METHOD'] == "GET"){
        $errores = [];
        echo "Procesando solicitud";

        //Validamos el nombre
        if( empty($_GET["nombre"])){
            $errores[] = "El nombre es obligatorio.";
           // echo $errorNombre;
        }else{
            //Se procesan los datos
            //Debo protejerla de inyecciones de SQL
            //Evita la inserccion de JS y HTML 
            // echo htmlspecialchars($_GET["nombre"]);
            // echo  "<br>";
            $nombre = htmlentities(htmlspecialchars($_GET["nombre"]));
        }

        //Validamos el correo
        if( empty($_GET["correo"])){
            $errores[] = "El correo es obligatorio.";
           // echo $errorCorreo;
        }
        elseif(!filter_var($_GET["correo"], FILTER_VALIDATE_EMAIL)){
             $errores[] = "eL correo no tiene el formato correcto"    ;
        }
        else{
            $correo = htmlentities(htmlspecialchars($_GET["correo"]));
            //Se procesan los datos
        }

        //Validamos el telefono
        if( empty($_GET["telefono"])){
            $errores[] = "El telefono es obligatorio.";
            //echo $errorTelefono;
        }else{
            //Se procesan los datos
            $telefono = htmlentities(htmlspecialchars($_GET["telefono"]));
        }

        //Mostrando nuestros resultados del form
        if(empty($errores)){
            //Carga la informacion del form
            echo "<h2>Informacion del form</h2>";
            echo "<br>Nombre: $nombre ";
            echo "<br>Telefono: $telefono ";
            echo "<br>Correo: $correo ";
        }
        else{
            //Muestrame los errores
            echo "Errores: <br>";
            foreach ($errores as $item) {
                # code...
                echo "<p> $item </p>";
            }
        }
        //print_r($errores);

}
else{
    echo "No se procesa la solicitud";
}



// echo  "<br>";
// print_r($_GET);
// echo  "<br>";
//echo $_GET["nombre"];

?>