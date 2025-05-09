<?php
function add_five(&$value) {
$value += 5;
}
$num = 2;
echo $num."<br>";
add_five($num);
echo $num;
?>