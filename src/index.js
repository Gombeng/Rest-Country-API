import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

  * {
    margin: 0;
    padding: 0;
	box-sizing: border-box;
  }

  body{
	font-family: 'Nunito Sans', sans-serif;
  }

  h1,h2,h3,p{
    color:hsl(200, 15%, 8%);
  }

  h1,h2,h3,.title{
	  font-weight: 800;
  }

  p{
    font-weight: 300;
  }

  .sub-title{
	  font-weight: 600;
  }

  .container{
	  max-width: 440px;
  }

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
