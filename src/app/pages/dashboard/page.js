import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense} from "react";
import Listarsim from "@/componentes/Listarsim";
import Voltar from '../../../componentes/voltar';
import Link from "next/link";

export default async function Dashboard() {
   

    const gatito = await getUsers()
    return (
        <div>
        <div className="jj">
            
           <Suspense fallback={<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif/1024px-Cat_Laptop_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" className="hhl"></img><p className="hh">Carregando a pagina... aguarde o gatinho programador, terminar de programar!</p></p>}>
            
           
           
           

           <div className="elgato">
<div className="meudeus">
<h1 className="usu"> USUÀRIOS CADASTRADOS</h1>
            {gatito.map ((gatito => {
                
               return(
                
            <h1 className="omg">
               
<p>{gatito.nome}</p>
<p>{gatito.email}</p>
<p>{gatito.password}</p>
<Link href={`dashboard/alter/${gatito.id}`} className="alto">Alterar</Link><br></br>
            </h1>
               )
           }))}
            <div className="bota">
         <Listarsim gatito ={gatito}/>
        <button className="bota1"><a href="/">Alterar</a></button>
            <button className="bota2"><a href="/pages/dashboard/registraar">Registrar</a></button>
           
           <Voltar/>
           </div>
           </div>
            </div>
           </Suspense>
         




         </div>
                   </div>

        

        
    );
};

//aqui no dashboard é a pagina aonde teremos uma lista de usuarios cadastrados ao qual quando formos fazer login vai aparecer aqui 
//e também temos o suspense que é aonde vai aparecer aquela imagem do gatinho carregando a tela.