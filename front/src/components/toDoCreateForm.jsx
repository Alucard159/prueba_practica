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
