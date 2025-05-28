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

        public function insertar(Usuario $objeto){
            return $this->dao->insertar($objeto);
        }

    }

    if ($_SERVER['REQUEST_METHOD'] == "POST"){

            $nombre = $_POST['nombre'];
            $apellidos = $_POST['apellidos'];
            $estado = $_POST['estado'];
        
            $objeto = new Usuario(null, $nombre, $apellidos, $estado);

            $controlador = new UsuarioController();
            $controlador->insertar($objeto);
            
            header("Location: ../view/Usuario");
            exit();
        // capturan los parametros, los incluyen en un objeto
        // --->me invoquen la funcion insertar
        

    }

?>