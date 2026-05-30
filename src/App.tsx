import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const stories: Story[] = [
    {
      user: "Shrek",
      foto: 
   
    },
       {
      user: "Shrek",
      foto: 
   
    },
     {
      user: "Shrek",
      foto: 
   
    },
       {
      user: "Shrek",
      foto: 
   
    },
       {
      user: "Shrek",
      foto: 
   
    },
       {
      user: "Shrek",
      foto: 
   
    },
       {
      user: "Shrek",
      foto: 
   
    },
  
  ];
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
