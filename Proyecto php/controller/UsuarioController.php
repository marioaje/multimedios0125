<?php

    require_once __DIR__.'/../accessdata/UsuarioDAO.php';


    class UsuarioController{

        private $dao;


        public function __construct(){
            $this->dao = new UsuarioDAO();
        }

        public function obtenerTodos(){
            return $this->dao->obtenerTodos();
        }

        public function obtenerPorId($id){
            return $this->dao->obtenerPorId($id);
        }

    }

    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        echo "Trabajando";
    }

?>