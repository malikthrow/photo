
import React from "react";
import './styles/App.css'
import ReactDOM from "react-dom/client";
import {Routes, Route, Link} from "react-router-dom";
import {About} from './pages/About'
import {Posts} from "./pages/Posts";
import {NotFoundPage} from "./pages/NotFoundPage";
import Navbar from "./components/API/navbar/Navbar";
import Main from "./pages/Main";

function App() {
    return(
        <div>
            <header>
              <Navbar/>
            </header>
          <Routes>
              <Route path="/"  element={<Main/>} />
              <Route path="/posts"  element={<Posts/>} />
              <Route path="*"  element={<NotFoundPage/>} />
          </Routes>
        </div>
    );
}

export default App;
