import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import PricePage from './components/pages/PricePage/Price'
import Header from './components/Header/Header'
import Chat from './components/pages/ChatPage/Chat'


function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Routes>
          <Route path='/chat' element={<Chat />} />
          <Route path='/Price' element={<PricePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
