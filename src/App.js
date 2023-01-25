import React from 'react';
import { Home, Calls, Status, Login, Register } from './pages';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [auth, setAuth] = React.useState(false);
  if (!auth)
    return (
      <div>
        <Register />
      </div>
    );

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
