import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <ToastContainer position='top-center' pauseOnHover={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/profile" element={<p>Profile</p>} />
      </Routes>
    </Router>
  )
}

export default App