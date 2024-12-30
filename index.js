// app.js
const express = require('express');
const path = require('path');

const app = express();
 
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
 
app.get('/', (req, res) => {
  res.render('index', { title: 'Bem-vindo', message: 'Olá, Mundo!' });
});
 
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
