import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function IndexesTable() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:7228/api/Index/all').then((response) => {
      setTableData(response.data);
    });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className="indexTh">
            <TableCell>Id</TableCell>
            <TableCell>Індекс</TableCell>
            <TableCell>Область</TableCell>
            <TableCell>Район</TableCell>
            <TableCell>Населений пункт</TableCell>
            <TableCell>Вулиця</TableCell>
            <TableCell>Номер вулиці</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* 30 рядків */}
          {tableData.map((el) => (
            <TableRow key={el.id}>
              <TableCell>{el.id}</TableCell>
              <TableCell>{el.index}</TableCell>
              <TableCell>{el.district}</TableCell>
              <TableCell>{el.region}</TableCell>
              <TableCell>{el.city}</TableCell>
              <TableCell>{el.stret}</TableCell>
              <TableCell>{el.numberStreet}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
