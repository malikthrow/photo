import React, {useEffect, useState} from "react";
import './styles/App.css'
import Navbar from "./components/API/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
        if (localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[])

    return(
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <header>
              <Navbar/>
            </header>
            <AppRouter/>
        </AuthContext.Provider>
    );
}

export default App;
