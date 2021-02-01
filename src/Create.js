import { useState } from "react";
import {useHistory } from 'react-router-dom';

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('Mario');
    const [isAdding, setIsAdding] = useState(false);
    const direct = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };
        setIsAdding(true);

        fetch('http://localhost:8000/blogs/',{
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {
            setIsAdding(false);
            direct.push('/');
        })
      }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)} />

                <label>Blog Body</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)} ></textarea>

                <label>Blog Author</label>
                <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                { !isAdding && <button>Add Blog</button>}
                { isAdding && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;