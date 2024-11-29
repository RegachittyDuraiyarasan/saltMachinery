import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './CommonComponent/Navbar.jsx';
function App() {


  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
