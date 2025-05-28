<?php

    require_once __DIR__.'/../misc/Conexion.php';
    require_once __DIR__.'/../model/Usuario.php';

    class UsuarioDAO{

        private $pdo;


        public function __construct(){
            $this->pdo = Conexion::conectar();
        }


        ///CRUD
        public function obtenerTodos(){
            $stmtm = $this->pdo->query("SELECT * FROM u484426513_ms125.usuarios;");


            $resultado = [];

            while ($row = $stmtm->fetch(PDO::FETCH_ASSOC)){
                $resultado[] = new Usuario($row['id'],$row['nombre'], $row['apellidos'], $row['estado']);
            }

            return $resultado;

        }


        //Consulta por Id
        public function obtenerPorId($id){
            $stmtm = $this->pdo->prepare("SELECT * FROM u484426513_ms125.usuarios WHERE id = ? ;");
            $stmtm->execute([$id]);

            $row = $stmtm->fetch(PDO::FETCH_ASSOC);

            return new Usuario($row['id'],$row['nombre'], $row['apellidos'], $row['estado']);;

        }

        public function insertar(Usuario $objeto){
            $sql = "INSERT INTO u484426513_ms125.usuarios (nombre, apellidos, estado) VALUES (?, ?, ?);";
            $stmt = $this->pdo->prepare($sql);
            return $stmt->execute([$objeto->nombre, $objeto->apellidos, $objeto->estado]);
        }

    }

?>