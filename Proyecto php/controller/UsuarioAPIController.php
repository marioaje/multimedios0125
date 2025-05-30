<?php

    require_once __DIR__.'/../accessdata/UsuarioDAO.php';


    class UsuarioAPIController{

        private $dao;


        public function __construct(){
            $this->dao = new UsuarioDAO();
        }

//GET PUT POST DELETE???

        public function manejarPeticiones(){
            $metodos = $_SERVER['REQUEST_METHOD'];

            switch ($metodos) {
                case 'GET':
                    //Que necesito
                    # code...
                        $response = $this->dao->obtenerTodos();
                        echo json_encode($response);
                    break;

                case 'POST':
                    # code...
                        $datos = json_decode(file_get_contents("php://input"), true);

                        $nombre = $datos['nombre'];
                        $apellidos = $datos['apellidos'];
                        $estado = $datos['estado'];
            
                        $objeto = new Usuario(null, $nombre, $apellidos, $estado);
                        
                        $this->dao->insertar($objeto);

                        echo json_encode(["mensaje" => "Datos insertados"]);
                    break;
                    
                // case 'PUT':
                //     # code...
                //     break;
                    
                // case 'DELETE':
                //     # code...
                //     break;                    
                
                // default:
                //     # code...
                //     break;
            }
            //GET PUT POST DELETE???

        }



        // public function obtenerTodos(){
        //     return $this->dao->obtenerTodos();
        // }

        // public function obtenerPorId($id){
        //     return $this->dao->obtenerPorId($id);
        // }

        // public function insertar(Usuario $objeto){
        //     return $this->dao->insertar($objeto);
        // }

    }

   

?>