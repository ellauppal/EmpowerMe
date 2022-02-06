const BlogCards = (props) => {
    return (
        <div className={`blogcard ${props.color}`}>
            <img className='blogcard-image' src={props.image} alt='blogcard'/>
            <h5 className="blogcard-name">{props.name}</h5>
        </div>
    )
}

export default BlogCards;