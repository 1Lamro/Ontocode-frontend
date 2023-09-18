import './App.module.css'
import PricePage from './components/pages/PricePage/Price'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div>
<Routes>
  <Route path='/Price' element={<PricePage />} />
</Routes>
    </div>
  )
}

export default App
