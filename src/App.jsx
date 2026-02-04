import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Valentine from './pages/Valentine'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/valentine" element={<Valentine />} />
    </Routes>
  )
}

export default App
