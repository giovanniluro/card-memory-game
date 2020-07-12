import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
  }

  h1, p {
    color: #040F0F;
  }
  
  body {
    background: #403D39;

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

`