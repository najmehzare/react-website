
import { lazy , Suspense } from "react";
import { useDispatch , useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@material-tailwind/react";

import Notify from "../global/notify";

import UsersList from "./usersList";
import AddUser from "./addUser"
import EditUser from "./editUser";

import { openModal , setChild } from "../../store/slices/modalSlice";

const Modal = lazy(()=>import(/* webpackChunkName: 'modal' */ "../../components/modal/modal"));

export default function UsersSection() {
    
    // console.log('index');
    
    const dispatch = useDispatch()
    
    const openModalHandler = () => {
        dispatch(openModal())
        dispatch(setChild('addUser'))
    }    
    const showModal = useSelector((state) => state.modal.showModal);
    const modalChildShow = useSelector(state => state.modal.child);

    return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest"> 
            <div className="bg-white rounded shadow p-6 m-4 w-full border">
                <div className="mb-4">

                    <div className="inset-0 flex items-center justify-center">
                        <Button className="text-black bg-slate-400 text-sm" onClick={openModalHandler}>
                                    اضافه کردن کاربر جدید
                        </Button>
                    </div>
                   
                </div>
                <div>
                    <UsersList />
                </div>

                {
                     <Suspense fallback={<p>Loading ...</p>} >
                     {
                        showModal &&  <Modal>
                        {
                            modalChildShow==='addUser' 
                            ? <AddUser />
                            : <EditUser />
                        }
                        </Modal>
                     }
                     </Suspense>
                }
                {
                    <Notify />
                }
            </div>
        </div>
    )
}