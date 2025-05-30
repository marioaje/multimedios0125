<?php

    header("Content-Type: application/json");
    require_once '../../controller/UsuarioAPIController.php';
    
    
    $usuarioAPIControllerer = new UsuarioAPIController();
    $usuarioAPIControllerer->manejarPeticiones();


?>