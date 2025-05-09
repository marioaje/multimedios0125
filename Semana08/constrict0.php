<?php
declare(strict_types=0);//Esto son dire4ctivas, no exige
function sumar(int $dato1,int $dato2): int{
    return $dato1 + $dato2;
}

$resultados = sumar(12, "6");
echo $resultados."<br>";

?>