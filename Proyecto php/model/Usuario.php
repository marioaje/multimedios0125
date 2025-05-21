	<!-- 1	id Primaria	int(11)			No	Ninguna		AUTO_INCREMENT	Cambiar Cambiar	Eliminar Eliminar	
	2	nombre	varchar(100)	utf8mb4_unicode_ci		No	Ninguna			Cambiar Cambiar	Eliminar Eliminar	
	3	apellidos	varchar(100)	utf8mb4_unicode_ci		No	Ninguna			Cambiar Cambiar	Eliminar Eliminar	
	4	estado	int(1)			No	Ninguna	 -->

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