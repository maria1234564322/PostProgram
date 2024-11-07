import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

export default function DeleteIndex() {
  const [indexToDelete, setIndexToDelete] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Обробка змін поля вводу
  const handleChange = (e) => {
    setIndexToDelete(e.target.value);
  };

  // Обробка кнопки "Видалити"
  const handleDelete = () => {
    axios
      .delete(`https://localhost:7228/api/Index/${indexToDelete}`)
      .then((response) => {
        setSnackbarMessage('Індекс успішно видалено');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setIndexToDelete('');
      })
      .catch((error) => {
        console.error('Помилка при видаленні індексу:', error);
        setSnackbarMessage('Помилка при видаленні індексу');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Введіть id індексу</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={indexToDelete}
          onChange={handleChange}
          label="Введіть індекс"
        />
      </FormControl>
      <div className="deleteIndex">
        <Button variant="contained" color="primary" onClick={handleDelete}>
          Видалити індекс
        </Button>
      </div>

      {/* Snackbar для повідомлень */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
