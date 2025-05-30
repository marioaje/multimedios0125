<?php
    class Usuario {

        public $id ;
        public $nombre ;
        public $apellidos ;
        public $estado ;

        public function __construct($id, $nombre, $apellidos, $estado){
            $this->id = $id ;
            $this->nombre = $nombre ;
            $this->apellidos = $apellidos;
            $this->estado = $estado;
        }

    }

?>