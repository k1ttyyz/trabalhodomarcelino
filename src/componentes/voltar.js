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
        <div> <button onClick={sair}>sair</button> </div>
    )
}