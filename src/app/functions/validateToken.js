import { decode } from "jsonwebtoken";
const validateToken = (token)=>{
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return token= true
    }
    return token=false;
}   
export {validateToken};

// aqui é aonde iremos validar o token ou seja , ele pega do handleracessapi se o token é valido , se não , ele não ira funcionar