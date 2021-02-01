import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="Home">
            <h2>Homepage</h2>
            {isLoading && <p>Loading...</p>}
            { error && <p>{error }</p>}
            { blogs && <BlogList blogs={blogs} title={"ALL Blogs"}/> }    
        </div>
    );
}

export default Home;

//Hookies
/* 
    const [name , setName] = useState('mario');
    const handelClisk = () => {
        setName('luoigi');
    }
*/

// <BlogList blogs={blogs.filter((blog)=>(blog.auther==='atef'))} title={"Atef's blogs"}/>

/*
    const deleteBlog = (id) =>
    {
        const newBlogs = blogs.filter((blog)=>(blog.id !== id));
        setBlogs(newBlogs);
    }
    */