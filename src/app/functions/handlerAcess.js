import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
       
        return userAuth;
    }
}
export default handlerAcessUser;

//aqui basicamente ira pegar o token e os requerimentos da pagina de login e ira fornecedor pro localstorage mostrando oque voce colocou ao preencher o formulario