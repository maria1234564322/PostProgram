import React, { useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';

export default function AddIndex() {
  const [indexData, setIndexData] = useState({
    index: '',
    region: '',
    district: '',
    city: '',
    street: '',
    numberStreet: '',
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // Оновлення полів вводу
  const handleChange = (e) => {
    setIndexData({ ...indexData, [e.target.name]: e.target.value });
  };

  // Обробка кнопки "Зберегти"
  const handleSave = () => {
    axios
      .post('https://localhost:7228/api/Index', indexData)
      .then((response) => {
        console.log(response.data.id);
        setSnackbarMessage('Дані успішно збережено');
        setSnackbarSeverity('success');
        setSnackbarOpen(true);
        setIndexData({
          index: '',
          region: '',
          district: '',
          city: '',
          street: '',
          numberStreet: '',
        });
      })
      .catch((error) => {
        console.error('Помилка при збереженні даних:', error);
        setSnackbarMessage('Помилка при збереженні даних');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Індекс</TableCell>
            <TableCell>Область</TableCell>
            <TableCell>Район</TableCell>
            <TableCell>Населений пункт</TableCell>
            <TableCell>Вулиця</TableCell>
            <TableCell>Номер вулиці</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                name="index"
                value={indexData.index}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="region"
                value={indexData.region}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="district"
                value={indexData.district}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="city"
                value={indexData.city}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="street"
                value={indexData.street}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="numberStreet"
                value={indexData.numberStreet}
                onChange={handleChange}
                variant="outlined"
                size="small"
              />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="saveTableIndex">
        <Button variant="contained" color="primary" onClick={handleSave}>
          Зберегти
        </Button>
      </div>
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
    </TableContainer>
  );
}
