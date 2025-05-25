const reactElement = {
    type: 'a',
    props: { href: 'https://google.com', target: '_blank' },
    children:'click me'
}
const reactElement2 = {
  type: "h1",
  props: {  },
  children: "click me",
};


const mainContainer = document.getElementById("root");
console.log(mainContainer);

customRender(reactElement, mainContainer);
customRender(reactElement2, mainContainer);
function customRender(reactElement, mainContainer) {
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    const props = reactElement.props; 
    console.log(props,Object.keys(props))
    for (key of Object.keys(props)) {
        console.log("key",key)
        domElement.setAttribute(key, props[key]);
    }
    console.log(domElement);
    mainContainer.appendChild(domElement);
    
    
}