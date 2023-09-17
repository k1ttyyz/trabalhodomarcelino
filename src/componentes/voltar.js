'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function Voltar(){
    const{push} = useRouter();
    const sair = (e) => {
        e.preventDefault();
        Cookies.remove('token')
        push('/')
    }
    return(
        <div> <button onClick={sair} className="hoje">sair</button> </div>
    )
}

//componente que importei no dashboard para aparecer o botão de sair para pagina de login