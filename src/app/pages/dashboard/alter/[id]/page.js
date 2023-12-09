'use client'
import { ToastContainer, toast} from "react-toastify";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { updateUser, getUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";

export default function Alterar( {params} ){
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { push } = useRouter();

  useEffect(() =>{
    const findUser = async () => {
      const userFind = await  getUser(params.id);
      setUser({ ...user })
    }
    findUser()
  }, [])

  const handlerAlterar = async (e) => {
    e.preventDefault();
    toast.success('Alterado com Sucesso!')
    await updateUser(user, params.id);//pega o usuario e o id dele
    return push("/pages/dashboard");
  }


    return(
      

    <div className="a">
    <form onSubmit={handlerAlterar}>
    <h2 className="dd">FORMULÁRIO DE ALTERAR</h2>
      <div className="containeer">
   
      <div className="b">
      
     
       <br/>
       <input placeholder="email" type="E-mail" className="innna" required></input><br/>
       <br/>
       <input placeholder="name" type="nome" className="innne" required></input><br/>
       <br/>
       <input placeholder="password" type="senha" className="inne" required></input>
       <br/>
       <div  className="buu">
       <button>Entrar</button>
       </div>
       <div className="bu">
       <button ><a href="/pages/dashboard">Voltar</a></button>
       </div>
       </div>
       </div>

</form>

<ToastContainer/>

</div>

    )
};

// aqui é meu formulário para alterar o usuario ao qual tem o toast que é uma dependencia do react utilizada para configurar css e tem o handler que é pro login do usuario para validar se foi ou não alterado