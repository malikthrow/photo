import React, {useRef, useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import Myinput from "./components/UI/input/Myinput";

function App() {
    const [posts,setPosts] = useState([
        {id:1, title: 'js', body: 'desc'},
        {id:2, title: 'css', body: 'desc'},
        {id:3, title: 'html', body: 'desc'},
        {id:4, title: 'php', body: 'desc'}
    ])
    const [post,setPost] = useState({
        title: '',
        body: ''
    });


    {/*Тут добавляется в массив созданный пост*/}
    const addNewPost = (e) =>{
        e.preventDefault();
        setPosts([...posts,{...post,id: Date.now()}]);
        setPost({title: '', body: ''})

    }

  return (
   <div className="App">
       <form>

           <Myinput value={post.title} onChange={e=>setPost({...post,title: e.target.value})} type="text" placeholder="title"/>
           <Myinput value={post.body} onChange={e=>setPost({...post,body: e.target.value})} type="text" placeholder="описание"/>

           <MyButton onClick={addNewPost} >Добавить</MyButton>
       </form>
        <PostList posts={posts} title="Spisok 1" />
   </div>
  );
}

export default App;
