import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


// Код выше - не трогать оно тебе не надо XD

// сервер запускается по 3000 порту, а хост берется всегда Localhost тоесть обращаемся по localhost:3000

// Тут мы обратимся по http://localhost:3000/checkApi/ и запрос попадет сюда а метод будет именно POST
app.post('/checkApi', (req, res) => {
  res.json({
    data: req.body || "Ты не указал/а body"
  });
});

// Тут GET метод по http://localhost:3000/getRequest
app.get('/getRequest', (req, res) => {
  res.json({
    message: 'Вот твои данные'
  });
});

// Запуск сервера тоже не нужно тебе
app.listen(PORT, () => {
  console.log('server starts');
});