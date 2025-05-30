import React, { useEffect, useState } from "react";
import ToDoCreateForm from "../components/toDoCreateForm";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material";

export default function Prueba1_2() {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [estado, setEstado] = useState("1");

  const [tituloError, setTituloError] = useState(false);
  const [descripcionError, setDescripcionError] = useState(false);
  const [estadoError, setEstadoError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    setTitulo("");
    setDescripcion("");
    setEstado("1");
  };

  const handleGuardar = () => {
    const esTituloValido = titulo.trim() !== "";
    const esDescripcionValida = descripcion.trim() !== "";

    setTituloError(!esTituloValido);
    setDescripcionError(!esDescripcionValida);

    if (!esTituloValido || !esDescripcionValida) {
      return;
    }

    const nuevaTarea = {
      title: titulo,
      description: descripcion,
      status: estado,
    };

    fetch("http://localhost:3001/TAREAS/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "U2FsdGVkX19w0fv+1e2EHtlIjPo0WvTBswTV5cHh5iR6Ay9nRbC8o2e/Gl15D70/MlSrOtYebWYjD2Nx9gxwPs4MK4si63nQ7BXIz4HP6bI=",
      },
      body: JSON.stringify(nuevaTarea),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al guardar la tarea");
        }
        return response.json();
      })
      .then((data) => {
        setTareas((prevTareas) => ({
          ...prevTareas,
          data: [...prevTareas.data, data.data],
        }));
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleStatusChange = (id, newStatus) => {
    fetch("http://localhost:3001/TAREAS/updateStatus/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key":
          "U2FsdGVkX19w0fv+1e2EHtlIjPo0WvTBswTV5cHh5iR6Ay9nRbC8o2e/Gl15D70/MlSrOtYebWYjD2Nx9gxwPs4MK4si63nQ7BXIz4HP6bI=",
      },
      body: JSON.stringify({ id, status: newStatus }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar el estado");
        }
        return response.json();
      })
      .then(() => {
        setTareas((prevTareas) => ({
          ...prevTareas,
          data: prevTareas.data.map((tarea) =>
            tarea.id === id ? { ...tarea, status: newStatus } : tarea
          ),
        }));
      })
      .catch((error) => {
        console.error("Error al actualizar el estado:", error);
      });
  };

  useEffect(() => {
    fetch(
      "http://localhost:3001/TAREAS/getAll/?key=U2FsdGVkX19w0fv%2B1e2EHtlIjPo0WvTBswTV5cHh5iR6Ay9nRbC8o2e%2FGl15D70%2FMlSrOtYebWYjD2Nx9gxwPs4MK4si63nQ7BXIz4HP6bI%3D"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }

        return response.json();
      })
      .then((data) => {
        setTareas(data);
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" component="h3">
          CRUD de tareas
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Agregar tarea
        </Button>
      </Box>

      <ToDoCreateForm
        open={open}
        handleClose={handleClose}
        handleGuardar={handleGuardar}
        titulo={titulo}
        setTitulo={setTitulo}
        tituloError={tituloError}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        descripcionError={descripcionError}
        estado={estado}
        setEstado={setEstado}
        estadoError={estadoError}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Título</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tareas.data.map((tr) => (
              <TableRow key={tr.id}>
                <TableCell>{tr.id}</TableCell>
                <TableCell>{tr.title}</TableCell>
                <TableCell>{tr.description}</TableCell>
                <TableCell>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <Select
                      value={tr.status || ""}
                      onChange={(e) =>
                        handleStatusChange(tr.id, e.target.value)
                      }
                    >
                      <MenuItem value="1">En proceso</MenuItem>
                      <MenuItem value="2">Terminada</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
