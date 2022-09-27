import { useState, useEffect } from 'react'
import Header from "./components/Header";
import './App.css'
//https://sujeitoprogramador.com/rn-api/?api=posts
function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])
  useEffect(()=>{
   fetchApi()
  }, [])

  const fetchApi = async ()=>{
    const res = await fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    const data = await res.json()
    console.log(data)
    setPosts(data)
  }


  return (
    <div className="App">
      <Header />
     {posts.map((post)=>(
      <div className="quadrado">
     <img src={post.capa} alt={post.titulo} />
     <h2>{post.titulo}</h2>
     <p>{post.subtitulo}</p>
     <button className="btn">Acessar</button>
     </div>
     ))}
    </div>
  )
}

export default App
