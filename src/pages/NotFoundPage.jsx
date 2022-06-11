import MyButton from "../components/UI/button/MyButton";
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'


const NotFoundPage = () => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    const goHome = () => navigate('/posts')

    return (
        <h1 style={{color: 'red'}}>
            404
            <MyButton onClick={goBack}>назад</MyButton>
        </h1>
    )
}

export {NotFoundPage};