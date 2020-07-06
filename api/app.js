const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

app.use(
  '/file',
  express.static(path.resolve(__dirname, 'tmp', 'uploads'))
);

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
    if(home.portUmFileName){
      var portUmFileName = "http://localhost:8080/file/home/" + home.portUmFileName;

    }else{
      var portUmFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }
    
    if(home.portDoisFileName){
      var portDoisFileName = "http://localhost:8080/file/home/" + home.portDoisFileName;

    }else{
      var portDoisFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }

    if(home.portTresFileName){
      var portTresFileName = "http://localhost:8080/file/home/" + home.portTresFileName;

    }else{
      var portTresFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }

    if(home.portQuatroFileName){
      var portQuatroFileName = "http://localhost:8080/file/home/" + home.portQuatroFileName;

    }else{
      var portQuatroFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }

    if(home.portCincoFileName){
      var portCincoFileName = "http://localhost:8080/file/home/" + home.portCincoFileName;

    }else{
      var portCincoFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }

    if(home.portSeisFileName){
      var portSeisFileName = "http://localhost:8080/file/home/" + home.portSeisFileName;

    }else{
      var portSeisFileName = "http://localhost:8080/file/home/portfolio.jpg";
    }
    return res.json({
      home,
      portUmFileName,
      portDoisFileName,
      portTresFileName,
      portQuatroFileName,
      portCincoFileName,
      portSeisFileName
    });
  }).catch((err) => {
    return res.status(400).json({
      error: true,
      message: "Nenhum registro encontrado!"
    });
  });
});


app.post('/home', async (req, res) => {
  
  const dados = {
        "topTitulo":"Temos a solução que a sua empresa precisa!",
        "topSubtitulo":"This is a simples hero",
        "topTextoBtn":"ENTRE EM CONTfdsfdsfdsfATO",
        "topLinkBtn":"http://localhost:3000/",
      
         
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
        "portUmFileName": "portfolio_um.jpeg",
        "portUmTitulo": "port Um Titulo",
        "portUmSubtitulo": "port um subtitulo",
        "portDoisOriginalName": "port dois original name",
        "portDoisFileName": "portfolio_dois.jpeg",
        "portDoisTitulo": "port dois titulo",
        "portDoisSubtitulo": "port dois subtitulo",
        "portTresOriginalName": "port tres original name",
        "portTresFileName": "portfolio_tres.jpeg",
        "portTresTitulo": "port tres titulo",
        "portTresSubtitulo": "port 3 subtitulo",
        "portQuatroOriginalName": "port 4 original name",
        "portQuatroFileName": "portfolio_quatro.jpeg",
        "portQuatroTitulo": "port 4 titulo",
        "portQuatroSubtitulo": "port 4 subtitulo",
        "portCincoOriginalName": "port 5 original name",
        "portCincoFileName": "portfolio_cinco.jpeg",
        "portCincoTitulo": "port 5 Cinco Titulo",
        "portCincoSubtitulo": "port 5 subtitulo",
        "portSeisOriginalName": "port 6 original name",
        "portSeisFileName": "portfolio_seis.jpeg",
        "portSeisTitulo": "port 6 titulo",
        "portSeisSubtitulo":"port 6 subtitulo"
  };
  
  const homeExiste = await Home.findOne({});
  if(homeExiste){
    return res.status(400).json({
      error: true,
      message: "Erro: A pagina home já possui um registro"
    });
  };

  Home.create(dados, (err) => {
    if(err) return res.status(400).json({
      error: true,
      mesage: "Erro: Conteúdo da página não cadastrado com sucesso!"
    });
  });

  return res.json({
    error: true,
    message: "Conteúdo da página home cadastrado com sucesso!"
  });
});

app.listen(8080, () =>{
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
})
