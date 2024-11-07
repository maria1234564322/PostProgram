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

export default function FindIndex() {
  const [indexData, setIndexData] = useState({
    index: '',
    region: '',
    district: '',
    city: '',
    street: '',
    numberStreet: '',
  });

  const [foundIndex, setFoundIndex] = useState(null); // Додаємо стан для збереження знайденого індексу
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleChange = (e) => {
    setIndexData({ ...indexData, [e.target.name]: e.target.value });
  };

  const handleFind = () => {
    axios
      .post('https://localhost:7228/api/Index/find', indexData)
      .then((response) => {
        setFoundIndex(response.data);
        setSnackbarMessage('Індекс успішно знайдено');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error('Помилка при пошуку індексу:', error);
        setSnackbarMessage('Помилка при пошуку індексу');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="region">Область</InputLabel>
          <OutlinedInput
            id="region"
            name="region"
            value={indexData.region}
            onChange={handleChange}
            label="Область"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="district">Район</InputLabel>
          <OutlinedInput
            id="district"
            name="district"
            value={indexData.district}
            onChange={handleChange}
            label="Район"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="city">Населений пункт</InputLabel>
          <OutlinedInput
            id="city"
            name="city"
            value={indexData.city}
            onChange={handleChange}
            label="Населений пункт"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="street">Вулиця</InputLabel>
          <OutlinedInput
            id="street"
            name="street"
            value={indexData.street}
            onChange={handleChange}
            label="Вулиця"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="numberStreet">Номер вулиці</InputLabel>
          <OutlinedInput
            id="numberStreet"
            name="numberStreet"
            value={indexData.numberStreet}
            onChange={handleChange}
            label="Номер вулиці"
          />
        </FormControl>
      </div>
      <div className="findIndex">
        <Button variant="contained" color="primary" onClick={handleFind}>
          Знайти індекс
        </Button>
      </div>

      {/* Відображення знайденого індексу */}
      {foundIndex && (
        <div style={{ marginTop: '20px' }}>
          <h3>Знайдені дані:</h3>
          <p>Індекс: {foundIndex.index}</p>
          <p>Область: {foundIndex.region}</p>
          <p>Район: {foundIndex.district}</p>
          <p>Населений пункт: {foundIndex.city}</p>
          <p>Вулиця: {foundIndex.street}</p>
          <p>Номер вулиці: {foundIndex.numberStreet}</p>
        </div>
      )}

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
