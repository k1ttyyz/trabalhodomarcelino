import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense} from "react";
import Listarsim from "@/app/componentes/Listarsim";
export default async function Dashboard() {
   

    const users = getUsers()
    return (
        <div>
        <div className="jj">
           <Suspense fallback={<p><img src="https://i.pinimg.com/originals/98/81/5f/98815f30af15d94ab3dd1af44ef8e6a9.gif" className="hhl"></img><p className="hh">Carregando a pagina!!</p></p>}>
            
           
            <div className="bg-gray-200 w-100 italic">
            <Listarsim users ={users}/>
                
            <button><a href="/pages/alter">Alterar</a></button>
            <button><a href="/pages/registraar">Registrar</a></button>
            </div>
           </Suspense>
           </div>
        </div>
    );
};