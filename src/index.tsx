import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Providers } from './Provider';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import  {Apps}  from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <ChakraProvider>
    <Providers>
    <Apps/>
    </Providers>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>

);
