import React, { useState } from 'react';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
    <Navbar color="dark" dark expand="md" className="fixed-top">
        <Container>
          <NavbarBrand href="/">Degan</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/#inicio">Início</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#servico">Servico</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#portfolio">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      )
}

export default Menu;