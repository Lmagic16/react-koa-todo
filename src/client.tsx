import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './client.css';
import App from './component/App';
require("font-awesome-webpack");

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
