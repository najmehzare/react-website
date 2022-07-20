import { useState } from "react";
import LazyLoad from 'react-lazyload';
import {FixedSizeList as List} from 'react-window'

const GalleryList = ({data , index , style })=>{
    return (
        
        <li> 
        <div style={style}>salam
        <img 
            key = {data[index]}
            index={index}
            title={data.title} 
            src='https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'
        />
        <img 
            key = {data[index]}
            index={index}
            title={data.title} 
            src='https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'
        /> </div>
    </li>
    )
}

export default function GallerySection() {
    
    const  [image , setImage]  =useState([
        {id :'1' , title : '1' , src : 'https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'},
        {id :'2' , title : '2' , src : 'https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'},
        {id :'3' , title : '3' , src : 'https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'},
        {id :'4' , title : '4' , src : 'https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'},
        {id :'5' , title : '5' , src : 'https://pardazeshha.com/wp-content/uploads/2020/08/z5.png'},
    ]);

    return (
        <div className="flex items-center justify-center bg-teal-lightest">
             <ul>
             <List 
                itemData={GalleryList}
                itemCount={GalleryList.length}
                itemSize = {20}
                height={500}
            >
                {GalleryList}
            </List>
            
            {
                image.map((item , index) => 
                <li> 
                    <LazyLoad height={50} offset={100} once>
                    <img 
                        key = {item.id}
                        index={index}
                        title={item.title} 
                        src={item.src}
                    /> 
                    </LazyLoad>
                </li>
                )
            }
            </ul>           
        </div>
    )
}