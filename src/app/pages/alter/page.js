'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Formulariozinho = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('Sucesso ao ser alterado, uhuu!!')
    }

    return(
      
<div>
    <form>
</form>
<ToastContainer/>
</div>

    )
};
export default Formulariozinho;