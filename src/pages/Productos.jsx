import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

const productos = [
  { id: 1, nombre: 'Camisa', precio: 30000 },
  { id: 2, nombre: 'Zapatos', precio: 80000 },
  { id: 3, nombre: 'Pantalón', precio: 50000 },
];

const Productos = () => {
  return (
    <div>
      <Typography variant="h4" mt={4}>Nuestros productos</Typography>
      <Grid container spacing={2} mt={2}>
        {productos.map((p) => (
          <Grid item xs={12} md={4} key={p.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{p.nombre}</Typography>
                <Typography>${p.precio}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Productos;
