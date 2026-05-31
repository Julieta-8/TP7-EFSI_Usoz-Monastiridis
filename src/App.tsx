import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
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
  console.log(response.data);
});
  return (
    <>

  <Header>
   </Header>
    <Stories stories={stories}/>
    <Perfil></Perfil>
    <Feed></Feed>

    </>
  )
}

export default App
