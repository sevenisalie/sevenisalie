import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GoodToast = (msg) => {
    const ToastStyle = {
        borderRadius: "50px",
        color: "rgba(242, 242, 242, 0.87)",
        backgroundColor: "rgba(29, 30, 32, 0.95)",
        border: "2px solid rgba(251, 219, 55, 0.95)",
        padding: "0.42em",
        
    }

    const id = toast(`${msg}`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        style: ToastStyle
    })
    toast.update(id, { render: `${msg}`, hideProgressBar: true, closeOnClick: true, position: "bottom-right", autoClose: 5000, className: 'rotateY animated', draggable: true})
}

export default GoodToast
//toast element wrapped as context in _app.js