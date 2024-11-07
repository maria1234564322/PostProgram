import React, { useState } from 'react';
import axios from 'axios';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Paper,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

export default function EditIndex() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setIndexData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7228/api/Index`,
        indexData
      );
      setSnackbarMessage('Дані успішно оновлено!');
      setSnackbarSeverity('success');
    } catch (error) {
      setSnackbarMessage('Сталася помилка при збереженні даних');
      setSnackbarSeverity('error');
    } finally {
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Введіть індекс, дані якого потрібно змінити</TableCell>
              <TableCell>Значення поля 'Індекс'</TableCell>
              <TableCell>Значення поля 'Область'</TableCell>
              <TableCell>Значення поля 'Район'</TableCell>
              <TableCell>Значення поля 'Населений пункт'</TableCell>
              <TableCell>Значення поля 'Вулиця'</TableCell>
              <TableCell>Значення поля 'Номер вулиці'</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {[
                'id',
                'index',
                'region',
                'district',
                'city',
                'street',
                'numberStreet',
              ].map((field) => (
                <TableCell key={field}>
                  <TextField
                    name={field}
                    value={indexData[field]}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
        <div className="saveTableIndex">
          <Button variant="contained" color="primary" onClick={handleSave}>
            Зберегти зміни
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
    </>
  );
}
