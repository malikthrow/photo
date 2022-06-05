import React, {useState} from "react";
import Counter from "./components/Counter";
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {
    const [posts,setPosts] = useState([
        {id:1, title: 'js', body: 'desc'},
        {id:2, title: 'css', body: 'desc'},
        {id:3, title: 'html', body: 'desc'},
        {id:4, title: 'php', body: 'desc'}
    ])

  return (
   <div className="App">
       {posts.map(post=>
       <div>qqqq</div>
       )}
   </div>
  );
}

export default App;
