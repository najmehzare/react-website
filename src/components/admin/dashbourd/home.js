import React , { useEffect ,useState  } from 'react';
import { useDispatch } from "react-redux";

import { useTimeoutFn } from 'react-use'

import usersApi from '../../../api/usersApi';
import articleApi from '../../../api/articlesApi';

import { openNotify , setNotifyText } from "../../../store/slices/notifySlice"
import Notify from "../../global/notify";
import Box from '../../global/transition/box';

export default function HomeDashboard(){

    const dispatch = useDispatch()

    const [articlesCount , setArticleCount] = useState (0)
    const [usersCount , setUsersCount] = useState (0)

    let [isShowing, setIsShowing] = useState(true)
    let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

    useEffect(() => {
        getArticles();
    } , [])

    const getArticles = async () => {
        try {
            let responseArticle = await articleApi.get();
            setArticleCount (responseArticle.data.data.length)
            let responseuser = await usersApi.get();
            setUsersCount (responseuser.data.data.length)
            setIsShowing(false)
            resetIsShowing()
        } catch (e) {
            dispatch(openNotify(true));
            dispatch(setNotifyText({type:'error',text:'خطا در برقراری ارتباط با سرور'}));
            console.log(e);
        }
    }
    return(
        <div className="flex md:flex-row flex-col items-center justify-around bg-teal-lightest">
            
            <div className="h-32 w-32">
                <Box isShowing={isShowing} >
                    تعداد کل کاربران :
                    {usersCount}
                </Box>
            </div>
            <div className="h-32 w-32">
                <Box isShowing={isShowing} >
                    تعداد کل مقالات :
                    {articlesCount}
                </Box>
            </div>

            {
                <Notify />
            }
        </div>
    )
}