import React, {useContext} from 'react';
import {Navigate, Redirect, Route, Routes, useNavigate} from "react-router-dom";
import Main from "../pages/Main";
import {Posts} from "../pages/Posts";
import {NotFoundPage} from "../pages/NotFoundPage";
import PostPage from "../pages/PostPage";
import {privateRoutes, publicRoutes} from "../router";
import {BrowserRouter } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import Login from "../pages/Login";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    let b = useNavigate();

    return (

        isAuth
        ?
            <div>
            <Routes>
            {privateRoutes.map((route)=>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.key} />
                )}

            </Routes>
            </div>


        :

            <Routes>
            {publicRoutes.map((route)=>
                    <Route path={route.path} element={route.element} exact={route.exact} key={route.key} />
                )}
                <Route path="*" element={<Login />} />
            </Routes>


    );
};

export default AppRouter;

