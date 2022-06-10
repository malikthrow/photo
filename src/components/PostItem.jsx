import React, {useEffect} from 'react';
import MyButton from "./UI/button/MyButton";
import {Navigate,useNavigate} from "react-router-dom";



const PostItem = (props) => {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const goPosts = () => navigate("/posts/"+props.post.id)

    return (

        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={goPosts} >
                    Открыть
                </MyButton>
                <MyButton onClick={()=>props.remove(props.post)}>
                    Удалить пост
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;