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
          <Link to="/posts">Random post</Link>
        </li>
        <li>
          <Link to="/wordle">Wordle</Link>
        </li>
      </NavList>
    </Nav>
  );
};

export default MainNav;

const Nav = styled.nav`
  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

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

    &:hover {
      cursor: pointer;
      color: #c4fcef;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    gap: 2rem;
  }
`;
