import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tasks" element={<Tasks />} />
        </Routes>
      </Router>

      {/* TODO: Replace this placeholder with Routes */}
    </div>
  );
}

export default App;
