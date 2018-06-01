import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Automatically delete a component
setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}, 5000)

registerServiceWorker();
