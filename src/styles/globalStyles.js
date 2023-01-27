import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', 'sans-serif';
    }

    body, html, #root{
        min-height: 100vh;
    }





`;

export default GlobalStyles;
