'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Formulariozinho = () => {

    const handlerLogin = async (e) => {
        e.preventDefault();
        toast.success('registrado com sucessoo , uhuu!!')
    }

    return(
      
<div>
    <h2>FORMULARIOO</h2>
    <form onSubmit={handlerLogin}>
</form>
<ToastContainer/>
</div>

    )
};
export default Formulariozinho;