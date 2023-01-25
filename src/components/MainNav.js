import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/wordle">Wordle</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default MainNav;

const Nav = styled.nav``;

const NavList = styled.ul``;
