import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense} from "react";
import Listarsim from "@/componentes/Listarsim";
import Voltar from '../../../componentes/voltar';
export default async function Dashboard() {
   

    const gatito = getUsers()
    return (
        <div>
        <div className="jj">
           <Suspense fallback={<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/1024px-Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" className="hhl"></img><p className="hh">Carregando a pagina... aguarde o gatinho programador, terminar de programar!</p></p>}>
            
           
            <div className="elgato">
            <Listarsim gatito ={gatito}/>

           

            {gatito.map ((gatito => {
               return(
            <h1>
<p>{gatito.nome}</p>
<p>{gatito.email}</p>
<p>{gatito.password}</p>

            </h1>
               )
           }))}
        
        <button><a href="/pages/alter">Alterar</a></button>
            <button><a href="/pages/registraar">Registrar</a></button>
           <Voltar/>
            
            </div>
           </Suspense>
        




         </div>
                   </div>

        

        
    );
};