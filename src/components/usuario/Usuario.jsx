import { useParams } from 'react-router-dom';

const Usuario = () => {

     const parametros = useParams();

    return (
        <>
       
        <h2>Usuario {parametros.id}</h2>
        </>
    )
}
export default Usuario;