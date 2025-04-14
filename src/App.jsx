import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import MisPedidos from './pages/MisPedidos';
import Navbar from "./components/NavBar";
import ProtectedRoute from './ProtectedRoute';
import { Container, Snackbar, Alert } from '@mui/material';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsLoggedIn(auth === 'true');
  }, []);

  const login = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
    navigate('/mis-pedidos');
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleAccessDenied = () => {
    setSnackbarOpen(true);
    navigate('/');
  };

  return (
    <Container>
      <Navbar isLoggedIn={isLoggedIn} login={login} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route
          path="/mis-pedidos"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} onDenied={handleAccessDenied}>
              <MisPedidos />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
        <Alert severity="error">Acceso denegado. Debes iniciar sesión.</Alert>
      </Snackbar>
    </Container>
  );
};

export default App;
