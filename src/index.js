 
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import { BrowserRouter  } from "react-router-dom";

import Main from './main';


ReactDOM.render(
   <BrowserRouter>
    <Home /> 
    <Main />
  </BrowserRouter>,

  document.getElementById('root')
);


