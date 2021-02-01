import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const abort = new AbortController();
        fetch(url , {signal : abort.signal})
        .then( res =>
         {
             if(!res.ok)
             {
                 throw Error("couldn't fetch data from this resource!");
             }
             return res.json();
         })
         .then(data =>
         {
             setData(data);
             setIsLoading(false);
             setError(null);
         })
         .catch(e =>
         {
            if (e.name !== 'AbortError') {
                setIsLoading(false);
                setError(e.message);
            }
         })
        return ()=> abort.abort();
     },[url]);

    return {data, isLoading, error};
}
 
export default useFetch;