import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Grid, TextField, Typography, Paper, Button } from "@mui/material";
import checkIsValidPerson from "../functions/checkPerson";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Prueba1_1() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Caso: Componentización
      </Typography>

      <p>
        Se inicia con la identificación de formularios que pudieran ser
        reutilizados en diferentes partes de la aplicación y luego se crea cada
        uno de estos dentro de un componente que tenga la capacidad de recibir
        sus propiedades para su funcionamiento. Idealmente nuestro proyecto debe
        de estar estructurado de manera que existan rutas específicas para los
        componentes permitiendo su importación posterior en donde se requiera
        dentro de la aplicación. Dentro de esta aplicación se creó un componente
        de ejemplo bajo esta metodología, es el que se encuentra dentro del
        ejercicio 1.3 que es la creación de tareas.
      </p>
      <Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1">
              Componente <strong>ToDoCreateForm</strong>
            </Typography>
            <SyntaxHighlighter language="javascript" style={vs2015}>
              {`
              import React from "react";
              import {
                Dialog,
                DialogTitle,
                DialogContent,
                DialogActions,
                TextField,
                FormControl,
                InputLabel,
                Select,
                MenuItem,
                FormHelperText,
                Button,
              } from "@mui/material";
              
              export default function ToDoCreateForm({
                open,
                handleClose,
                handleGuardar,
                titulo,
                setTitulo,
                tituloError,
                descripcion,
                setDescripcion,
                descripcionError,
                estado,
                setEstado,
                estadoError,
              }) {
                return (
                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Agregar nueva tarea</DialogTitle>
                    <DialogContent>
                      <TextField
                        autoFocus
                        margin="dense"
                        label="Título"
                        type="text"
                        fullWidth
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        error={tituloError}
                        helperText={tituloError ? "El título es requerido" : ""}
                      />
                      <TextField
                        margin="dense"
                        label="Descripción"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        error={descripcionError}
                        helperText={descripcionError ? "La descripción es requerida" : ""}
                      />
                      <FormControl fullWidth margin="dense" error={estadoError}>
                        <InputLabel>Estado</InputLabel>
                        <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
                          <MenuItem value="1">En proceso</MenuItem>
                          <MenuItem value="2">Terminada</MenuItem>
                        </Select>
                        {estadoError && (
                          <FormHelperText>El estado es requerido</FormHelperText>
                        )}
                      </FormControl>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} color="secondary">
                        Cancelar
                      </Button>
                      <Button onClick={handleGuardar} color="primary">
                        Guardar
                      </Button>
                    </DialogActions>
                  </Dialog>
                );
              }
              
`}
            </SyntaxHighlighter>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
