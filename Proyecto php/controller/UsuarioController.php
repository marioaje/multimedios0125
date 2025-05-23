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

//    public function obtenerTodos(){
//             $stmtm = $this->pdo->query("SELECT * FROM u484426513_ms125.usuarios;");


//             $resultado = [];

//             while ($row = $stmtm->fetch(PDO::FETCH_ASSOC)){
//                 $resultado[] = new Usuario($row['id'],$row['nombre'], $row['apellidos'], $row['estado']);
//             }

//             return $resultado;

//         }


//         //Consulta por Id
//         public function obtenerPorId($id){
//             $stmtm = $this->pdo->prepare("SELECT * FROM u484426513_ms125.usuarios WHERE id = ? ;");
//             $stmtm->execute([$id]);

//             $row = $stmtm->fetch(PDO::FETCH_ASSOC);

//             return new Usuario($row['id'],$row['nombre'], $row['apellidos'], $row['estado']);;

//         }


    }



?>