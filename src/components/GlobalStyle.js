import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import InterRegular from '../fonts/Inter-Regular.ttf';
import InterMedium from '../fonts/Inter-Medium.ttf';
import InterBold from '../fonts/Inter-Bold.ttf';
import InterSemiBold from '../fonts/Inter-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Inter';
        src: local('Inter'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

      @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Inter';
        src: local('Inter'), url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

body {
    font-family: 'Inter', sans-serif;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none; 
  cursor: pointer;
}

ul, ol {
    list-style: none;
    padding-left: 0;
    margin: 0
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6
 {
  margin: 0;
  padding: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
}`;

export default GlobalStyle;
