<?php

    class Conexion{

        public static function conectar(){

            $host = 'srv863.hstgr.io';
            $db = 'u484426513_ms125';
            $user = 'u484426513_ms125';
            $pass = 'N]18zvue';
            $charset = "utf8mb4";

            $dsn = "mysql:host=$host;dbname=$db;charset=$charset";

            try{
                $pdo = new PDO($dsn, $user, $pass );
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
            }
            catch (PDOException $e){
                die("Error de conexion: ". $e->getMessage());
            }

        }

    }


    // try {
    //     $conexion = Conexion::conectar();
    //     echo "Conexion exitosa";

    //     //Comprobamos las tablas
    //     $stmt = $conexion->query("SHOW TABLES");
    //     $tablas = $stmt->fetchAll(PDO::FETCH_COLUMN);

    //     echo "<br> Tablas de MySQL";
    //     foreach ($tablas as $item) {
    //         # code...
    //         echo "<br>--- $item";
    //     }


    // }
    // catch (Exception $e){
    //         echo "Error al probar la conexion: ". $e->getMessage();
    // }




?>