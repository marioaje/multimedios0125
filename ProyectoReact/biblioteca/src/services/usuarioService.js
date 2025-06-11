import axios from 'axios';

const API_URL = 'https://paginas-web-cr.com/Api/apis/';
const obtenerAPI ='ListaUsuarios.php';
const actualizaAPI ='ListaCurso.php';
const agregarAPI ='ListaCurso.php';
const eliminarAPI ='ListaCurso.php';

export const obtenerUsuario = () => axios.get(`${API_URL}${obtenerAPI}`);

export const actualizaUsuario = (datos) => axios.post(`${API_URL}${actualizaAPI}`, datos);

export const agregarUsuario = (datos) => axios.post(`${API_URL}${agregarAPI}`, datos);

export const eliminarUsuario = (id) => axios.post(`${API_URL}${eliminarAPI}`, id);

    //fetch(`${URL_API}${consultarAPI}`, 
// obtener, actualiza, agregar, eliminar
// const URL_API = 'https://paginas-web-cr.com/Api/apis/';
// const consultarAPI ='ListaCurso.php';