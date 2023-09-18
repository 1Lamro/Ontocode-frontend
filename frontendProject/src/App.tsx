import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Routes>

        </Routes>
      </div>

    </>
  )
}

export default App
