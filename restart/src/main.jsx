
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';



const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    targer: "blank",
  },
  children: "click me to visit google",

  textContent: "khkjdshfkjshd",

  

};

const another = (
  <a href='https://google.com' target='_blank'> google</a>
)
const work = React.createElement('a',
  {
    href: "https://google.com",
    target:"blank"
  },
  "click me to visist googe by tree"
)

createRoot(document.getElementById('root')).render(

    work


)
