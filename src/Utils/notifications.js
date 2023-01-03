
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastObject = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
}
const showNotification = async (message, type) => {
    if(type == 'SUCCESS'){
        toast.success(message, toastObject);
    } else if(type == "FAILED"){
        toast.error(message, toastObject);
    } else if(type == "WARNING"){
        toast.warn(message, toastObject);
    }
};

export default showNotification;
