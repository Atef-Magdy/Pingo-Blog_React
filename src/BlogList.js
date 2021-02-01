import { Link } from "react-router-dom";

const BlogList = (props) => {

    const blogs = props.blogs;
    return (
        blogs.map((blog)=>(
            <div className="blogs" key={blog.id}>
                <Link to={'/blogs/'+blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <br></br>
                    <br></br>
                    <p>Written by : {blog.author}</p>
                    <br></br>
                </Link>
            </div>
        ))
    
    );
}
 
export default BlogList;