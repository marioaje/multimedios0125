<!-- //Para ejecutar codigo php???
//Un servidor para php
//Proyecto dentro del servidor para su ejecucion
//Terminacion php -->
<?php
 //las variables inician $
 $nombre = "Mario";
 $edad = 40;
 $estado = true;
 $decimales = 1.23;




 $t = date("H");
 if ($t < "20") {
    echo "Have a good day!";
 } else {
    echo "Have a good night!";
 }

echo ($t < "20") ? "Have a good day!" :  "Have a good night!";












 //Para definir una constante
 define("URL_API",'https://paginas-web-cr.com/Api/apis/');
 const consultarAPI ='ListaCurso.php';

//palabra_reservada  nombrefuncion (posiblesparametros)
function saludos(){
    echo "Saludos clase<br>";
}

function sumar($dato1, $dato2){
    return $dato1 + $dato2;
}

saludos();
$resultados = sumar(12, 6);
echo $resultados."<br>";



echo URL_API;
echo "<br>";
echo consultarAPI;
echo "<br>";


//Ciclos
for ($i=0; $i < 10; $i++) { 
    echo "Numero: $i <br> ";
}

$a = 0;

while ($a < 10) {
    echo "+++Numero: $a  <br> ";
    //$a =+ 1;
    $a++;
}

//Declaraciones de arreglos
$arreglo = ["Mario", "Alberto", "Isaac"];
$colors = array("red", "green", "blue", "yellow");

foreach ($arreglo as $key) {
    # code...
    echo "----key: $key<br> ";
}


    echo "Saludos clase";


    function familyName($fname, $year, $day, $name, $email) {
        echo "$fname Refsnes. Born in $year <br>";
        }
?>