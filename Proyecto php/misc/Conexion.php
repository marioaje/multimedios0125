<!-- es: srv863.hstgr.io 
o puede usar esta IP como tu nombre de host: 45.88.196.5

usuario: u484426513_ms125
base de datos: u484426513_ms125
clave: N]18zvue -->

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