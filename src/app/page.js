'use client'
import { useEffect, useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push} = useRouter();
  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Ocorreu um erro no email ou senha!")
      }
      
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação")
    }
  }
  return (
    <body className="bboo">
    <div className="loogin">
    
      <form onSubmit={handlerLogin}>
      <h5 className="llo">PAGINA DE LOGIN <img src=""></img></h5>
       
       
        <input
          placeholder='E-mail'
          type="email" className="linn"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>

        

        <input
          placeholder='Senha'
          type='password' className="lnn"
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>

        <button className="bbl">Entrar</button>
      </form>
      <ToastContainer/>
    </div>
    </body>
  );
}

//aqui sera definido a pagina de login ao qual tera o componente toast que é pra poder ter a forma de "props" entre as páginas como o navigation que permite que va de uma pagina a outra
// na função do login ira definir que vai começar com espaço em branco assim para preencher o usuario com os requerimentos que pedem no handleracessapi que assim puxando com a rota user ira identificar se esta correto para poder ir a outra pagina