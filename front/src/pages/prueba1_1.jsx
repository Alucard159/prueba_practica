import React, { useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Grid, TextField, Typography, Paper, Button } from "@mui/material";
import checkIsValidPerson from "../functions/checkPerson";

SyntaxHighlighter.registerLanguage("javascript", js);

export default function Prueba1_1() {
  const [jsonInput, setJsonInput] = useState(
    '{\n  "nombre": "",\n  "email": "",\n  "edad": ""\n}'
  );
  const [resultado, setResultado] = useState("");

  const handleValidar = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const result = checkIsValidPerson(parsed);
      setResultado(JSON.stringify(result, null, 2));
    } catch (e) {
      setResultado("Error al parsear JSON: " + e.message);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Validación de objeto JSON
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1">Entrada JSON</Typography>
            <TextField
              multiline
              minRows={10}
              fullWidth
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              variant="outlined"
            />
            <Button variant="contained" onClick={handleValidar} sx={{ mt: 2 }}>
              Validar
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1">Función de Validación</Typography>
            <SyntaxHighlighter language="javascript" style={vs2015}>
              {`const checkIsValidPerson = function (person = { nombre, email, edad }) {
  if (person.nombre == null || person.trim() === "") {
    return {
      valid: false,
      error: "El nombre es requerido",
    };
  }

  if (
    person.email == null ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email)
  ) {
    return {
      valid: false,
      error: "El email es inválido",
    };
  }

  if (person.edad == null || isNaN(person.edad) || person.edad < 18) {
    return {
      valid: false,
      error: "La edad debe ser un número mayor o igual a 18",
    };
  }

  return {
    valid: true,
    error: null,
  };
};
`}
            </SyntaxHighlighter>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="subtitle1">Resultado</Typography>
            <pre>{resultado}</pre>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
