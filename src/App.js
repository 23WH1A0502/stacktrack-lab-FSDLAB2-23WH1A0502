import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
