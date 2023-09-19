import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import PricePage from './components/pages/PricePage/Price'
import Header from './components/Header/Header'
import Chat from './components/pages/ChatPage/Chat'
import Home from './components/pages/HomePage/Home'
import SignUp from './components/pages/SignIn&SignUpPage/SignUp'
import SignIn from './components/pages/SignIn&SignUpPage/SignIn'
import Profile from './components/pages/ProfilePage/Profile'

function App() {

  return (
    <div>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/chat' element={<Chat />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Price' element={<PricePage />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/Profile' element={<Profile />} />
          {/* <Route path='/video' Component={VideoPlayer}></Route> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
