<?php

    require_once __DIR__.'/../misc/Conexion.php';
    require_once __DIR__.'/../model/Usuario.php';

    class LoginDAO{

        private $pdo;


        public function __construct(){
            $this->pdo = Conexion::conectar();
        }


    }
?>