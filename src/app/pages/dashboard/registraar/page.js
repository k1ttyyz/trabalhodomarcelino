'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { postUser } from "@/app/functions/handlerAcessAPI";
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Register(){
        const [user, setUser] = useState({
          name:'',
          email: '',
          password: '',
        });
        const { push} = useRouter();
      
        const handlerFormSubmit = async (e) => {
          e.preventDefault();
          try {
            await postUser(user);
            await new Promise((resolve) => {
              toast.success("Usuário registrado com sucesso");
              setTimeout(resolve, 3000)
            })
            return push("/pages/dashboard");
          } catch {
           return toast.error("Erro")
          }
        };  
    return(
      

    <div className="re">
    <form onSubmit={handlerFormSubmit}>
    <h2 className="dd">FORMULÁRIO PARA REGISTRAR</h2>
      <div className="cont">
   
      <div className="eu">
      
     
       <br/>
       <input placeholder="email" type="email" className="innna"  onChange={(e) => {setUser({...user, email: e.target.value})}}  required></input><br/>
       <br/>
       <input placeholder="name" type="name" className="innne"  onChange={(e) => {setUser({...user, name: e.target.value})}}  required></input><br/>
       <br/>
       <input placeholder="password" type="password" className="inne"  onChange={(e) => {setUser({...user, password: e.target.value})}}  required></input>
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


//pagina simples com formulário ao qual ira registrar novos usuarios