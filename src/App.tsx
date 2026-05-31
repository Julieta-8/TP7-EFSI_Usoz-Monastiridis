import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [posts, setPosts] =
  useState<[PropsListado]>([]);
axios.get(
  "https://api.unsplash.com/photos/random",
  {
    params: {
      count: 10,
      query: "travel"
    },
    headers: {
      Authorization: "UGsWykxBld4exoNQLBRiNzmzSOwjXrZenkIjmx0XrfI"
    }
  }
)
.then(response => {
  SetPost(response.data);
});


/*const manualData: ManualPostData[] = [

  {
    caption: "Explorando la Patagonia",
    comments: ["Hermoso lugar"],
    date: "Hace 2 horas",
    location: "Patagonia"
  },

  {
    caption: "Atardecer inolvidable",
    comments: ["Increíble foto"],
    date: "Hace 1 día",
    location: "Santorini"
  }
];*/
/*const posts: Post[] =
  response.data.map(photo => ({
    ...photo,

    caption: randomCaption(),

    comments: randomComments(),

    date: randomDate(),

    location: randomLocation()
  }));*/
  return (
    <>

  <Header>
   </Header>
    <Stories />
    <Perfil></Perfil>
    <Feed></Feed>

    </>
  )
}

export default App
