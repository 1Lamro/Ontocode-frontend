import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import PricePage from './components/pages/PricePage/Price'
import Header from './components/Header/Header'
import Chat from './components/pages/ChatPage/Chat'
import Home from './components/pages/HomePage/Home'
import SignUp from './components/pages/SignIn&SignUpPage/SignUp'
import SignIn from './components/pages/SignIn&SignUpPage/SignIn'
import Profile from './components/pages/ProfilePage/Profile'
import Images from './components/pages/imgPage/Images'
import socketIO from 'socket.io-client';
import ChatForm from './components/pages/ChatPage/ChatForm'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import CompanyPage from './components/pages/CompanyPage/Company'
import Course from './components/pages/CoursePage/Course'
import HTML from './components/pages/CoursePage/lang/HTML/HTML'
import JavaScript from './components/pages/CoursePage/lang/JS/JavaScript'

const socket = socketIO.connect('http://localhost:3333')


function App() {

  const loading = useSelector((state: RootState) => state.application.loading) //взял лоадинг из слайса

  if (loading) {
    return 'loading...'
  } // функция для прогрузки лоадинга при пендинге

  return (
    <div>
      <div className={styles.app}>
        <Header />
        <div className={styles.body}>
          <Routes>
            <Route path='/chat' element={<Chat socket={socket}/>} />
            <Route path ='/team' element={<CompanyPage />}/>
            <Route path='/chatForm' element={<ChatForm socket={socket}/>} />
            <Route path='/' element={<Home />} />
            <Route path='/Price' element={<PricePage />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/SignIn' element={<SignIn />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/images' element={<Images/>} />
            <Route path='/courses' element={<Course />} />
            <Route path='/course/:id' element={< HTML/>} />
            <Route path='/course/:id/course' element={< JavaScript/>} />
            {/* <Route path='/video' Component={VideoPlayer}></Route> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
