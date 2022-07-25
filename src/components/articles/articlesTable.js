import React , { useState , useMemo } from 'react';
import { ChevronDownIcon ,ChevronUpIcon } from '@heroicons/react/solid'

import Pagination from '../global/pagination';

//import components
import ArticleItem from "./articleItem";

let PageSize = 10;

const orderBy = (articles, value, direction) => {
    if (direction === "asc") {
      return [...articles].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    }
  
    if (direction === "desc") {
      return [...articles].sort((a, b) => (a[value] > b[value] ? -1 : 1));
    }
  
    return articles;
  };
  
  const SortArrow = ({ direction }) => {
    if (!direction) {
      return <></>;
    }
  
    if (direction === "desc") {
      return (
        <div className="flex justify-center align-middle ml-2">
          <ChevronDownIcon className='h-5 w-5 text-blue-500' color="inherit" />
        </div>
      );
    } else {
      return (
        <div className="flex justify-center align-middle ml-2">
          <ChevronUpIcon className='h-5 w-5 text-blue-500' color="inherit" />
        </div>
      );
    }
  };

function ArticlesTable({articles}) {
  
    const [direction, setDirection] = useState();
    const [value, setValue] = useState();
  
    const orderedArticles = orderBy(articles, value, direction);
  
    const switchDirection = () => {
      if (!direction) {
        setDirection("desc");
      } else if (direction === "desc") {
        setDirection("asc");
      } else {
        setDirection(null);
      }
    };
  
    const setValueAndDirection = (value) => {
      switchDirection();
      setValue(value);
    };
    
    const [currentPage, setCurrentPage] = useState(1);

    let currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return orderedArticles.slice(firstPageIndex, lastPageIndex);
    }, [currentPage , articles]);
    
    if(orderedArticles.length !== 0 && currentTableData.length === 0 )
      currentTableData=orderedArticles.slice(0, PageSize);

    return (
        <>
        <table className="text-right min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                        ردیف
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                        <button
                            className=" flex flex-row justify-center"
                            onClick={() => setValueAndDirection("title")}
                            >
                            <div> عنوان </div>
                            {value === "title" && <SortArrow direction={direction} />}
                        </button>
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                        <button
                            className=" flex flex-row justify-center"
                            onClick={() => setValueAndDirection("auter")}
                            >
                            <div> نویسنده </div>
                            {value === "auter" && <SortArrow direction={direction} />}
                        </button>
                        
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-right text-sm font-semibold text-gray-900 sm:pl-6">
                        <button
                            className=" flex flex-row justify-center"
                            onClick={() => setValueAndDirection("create_date")}
                            >
                            <div> تاریخ ایجاد </div>
                            {value === "create_date" && <SortArrow direction={direction} />}
                        </button>
                       
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">ویرایش</span>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
                
                    {
                    ! orderedArticles
                            ? <tr><td>
                                    <p>there isn`t any article</p>
                            </td></tr>
                            : 
                            currentTableData.map((item,index) => <ArticleItem 
                                key = {item.id}
                                article={item} 
                                index={index}
                            />)
                    }

            </tbody>
        </table> 
        <div className='flex justify-center'>
            <Pagination
                key={currentPage}
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={orderedArticles.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div> 
        </>
    )
}


export default ArticlesTable;