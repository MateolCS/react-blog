import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <p>Created by @MateoICS</p>
        <FooterLink href="https://github.com/MateolCS">
          <StyledGithub />
        </FooterLink>
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #008f7a;
  color: #fff;
  font-weight: 600;
  padding: 1rem 0;
  align-self: flex-end;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`;

const StyledGithub = styled(FaGithub)`
  font-size: 1.4rem;

  &:hover {
    color: #845ec2;
  }
`;
