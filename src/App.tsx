import { useState, useEffect } from 'react'

import axios from 'axios'
import './App.css'
import Feed from './Feed'
import Header from './Header'
import Stories from './Stories'
import Perfil from './Perfil'
import type { Unsplash } from './types'

function App() {
  

  const [posts, setPosts] =
  useState<Unsplash[]>([]);

useEffect(() => {
  const fetchPosts = async () => {
    const responseUsuarios = await axios.get(
      "https://api.unsplash.com/photos/random",
      {
        params: {
          count: 10,
          query: "travel",
        },
        headers: {
          Authorization: "Client-ID UGsWykxBld4exoNQLBRiNzmzSOwjXrZenkIjmx0XrfI",
        },
      }
    );

    setPosts(responseUsuarios.data);
  };

  fetchPosts();
}, []);
/*
const posteo: Listado[]=  [ 

  {
    id: "1",
    caption: "Explorando la Patagonia",
    comments: ["Hermoso lugar"],
    date: "Hace 2 horas",
    location: "Patagonia"
  },

  {
    id:"2",
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  },
  {
    id:"3",
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  },
  {
    id:"4",
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  },
  {
    id:"5",
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  },
  {
    id:"6",
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  },
];
*/





  return (
    <>

  <Header>
   </Header>
    <Stories  postAPI ={posts} />
    <Perfil  postAPI ={posts} />
    <Feed    postAPI ={posts} />

    </>
  )
}

export default App
