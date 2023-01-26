import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const MainNav = ({ showMenu }) => {
  return (
    <Nav>
      <NavList showMenu={showMenu}>
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

const NavList = styled.ul`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-top: 1rem;

  li {
    margin: 0.25rem 0;
    font-weight: 600;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }
`;
