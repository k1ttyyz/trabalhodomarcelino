import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense} from "react";
import Listarsim from "@/app/componentes/Listarsim";
export default async function Dashboard() {
   

    const users = getUsers()
    return (
        <div>
           <Suspense fallback={<p>Carregando a pagina!!</p>}>
            <Listarsim users ={users}/>
            <button><a href="/pages/alter">Alterar</a></button>
            <button><a href="/pages/registraar">Registrar</a></button>
           </Suspense>
            
        </div>
    );
};