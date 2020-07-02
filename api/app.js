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
  
  const dados = {
        "topTitulo":"Temos a solução que a sua empresa precisa!",
        "topSubtitulo":"This is a simples hero",
        "topTextoBtn":"ENTRE EM CONTfdsfdsfdsfATO",
        "topLinkBtn":"http://localhost:3000/",
      
      "topTitulo":"Titulo 1",
        "topSubtitulo":"Top Subtitulo",
        "topTextoBtn": "topTextoBtn",
        "topLinkBtn":"topLinkBtn",
        
      "serTitulo":"serTitulo",
        "serSubtitulo":"servico Subtitulo",
        "serUmIcone":"servico 1 icon",
        "serUmTitulo":"servico 1 titulo",
        "serUmDesc":"servico 1 Descr",
        "serDoisIcone":"servico icon 2",
        "serDoisTitulo":"serv 2 titulo",
        "serDoisDesc":"serv 2 desc",
        "serTresIcone": "serv tres icone",
        "serTresTitulo": "ser tres titulo",
        "serTresDesc": "serv tres Desc",
      
      "portTitulo": "port Titulo",
        "portSubtitulo": "port subtitulo",
        "portUmOriginalName": "port um original name",
        "portUmFileName": "port Um FileName",
        "portUmTitulo": "port Um Titulo",
        "portUmSubtitulo": "port um subtitulo",
        "portDoisOriginalName": "port dois original name",
        "portDoisFileName": "port dois file name",
        "portDoisTitulo": "port dois titulo",
        "portDoisSubtitulo": "port dois subtitulo",
        "portTresOriginalName": "port tres original name",
        "portTresFileName": "port Tres Filename",
        "portTresTitulo": "port tres titulo",
        "portTresSubtitulo": "port 3 subtitulo",
        "portQuatroOriginalName": "port 4 original name",
        "portQuatroFileName": "port 4 filename",
        "portQuatroTitulo": "port 4 titulo",
        "portQuatroSubtitulo": "port 4 subtitulo",
        "portCincoOriginalName": "port 5 original name",
        "portCincoFileName": "port 5 filename",
        "portCincoTitulo": "port 5 Cinco Titulo",
        "portCincoSubtitulo": "port 5 subtitulo",
        "portSeisOriginalName": "port 6 original name",
        "portSeisFileName": "port 6 filename",
        "portSeisTitulo": "port 6 titulo",
        "portSeisSubtitulo":"port 6 subtitulo"
      
    


  }
    
  Home.create(dados, (err) => {
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
