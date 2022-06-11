import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../../UI/button/MyButton";
import {AuthContext} from "../../../context";
import './Navbar.css'

const Navbar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);

    const logout = ()=>{
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    if (isAuth){
        return (
            <div className="navbar">
                <MyButton onClick={logout}>Выйти</MyButton>
                <div className="navbar__links">
                    <Link to="/">Домой</Link>
                    <Link to="/posts">Посты</Link>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/">Домой</Link>
                    <Link to="/posts">Посты</Link>


                </div>
            </div>
        );
    }


};

export default Navbar;



