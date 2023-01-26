import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;
