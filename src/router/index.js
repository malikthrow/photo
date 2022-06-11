
import PostPage from "../pages/PostPage";
import {Posts} from "../pages/Posts";
import {About} from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = [
    {path:'/about', element: <About/>, exact: true, key: Date},
    {path:'/posts', element: <Posts/>, exact: true, key: Date},
    {path:'/posts/:id', element: <PostPage/>, exact: true, key: Date}
]

export const publicRoutes = [
    {path:'/login', element: <Login/>, exact: true, key: Date}
]

