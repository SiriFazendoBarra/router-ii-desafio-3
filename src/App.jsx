import { Routes, Route } from 'react-router-dom'

// import views
import Home from './views/Home'
import Login from './views/Login'
import Pokemons from './views/Pokemons'
import Pokemon from './views/Pokemon'

//import componentes
import NavBar from './components/NavBar'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  
  return (
    <div className="App ">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/pokemons' element={<Pokemons/>} />
        <Route path='/pokemons/:id' element={<Pokemon/>} />
        <Route path='/*' element={<h1>404 error. Page not found</h1>} />
      </Routes>
        
    </div>
  )
}

export default App
