import styles from './App.module.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import PricePage from './components/pages/PricePage/Price'
import Header from './components/Header/Header'
import Chat from './components/pages/ChatPage/Chat'
import Home from './components/pages/HomePage/Home'
import SignUp from './components/pages/SignIn&SignUpPage/SignUp'
import SignIn from './components/pages/SignIn&SignUpPage/SignIn'
import Profile from './components/pages/ProfilePage/Profile'
import socketIO from 'socket.io-client';
import { useSelector } from 'react-redux'
import { RootState } from './app/store'
import CompanyPage from './components/pages/CompanyPage/Company'
import Course from './components/pages/CoursePage/Course'
// import HTML from './components/pages/CoursePage/lang/HTML/HTML'
import JavaScript from './components/pages/CoursePage/lang/JS/JavaScript'
import Footer from './components/Footer/Footer'
import OneCourse from './components/pages/CoursePage/OneCourse'
import Task from './components/pages/TaskPage/Task'

const socket = socketIO.connect('http://localhost:3333')

function App() {
  const loading = useSelector((state: RootState) => state.application.loading); //взял лоадинг из слайса

  if (loading) {
    return "loading...";
  } // функция для прогрузки лоадинга при пендинге

  const location = useLocation();
  const showFooter = location.pathname !== '/SignIn' && location.pathname !== '/SignUp';

  return (
    <div>
      <div className={styles.app}>
        <Header socket={socket} />
        <div className={styles.body}>
          <Routes>
            <Route path="/chat" element={<Chat socket={socket} />} />
            <Route path="/team" element={<CompanyPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/Price" element={<PricePage />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/course/:id" element={<OneCourse />} />
            <Route path="/tasks/650837df617947cf3f034722" element={<Task />} />
            {/* <Route path="/video" Component={VideoPlayer}></Route> */}
          </Routes>
          {showFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default App;
