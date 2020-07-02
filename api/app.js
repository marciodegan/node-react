const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('./models/home');

const Home = mongoose.model('Home');

app.use(express.json());

mongoose.connect('mongodb://localhost/degan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
  console.log("Erro: Conexão com o BD" + err);
})

app.get('/home', (req, res) => {
  res.json({
    error: false,
    message: "Informações da PG Home!"
  }) 
  // res.send('degan')
  });

app.post('/home', (req, res) => {
  Home.create(req.body, (err) => {
    if(err) return res.status(400).json({
      error: true,
      mesage: "Erro: Conteúdo da página não cadastrado com sucesso!"
    })
  })

  return res.json({
    error: true,
    message: "Conteúdo da página home cadastrado com sucesso!"
  })
})

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})
