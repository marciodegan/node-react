const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

require('./models/home');

const Home = mongoose.model('Home');

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
  res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
  app.use(cors());
  next();
});

mongoose.connect('mongodb://localhost/degan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Conexão com o BD MongoDB realizado com sucesso!");
}).catch((err) => {
  console.log("Erro: Conexão com o BD" + err);
})

app.get('/home', (req, res) => {
  Home.findOne({}).then((home) => {
  return res.json(home);
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro encontrado!"
    });
  });
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
