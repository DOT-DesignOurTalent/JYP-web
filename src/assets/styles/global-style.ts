import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif !important;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  button:focus {
    outline: none;
  }
  button {
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }
  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
