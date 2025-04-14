import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack } from '@mui/material';

const Navbar = ({ isLoggedIn, login, logout }) => {
  return (
    <Stack direction="row" spacing={2} mt={2}>
      <Button variant="outlined" component={Link} to="/">Inicio</Button>
      <Button variant="outlined" component={Link} to="/productos">Productos</Button>
      <Button variant="outlined" component={Link} to="/mis-pedidos">Mis Pedidos</Button>
      {isLoggedIn ? (
        <Button variant="contained" color="error" onClick={logout}>Cerrar sesión</Button>
      ) : (
        <Button variant="contained" color="primary" onClick={login}>Iniciar sesión</Button>
      )}
    </Stack>
  );
};

export default Navbar;
