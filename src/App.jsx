import { Routes, Route } from 'react-router-dom'
import UnderDevelopment from './pages/UnderDevelopment.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<UnderDevelopment />} />
    </Routes>
  )
}
