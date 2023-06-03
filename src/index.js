import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { CompteurContextProvider } from './component/CompteurContext';



ReactDOM.render(
<CompteurContextProvider>
  <App/>
</CompteurContextProvider>,document.getElementById('root')
  
);
