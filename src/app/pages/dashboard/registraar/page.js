'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Formulariozinho = () => {
        const [user, setUser] = useState({
          name:'',
          email: '',
          password: '',
        });
        const { push} = useRouter();
      
        const handlerFormSubmit = async (event) => {
          event.preventDefault();
          try {
            await postUser(user);
            return push("/pages/dashboard");
          } catch {
           return toast.error("Erro")
          }
        };  
    return(
      

    <div className="re">
    <form onSubmit={handlerLogin}>
    <h2 className="dd">FORMULÁRIO PARA REGISTRAR</h2>
      <div className="cont">
   
      <div className="eu">
      
     
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
export default Formulariozinho;

//pagina simples com formulário ao qual ira registrar novos usuarios