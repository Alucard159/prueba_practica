import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function Prueba1_2() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:3001/PRODUCTS/getAll/?key=U2FsdGVkX19w0fv%2B1e2EHtlIjPo0WvTBswTV5cHh5iR6Ay9nRbC8o2e%2FGl15D70%2FMlSrOtYebWYjD2Nx9gxwPs4MK4si63nQ7BXIz4HP6bI%3D"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        return response.json();
      })
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch((error) => {
        setError(error.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <Typography>Cargando datos...</Typography>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <>
    <h3>Lista de Productos</h3>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.data.map((prod) => (
            <TableRow key={prod.id}>
              <TableCell>{prod.id}</TableCell>
              <TableCell>{prod.name}</TableCell>
              <TableCell>
                ${parseFloat(prod.price).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
