import {useNavigate} from 'react-router-dom';

const validarDatos = () => {
    /*const navigate = useNavigate();
    const isAdmin = false;


    var response = axios.get()


    navigate('/Perfil');*/
    localStorage.setItem("session", true);
    localStorage.setItem("userData", JSON.stringify(response));
}; 

 

 /* useEffect(() => {
    localStorage.setItem("userData", JSON.stringify({isAdmin, }));
  }, [isAdmin]);*/

export default validarDatos;