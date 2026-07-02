import {Routes,Route} from 'router'
import { HomePage } from './Pages/HomePage'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/checkout" element={} />
    </Routes>
  )
}

export default App
