import React, { useState } from 'react';
import axios from 'axios';
import Head from 'next/head';

import Menu from '../components/Menu';

import {
  Container,
  Jumbotron,
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const Home = (data) => (
    <div>
      <Head>
        <title>Home - Degan</title>
        <meta name="description" content="Site de ... sobre ..." />
        <meta name="author" content="Degan" />


      </Head>
      <Menu />      
      <br />
      <Jumbotron fluid className="descr-top">
        <style>{`.descr-top{
            background-color: #000;
            color: #fff;
            padding-top: 150 px;
            padding-bottom: 150px;
            margin-bottom: 0rem !imporant;
          }.inicio-link{
            position: absolute;
            top: -0px;
          }`}</style>
        <Container className="text-center">
          <a name="inicio" className="inicio-link"></a>
          <h2 className="display-4 mb-4">{data.response.home.topTitulo}</h2>
          <p className="lead">{data.response.home.topSubtitulo}</p>
          <hr className="my-2" />
          <p className="lead">
            <a href={data.response.home.topLinkBtn} className="btn btn-primary btn-lg">
              <a>{data.response.home.topTextoBtn}</a>
            </a>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
          <style>{`.servicos{
          margin-bottom: 0rem !imporant;
          background-color: #fff;
          padding-top: 80px;
          padding-bottom: 80px;
          position: relative;          
        }.circulo{
            width: 140px;
            height: 140px;
            background-color: #fed136;
            font-size: 52px;
            padding-top: 24px;
            color: #fff
        }.centralizar{
            margin: 0 auto !important;
            float: none !important;
        }.servico-link{
          position: absolute;
          top: 0px;
        }`}</style>

        <Container className="text-center">
        <a name="servico" className="servico-link" />

          <div>
            <h2 className="display-4">{data.response.home.serTitulo}</h2>
            <p className="lead pd-4">{data.response.home.serSubtitulo}</p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.response.home.serUmIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.response.home.serUmTitulo}</h2>
              <p>{data.response.home.serUmDesc}</p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.response.home.serDoisIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.response.home.serDoisTitulo}</h2>
              <p>{data.response.home.serDoisDesc}</p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon={data.response.home.serTresIcone} />
              </div>
              <h2 className="mt-4 mb-4">{data.response.home.serTresTitulo}</h2>
              <p>{data.response.home.serTresDesc}</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="portfolio">
        <style>{`.portfolio{
              background-color: #f8f9fa;
              padding-top: 80px
              padding-bottom: 80px;
              margin-bottom: 0rem important!
              position: relative;
          }.portfolio-link{
              position: absolute;
              top: 0px;
          }`}</style>
        
        <Container className="text-center">
        <a name="portfolio" className="portfolio-link" />
          <div>
            <h2 className="display-4">{data.response.home.portTitulo}</h2>
            <p className="lead pb-4">{data.response.home.portSubtitulo}</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-md-3">
            <div className="col mb-4">
              <div className="card">
                <img src={data.response.home.portUmFileName} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{data.response.home.portUmTitulo}</h5>
                  <p className="card-text">{data.response.home.portSubtitulo}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src={data.response.home.portDoisFileName} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{data.response.home.portDoisTitulo}</h5>
                  <p className="card-text">{data.response.home.portDoisSubtitulo}</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img src={data.response.home.portTresFileName} class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{data.response.home.portTresTitulo}</h5>
                  <p className="card-text">{data.response.home.portTresSubtitulo}</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={data.response.home.portQuatroFileName} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.response.home.portQuatroTitulo}</h5>
                  <p class="card-text">{data.response.home.portQuatroSubtitulo}</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={data.response.home.portCincoFileName} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.response.home.portCincoTitulo}</h5>
                  <p class="card-text">{data.response.home.portCincoSubtitulo}</p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card">
                <img src={data.response.home.portSeisFileName} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{data.response.home.portSeisTitulo}</h5>
                  <p class="card-text">{data.response.home.portSeisSubtitulo}</p>
                </div>
              </div>
            </div>
          </div> 
          </Container>
        </Jumbotron>
        <Jumbotron fluid className="rodape">         
          <style>{`.rodape{
            background-color: #000;
            color: #fff;
            padding-top: 0px;
            padding-bottom: 0px;
            margin-bottom: 0rem !imporant!
          }`}

          </style>
          <Container className="text-center">
            <footer className="footer mt-auto py-3">
              <div className="container">
                <span className="text-muted">Degan</span>
              </div>
            </footer>
          </Container>
      </Jumbotron>        
    </div >      
);

Home.getInitialProps= async () => {
  var response = await axios.get('http://localhost:8080/home');
  console.log(response);
  return {response: response.data};
}

export default Home;