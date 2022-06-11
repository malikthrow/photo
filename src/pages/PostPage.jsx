import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import '../styles/App.css'
import {useFetching} from "../hooks/useFetching";
import PosService from "../components/API/PosService";
import loader from "../components/UI/Loader/Loader";
import Loader from "../components/UI/Loader/Loader";

const PostPage = () => {
    const par = useParams();
    const [post, setPost] = useState({});
    const [compost, setComPost] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
        const response = await PosService.getById(id)
        setPost(response.data)

    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id)=>{
        const response = await PosService.getCommentsById(id)
        setComPost(response.data)

    })




    useEffect(()=>{
        fetchPostById(par.id)
        fetchComments(par.id)

    },[])

    return (
        <div>
            <h1>Юзер смотрит новость</h1>
            {isLoading
            ? <Loader/>
            : <div>{post.id}. {post.title}</div>
            }
            <div>{post.body}</div>
            <h2>Комментарии</h2>
            {isLoading
                ? <Loader/>
                    : <div>{compost.map(com=>
                        <div>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                )}</div>
            }
        </div>
    );
};

export default PostPage;