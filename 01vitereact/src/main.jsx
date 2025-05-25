import App from './App.jsx'
import ReactDOM from "react-dom/client";
import React from 'react';

const reactElement = {
    type: 'a',
    props: { href: 'https://google.com', target: '_blank' },
    children:'click me'
}
const element = React.createElement(
    'a',{ href: 'https://google.com', target: '_blank' },"react elemet created"
)
    
const another = (
    <a href='https://google.com' target='_blank'> clocke ,e</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <App/>
  
)
