import LazyLoad from 'react-lazyload';

export default function GallerySection() {
    
    return (
        <div className="flex items-center justify-center bg-teal-lightest">
            <LazyLoad height={50} offset={100} once>
                <img src="https://pardazeshha.com/wp-content/uploads/2020/08/z5.png" /> 
            </LazyLoad>
        </div>
    )
}