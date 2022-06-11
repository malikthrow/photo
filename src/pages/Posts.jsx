import React, {useEffect, useRef, useState} from "react";
import '../styles/App.css'
import {usePosts} from "../hooks/usePost";
import {useFetching} from "../hooks/useFetching";
import PosService from "../components/API/PosService";
import {getPageCount, getPagesArray} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/MyModal/MyModal";
import PostFor from "../components/PostFor";
import PostFilter from "../components/PostFilter";
import Pagination from "../components/UI/pagination/Pagination";
import PostList from "../components/PostList";
import Loader from "../components/UI/Loader/Loader";
import {useObserver} from "../hooks/useObserver";
import login from "./Login";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef();
    const pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PosService.getAll(limit, page);
        setPosts(response.data)

        const totalCount = response.headers['x-total-count']

        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, async () => {
        //setPage(page + 1);
        const response = await PosService.getAll(limit, page);
        setPosts([...posts, newPost])
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }




    {/*Функция обратного вызова для удаления поста из массива*/}
    const remove = (post) => {
        {/*Будет использоваться фильтр по
        которому возвращается
        новый массив по определенному условию*/}
        setPosts(posts.filter(p=>p.id!==post.id));
    }

    const changePage = (page) =>{
        setPage(page)
    }

    return (
        <div className="App">

            <MyButton onClick={()=>setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal setVisible={setModal} visible={modal}>
                <PostFor create={createPost} />
                <MyButton onClick={()=>setModal(false)}>
                    Закрыть
                </MyButton>
            </MyModal>


            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Error "{postError}"</h1>
            }

            {isPostsLoading
                ? <div style={{display: 'flex',justifyContent: 'center',marginTop:'10px'}}><Loader/></div>
                : <PostList remove={remove} posts={sortedAndSearchedPosts} title="Posts1"  />
            }
            <div ref={lastElement} style={{height: 20,background: 'red'}}/>
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}/>
        </div>
    );
}

export {Posts};
