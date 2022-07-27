import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import UserInput from './components/UserInput'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import ProtectedRoutes from './components/ProtectedRoutes'
import Themes from './components/theme/Themes'
import { ThemeProvider } from 'styled-components'
import Settings from './components/Settings'
import { useSelector } from 'react-redux'

function App() {
  
  const theme = useSelector(state => state.theme)


  return (
    <ThemeProvider theme={Themes[(theme?'Dark':'Light')]}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<UserInput />} />
          <Route path='/settings' element={<Settings/>}/>
          <Route element={<ProtectedRoutes />}>
            <Route path='pokedex' element={<Pokedex />} />
            <Route path='pokedex/:id' element={<Pokemon />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
