
import React, { useState, useCallback,useMemo } from 'react';
import './App.css';
function handleErrors(resp)
{
  if(!resp.ok)
  {
    throw new Error(resp.status);
  }
  return resp.json();
}
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(() => {
      setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(handleErrors)
        .then(data=>{
          // console.log(data);
          setPosts(data);
        }).catch(err=>{
          setError(err);
        }).finally(()=>setLoading(false));
    },
    []); 
  const onClickHandler = ()=>{
    // console.log("button clicked!");
    fetchData();
  }
  let list = useMemo(()=>posts.map(item => (
    <li key={item.id}>
      {item.id} {item.title}
    </li>
  )), [posts]);
  return (
    <div className="App">
      <button onClick={onClickHandler} >Click to Fetch Data</button>
      {loading && <div> is loading ...</div>}
      {error && <div> {error}</div>}
      <ul>
         { list }
      </ul>
    </div>
  );
}

export default App;
