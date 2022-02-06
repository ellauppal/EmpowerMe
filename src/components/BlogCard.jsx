import BlogCardDetails from './BlogCardDetails';
import { useState } from 'react';

const BlogCard = (props) => {
    
    const [viewMoreDetails, setViewMoreDetails] = useState(false);

    return (
        <>
            <div className={`blogcard ${props.color}`} onClick={() => setViewMoreDetails(true)}>
                <img className='blogcard-image' src={props.image} alt='blogcard'/>
                <h5 className="blogcard-name">{props.name}</h5>
            </div>
            { viewMoreDetails && <BlogCardDetails details={props} viewMoreDetails={viewMoreDetails} setViewMoreDetails={setViewMoreDetails}/> }
        </>
    )
}

export default BlogCard;