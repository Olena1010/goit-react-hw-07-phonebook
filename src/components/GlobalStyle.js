import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E6E6FA;
      background-image: 
    url(https://img.freepik.com/free-vector/beautiful-watercolor-background_23-2148486848.jpg?w=2000),
    linear-gradient(90deg,#E6E6FA,#E6E6FA);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
  }
  h1 {
   font-family: FANTASY;
   font-size: 50px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
