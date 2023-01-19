import React from 'react';
import { Home, Calls, Status } from './pages';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
};

export default App;
