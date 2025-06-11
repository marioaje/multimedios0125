//C:\xampp\htdocs\2025\multimedios0125\ProyectoReact\biblioteca\src\components\usuario
//src\components\usuario
import { obtenerUsuario } from '../../services/usuarioService';
import { useEffect, useState } from 'react';
const UsuarioPage = () => {

    //Set y get analogia
    const [ usuarios, setUsuarios ] = useState([]); //variables de estado 
    const [ cargando, setCargando ] = useState(true);


    //useEffect es una anologia del documentReady
    useEffect( ()=>
        {
        obtenerUsuario()
                .then((respuesta) =>{
                    console.log(respuesta.data.data);
                    setUsuarios(respuesta.data.data);
                }
            )
            .catch((error) => {
                    console.error('Error', error);
                }
            )
        }, []       
    );
    



    return(
        <div>
            <h2>Listado de Usuarios</h2>

            <table>
                <thead>
                    <tr>
                        <th> id </th>
                        <th> name </th>
                        <th> email </th>
                        <th> acciones </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((items) => 
                              (
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>Editar || Eliminar </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UsuarioPage;