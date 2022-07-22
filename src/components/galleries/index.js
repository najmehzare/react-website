import { useState , useEffect } from "react";
import LazyLoad from 'react-lazyload';
import {FixedSizeList as List} from 'react-window';
import Image from "../global/images"; 
import Notify from "../global/notify";
import observable from "../patterns/observable";

const GalleryList = ({data , index , style })=>{
    console.log(data);
    return (
        
        <li> 
        <div style={style}>salam
        { 
            <Image source={data} key={index} />
        }
        </div>
    </li>
    )
}

export default function GallerySection() {
    
    const  [image , setImage]  =useState([]);

    useEffect(() => {
        observable.notify('این صفحه جهت تست ایجاد شده است.!!!');
        setImage([...Array(10).keys()].map(()=>"https://pardazeshha.com/wp-content/uploads/2020/08/z5.png"))
    } , [])
    

    return (
        <div className="flex items-center justify-center bg-teal-lightest">
             {/* <ul>
             <List 
                itemData={image}
                itemCount={image.length}
                itemSize = {20}
                height={500}
            >
                {GalleryList}
            </List>
            </ul> */}
            <div className="flex flex-col">
                {
                    image.map((item , index) => 
                        <LazyLoad height={50} offset={100} once>
                            <Image source={item} key={index} />
                        </LazyLoad>
                    )
                }
            </div>            
            {
                <Notify />
            }           
        </div>
    )
}