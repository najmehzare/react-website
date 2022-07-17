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
            theme: "colored",
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
            />
        </>
    )
}

export default Notify