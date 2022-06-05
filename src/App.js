import React, {useState} from "react";

function App() {

    const [likes,setLikes] = useState(5);
    const [value,setValue] = useState('TEXT')



    function incr() {
       setLikes(likes+1)
    }

    function decr() {
        setLikes(likes-1)
    }

  return (
   <div className="App">
       <h1>{likes}</h1>
       <h2>{value}</h2>
       <input
           onChange={(event)=>setValue(event.target.value)}
           type="text"
           value={value}/>
        <button onClick={incr}>Incr</button>
        <button onClick={decr}>Decr</button>
   </div>
  );
}

export default App;
