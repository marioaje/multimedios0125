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

$arreglo = ["Mario", "Alberto", "Isaac"];
foreach ($arreglo as $key) {
    # code...
    echo "----key: $key<br> ";
}


    echo "Saludos clase";
?>