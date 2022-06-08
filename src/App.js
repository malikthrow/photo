import React, {useEffect, useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostFor from "./components/PostFor";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/MyModal/MyModal";
import {usePosts} from "./hooks/usePost";
import axios from "axios";
import PosService from "./components/API/PosService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import postItem from "./components/PostItem";
import {getPageCount, getPagesArray} from "./utils/pages";

function App() {
    const [posts,setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal,setModal] = useState(false);
    const [totalPages,setTotalPages] = useState(0);
    const [limit,setLimit] = useState(10);
    const [page,setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort,filter.query)
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {})

    let pagesArray = getPagesArray(totalPages);

    async function fetchPostG(){
        const response = await PosService.getAll(limit,page)
        setPosts(response.data)
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(totalCount,limit))
    }

   useEffect(  () => {
       fetchPostG()
   }, [page])

    {/*Функция принимает новый пост, где разварачиваем массив*/}
    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
        setModal(false);
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

           {isPostLoading
               ? <div style={{display: 'flex',justifyContent: 'center',marginTop:'10px'}}><Loader/></div>
               : <PostList remove={remove} posts={sortedAndSearchedPosts} title="Posts1"  />
           }
               <div className="page__wrapper">
                   {pagesArray.map(p=>
                      <span
                          onClick={()=>changePage(p)}
                          key={p}
                          className={page === p ? 'page page__current' : 'page'}>
                          {p}
                      </span>
                   )}
               </div>
          </div>
      );
    }

export default App;
