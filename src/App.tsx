import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index'; // Assuming Index.tsx will be your default page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;