import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header /> {/*Header will be called at all the routes*/}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/sign-in' element={<Signin />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
