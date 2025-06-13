import './App.css'
import Authentication from './components/Authentication/Authentication'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home';
import useAuthStore from './store/authStore'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const {isAuthenticated} = useAuthStore()

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element= {isAuthenticated ? <Home/> :  <Auth/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
