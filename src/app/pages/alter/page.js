'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Formulariozinho = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('Sucesso ao ser alterado, uhuu!!')
    }

    return(
      

    <div className="a">
    <form onSubmit={handlerLogin}>
    <h2 className="dd">FORMULÁRIO DE ALTERAR</h2>
      <div className="containeer">
   
      <div className="b">
      
     
       <br/>
       <input placeholder="email" type="E-mail" className="innna"></input><br/>
       <br/>
       <input placeholder="name" type="nome" className="innne"></input><br/>
       <br/>
       <input placeholder="password" type="senha" className="inne"></input>
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
export default Formulariozinho;

// aqui é meu formulário para alterar o usuario ao qual tem o toast que é uma dependencia do react utilizada para configurar css e tem o handler que é pro login do usuario para validar se foi ou não alterado