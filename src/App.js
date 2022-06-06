import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";
import PostFor from "./components/PostFor";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts,setPosts] = useState([
        {id:1, title: 'js', body: 'desc'},
        {id:2, title: 'css', body: 'desc'},
        {id:3, title: 'html', body: 'desc'},
        {id:4, title: 'php', body: 'desc'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});



    const sortedPosts = useMemo(()=>{
        console.log("OTRABOTAL")
        if (filter.sort){
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    },[filter.sort,posts])

    {/*Функция поиска*/}
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()));
    },[filter.query,sortedPosts])

    {/*Функция принимает новый пост, где разварачиваем массив*/}
    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
    }

    {/*Функция обратного вызова для удаления поста из массива*/}
    const remove = (post) => {
        {/*Будет использоваться фильтр по
        которому возвращается
        новый массив по определенному условию*/}
        setPosts(posts.filter(p=>p.id!==post.id));
    }



      return (
       <div className="App">
            <PostFor create={createPost} />
           <hr style={{margin: '15px 0'}}/>
          <PostFilter filter={filter} setFilter={setFilter} />
           <PostList remove={remove} posts={sortedAndSearchedPosts} title="Posts1"  />
        </div>
      );
    }

export default App;
