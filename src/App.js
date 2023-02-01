import React from 'react';
import { Home, Calls, Status, Login, Register } from './pages';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useChatContext } from './context/ChatContext';

const App = () => {
  const { currentUser } = useChatContext();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="calls" element={<Calls />} />
          <Route path="status" element={<Status />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
