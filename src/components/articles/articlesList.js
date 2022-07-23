import React , { useState , useContext} from 'react';
import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";

//import context
import ArticlesListContext from '../../contexts/articlesListContext';
import SearchInput from '../global/elements/SearchInput';
import ArticlesTable from './articlesTable';

function ArticlesList() {
    
    // console.log('list');

    const ArticlesContext = useContext(ArticlesListContext);
    const articlesList = ArticlesContext.articles;

    const [keyword, setKeyword] = useState("");

    const filteredArticles = articlesList.filter(
      (article) =>
        article.title.toLowerCase().includes(keyword) ||
        article.body.toLowerCase().includes(keyword) ||
        article.auter.toLowerCase().includes(keyword)
    );
  
    const onInputChange = (e) => {
      e.preventDefault();
  
      setKeyword(e.target.value.toLowerCase());
    };
       
    return (
        <>
            <div className='grid justify-items-center '>
            <Card className="">
                <CardBody className="text-center">

                    <Typography variant="h5" className="mb-2 flex flex-row justify-between ">
                   
                    <div className="flex justify-start"> لیست مقالات</div>
                    <div className="flex justify-end text-sm font-light"> کل مقالات: {articlesList.length} </div>
                    </Typography>
                    
                    <Typography className="mb-2">
                        <div className="">
                            <SearchInput
                                placeholder="جستجو مقاله"
                                onChange={onInputChange}
                            />
                        </div>      
                    </Typography>

                    <ArticlesTable articles={filteredArticles}/> 

                </CardBody>
            </Card>
            </div>
        </>
    )
}


export default ArticlesList;