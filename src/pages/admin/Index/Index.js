import React, { useState } from 'react';
import { Button, Collapse, Typography } from '@mui/material';
import AddIndex from './components/addIndex/AddIndex';
import EditIndex from './components/editIndex/EditIndex';
import DeleteIndex from './components/deleteIndex/DeleteIndex';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Іконка стрілки
import './Index.css';
import FindIndex from './components/findIndex/FindIndex';
import IndexesTable from './components/indexesTable/IndexesTable';

export default function Index() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const handleChange = (event) => {
    setName(event.target.value); // Оновлюємо значення стану
  };
  const [name, setName] = useState('');

  const faqItems = [
    {
      question: 'Переглянути всі дані ',
      answer: <IndexesTable />,
    },
    {
      question: 'Додати локацію',
      answer: <AddIndex />,
    },
    {
      question: 'Видалити індекс',
      answer: <DeleteIndex />,
    },
    {
      question: 'Редагувати дані',
      answer: <EditIndex />,
    },
    {
      question: 'Знайти індекс локації',
      answer: <FindIndex />,
    },
  ];

  // Функція для переключення стану відкриття питання
  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="background">
      <div className="containerCardIndex">
        <h1 className="textWorkIndex">Робота з індексами</h1>
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => toggleQuestion(index)}
              className="faqQuestionIndex"
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <ExpandMoreIcon
                sx={{
                  transform:
                    openQuestionIndex === index
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                  transition: 'transform 0.3s',
                }}
              />
              <Typography sx={{ marginLeft: 2 }}>{item.question}</Typography>
            </Button>
            <Collapse in={openQuestionIndex === index}>
              <div className="faqAnswerIndex">{item.answer}</div>
            </Collapse>
          </div>
        ))}
      </div>
    </div>
  );
}
