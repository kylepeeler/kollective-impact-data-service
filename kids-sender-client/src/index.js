import React from 'react';
import ReactDOM from 'react-dom';
import SenderClient from './SenderClient';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<SenderClient />, document.getElementById('root'));
registerServiceWorker();
