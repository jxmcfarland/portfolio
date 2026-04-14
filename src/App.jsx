import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import CaseStudyPage from './pages/CaseStudyPage'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App