import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <Wrapper>
        <Logo>Tech Blog</Logo>
        <StyledBurger onClick={toggleMenu} />
      </Wrapper>
      <MainNav showMenu={isOpen} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  background-color: #008f7a;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;

const StyledBurger = styled(FaBars)`
  font-size: 2rem;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
