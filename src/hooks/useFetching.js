import {useState} from "react";


export const useFetching = (callback) => {
    //console.log(666)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) =>{
        try {
            setIsLoading(true)
            await callback(...args)
        }
        catch (e){
            console.log(e)
            setError(e.message);
        }
        finally {

            setIsLoading(false);
        }
    }
    return [fetching, isLoading, error];
}