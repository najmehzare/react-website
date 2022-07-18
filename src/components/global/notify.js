import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { openNotify } from "../../store/slices/notifySlice";

function  Notify () {
    const dispatch = useDispatch();

    const setNotifyText = useSelector((state) => state.notify.setNotifyText)
    const showNotify = useSelector((state) => state.notify.showNotify)

    const notify = (type , text) => {
        const config ={
            position: "bottom-left",
            autoClose: 5000,
            // theme: "colored",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            } 
            switch (type) {
                case 'error':
                    toast.error(text,config )
                    break;
                case 'success':
                    toast.success(text,config )
                    break;
                default:
                    toast.warn(text,config );
                    break;
            }       
    };

    const contextClass = {
        success: "bg-blue-600",
        error: "bg-red-600",
        info: "bg-gray-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
      };

    const type = setNotifyText.type;
    const text = setNotifyText.text;
    
    if(showNotify){
        notify(type , text);
        dispatch(openNotify(false));
    } 

    return(
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName={({ type }) => contextClass[type || "default"] + 
                " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
                }
                bodyClassName={() => "text-sm font-white font-med block p-3"}
            />
           
        </>
    )
}

export default Notify