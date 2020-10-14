import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Navi from './navbar.js'

const CollapseNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='dark' light>
        <NavbarBrand color="white" href="/" className="mr-auto">Home</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse color="dark" isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/women">Women</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/men">Men</NavLink>
            </NavItem>
          </Nav>
          <Navi/>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CollapseNav;