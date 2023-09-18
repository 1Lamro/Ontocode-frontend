import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import PricePage from './components/pages/PricePage/Price'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
          <Routes>
            <Route path='/Price' element={<PricePage />} />
          </Routes>
      </div>
    </>
  )
}

export default App
