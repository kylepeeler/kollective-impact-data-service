import React from 'react';
import ReactDOM from 'react-dom';
import ReceiverClient from './ReceiverClient';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ReceiverClient />, document.getElementById('root'));
registerServiceWorker();
