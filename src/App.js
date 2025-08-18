import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/profile" element={<p>Profile</p>} />
      </Routes>
    </Router>
  )
}

export default App