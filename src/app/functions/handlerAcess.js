import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        if (typeof window !== 'undefined'){
            localStorage.setItem('nome',userAuth.nome),
            localStorage.setItem('email',userAuth.email),
            localStorage.setItem('password',userAuth.senha)
        }
        return userAuth;
    }
}
export default handlerAcessUser;

//aqui basicamente ira pegar o token e os requerimentos da pagina de login e ira fornecedor pro localstorage mostrando oque voce colocou ao preencher o formulario