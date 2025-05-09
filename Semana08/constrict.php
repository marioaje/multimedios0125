<?php
declare(strict_types=1);//Esto son dire4ctivas, exige que los datos sean exactos
function sumar(int $dato1,int $dato2){
    return $dato1 + $dato2;
}

$resultados = sumar(12, "6");
echo $resultados."<br>";

?>