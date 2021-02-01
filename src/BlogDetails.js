import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams();
    const {data:blog, isloading, error} = useFetch('http://localhost:8000/blogs/'+id);
    const direct = useHistory();

    const handelClick= ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            direct.push('/');
        })
    }
    return (
        <div className="blog-details">
            {
            blog &&
            (
                <article>
                    <h2>{blog.title}</h2> 
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handelClick}>Delete</button>
                </article>
            )
            }
        </div>
    );
}
 
export default BlogDetails;