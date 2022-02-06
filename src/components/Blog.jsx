import { blogPersonData, blogFilmData, blogSongData } from "../utils"
import BlogCard from './BlogCard'

const BlogTypeTitle = ({title}) => (
    <div className='blog-type-title'>
        <h3>{title}</h3>
    </div>
);

const blogTypes = [
    {
        title: "Empowering Women of the Week",
        color: 'purple',
        data: blogPersonData,
    },
    {
        title: "Empowering Films and TV Shows of the Week",
        color: 'orange',
        data: blogFilmData,
    },
    {
        title: "Empowering Songs of the Week",
        color: 'yellow',
        data: blogSongData,
    },
]

const Blog = () => {
    const displayBlogCards = blogTypes.map(blogTypes => {
        
        const displayParticularBlogCards = blogTypes.data.map(blogType => (
            <BlogCard color={blogTypes.color} name={blogType.name} image={blogType.image}/>
        ));

        return (
        <div className="blog-container">
            <BlogTypeTitle title={blogTypes.title}/>
            <div className="blogcards-container">
                {displayParticularBlogCards}
            </div>
            <div>
                <img src={require('../images/Line.png')} alt="line"></img>
            </div>
        </div>
    )})

    return (
        <section className='blog' id='blog'>
            {displayBlogCards}
        </section>
    )
}

export default Blog;