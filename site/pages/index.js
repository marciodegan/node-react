import React, { useState } from 'react';
import Head from 'next/head';

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

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Head>
        <title>Home - Degan</title>
        <meta name="description" content="Site de ... sobre ..." />
        <meta name="author" content="Degan" />


      </Head>

      <Navbar color="dark" dark expand="md" className="fixed-top">
        <Container>
          <NavbarBrand href="/">Degan</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <br />
      <Jumbotron fluid className="descr-top">
        <style>{`.descr-top{
            background-color: #000;
            color: #fff;
            padding-top: 150 px;
            padding-bottom: 150px;
            margin-bottom: 0rem !imporant;
          }`}</style>
        <Container className="text-center">
          <h2 className="display-4 mb-4">Temos a solução que a sua empresa precisa!</h2>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button outline color="primary" size="lg">ENTRE EM CONTATO</Button>
          </p>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
        <style>{`.servicos{
          margin-bottom: 0rem !imporant;
          background-color: #fff;
          padding-top: 80px;
          padding-bottom: 80px;          
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
          }`}</style>

        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pd-4">typography and spacing </p>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="code" />
              </div>
              <h2 className="mt-4 mb-4">Serviço 1</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="laptop-code" />
              </div>
              <h2 className="mt-4 mb-4">Serviço 2</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
            <div class="col-lg-4">
              <div className="rounded-circle circulo centralizar">
                <FontAwesomeIcon icon="desktop" />
              </div>
              <h2 className="mt-4 mb-4">Serviço 3</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="portfolio">
        <style>
          {`.portfolio{
              background-color: #f8f9fa;
              padding-top: 80px
              padding-bottom: 80px;
              margin-bottom: 0rem important!
              }`}
        </style>
        
        <Container className="text-center">
          <div>
            <h2 className="display-4">Portfólio</h2>
            <p className="lead pb-4">jdfidoasjfi fiodsaf i fkioe fio jisdoa fjio faniofsdaf io</p>
          </div>
          <div class="row row-cols-1 row-cols-md-2">
            <div class="col mb-4">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
          </div>
              </div>
              <div class="col mb-4">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
          </div>
                </div>
                <div class="col mb-4">
                  <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                      </div>
          </div>
                  </div>
                  <div class="col mb-4">
                    <div class="card">
                      <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
          </div>
                    </div>
                  </div>
          </Container>

        </Jumbotron>
            </div >
      
    )
}

export default HomePage