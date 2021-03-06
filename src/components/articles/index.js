import { useContext , useEffect ,useReducer, lazy , Suspense } from "react";

import { Button } from "@material-tailwind/react";
import { useDispatch , useSelector } from "react-redux";

import { openModal , closeModal , setChild } from "../../store/slices/modalSlice"
import { openNotify , setNotifyText } from "../../store/slices/notifySlice"

//import context
import ArticlesListContext from '../../contexts/articlesListContext';

//import Reducers
import AppReducer from '../../reducers/appReducer';

import articleApi from '../../api/articlesApi';

import Notify from "../global/notify";

import ArticlesList from "./articlesList";
import AddArticle from "./addArticle";
import EditArticle from "./editArticle";

const Modal = lazy(()=>import(/* webpackChunkName: 'modal' */ "../../components/modal/modal"));

export default function ArticlesSection() {
    
    // console.log('add');
    
    const dispatch = useDispatch()

    const ArticlesContext = useContext(ArticlesListContext);
    const [articlesList , dispatchArticles] = useReducer(AppReducer,ArticlesContext);

    const showModal = useSelector((state) => state.modal.showModal)
    const modalChildShow = useSelector(state => state.modal.child);

    const openAddModalHandler = () => {
        dispatch(openModal())
        dispatch(setChild('addarticle'))
    }    

    useEffect(() => {
        getArticles();
    } , [])

    const getArticles = async () => {
        try {
            let response = await articleApi.get();
            dispatchArticles({ type: 'fetch_articles' , payload :{data : response.data.data} });
        } catch (e) {
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'error',text:'خطا در برقراری ارتباط با سرور'}));
            console.log(e);
        }
    }

    let addArticle = async (article) =>{
        try {
            let res = await articleApi.post("/" , article)
            article.id = res.data.data.id;
            dispatchArticles({ type: 'add_article' , payload :{article} });
            dispatch(closeModal());
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'success',text:'مقاله جدید اضافه شد.'}));
        } catch (e) {
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'error',text:'خطایی رخ داده ...'}));
            console.log(e);
        }       
    };

    let deleteArticle = async (id) =>{
        try {
            await articleApi.delete(`/${id}`)
            dispatchArticles({ type: 'delete_article' , payload :{id} });
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'warn',text:'مقاله حذف شد.'}));
        } catch (e) {
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'error',text:'خطایی رخ داده ...'}));
            console.log(e);
        }
    };


    let editArticle = async (id) =>{
        dispatchArticles({ type: 'target_article' , payload :{ id : id } });
        dispatch(setChild('editArticle'))
        dispatch(openModal())
    };


    let saveArticle = async (article) =>{
        try {
            await articleApi.put(`/${ article.id }`,article);
            getArticles();
            dispatch(closeModal());
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'success',text:'مقاله به درستی ویرایش شد'}));
        } catch (e) {
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'error',text:'خطایی رخ داده ...'}));
            console.log(e);
        }
    };
    
    return (
        <div className="flex items-center justify-center bg-teal-lightest">
            <div className="bg-white rounded shadow p-6 m-4 w-full border">
                <ArticlesListContext.Provider value={{
                        articles : articlesList.articles,
                        targetArticle: articlesList.targetArticle,
                        addArticle,
                        deleteArticle,
                        editArticle,
                        saveArticle
                    }}>

                    <div className="mb-4">
                        <div className="inset-0 flex items-center justify-center">
                            <Button className="text-black bg-slate-400 text-sm" onClick={openAddModalHandler}>
                                        اضافه کردن مقاله جدید
                            </Button>
                        </div>                    
                    </div>

                    <div>
                        <ArticlesList />
                    </div>
                    {
                        <Suspense fallback={<p>Loading ...</p>} >
                            {
                               showModal && <Modal>
                                    {
                                        modalChildShow === 'addarticle' 
                                        ? <AddArticle />
                                        : <EditArticle />
                                    }
                                </Modal>  
                            }
                        </Suspense>
                    }
                    {
                        <Notify />
                    }
                </ArticlesListContext.Provider>
            </div>
        </div>
    )
}