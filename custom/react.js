const root = document.getElementById('root');
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children: 'click me to visit google'
    
}


customRender(reactElement, root);

function customRender(reactElement, root) {
    
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    Object.keys(reactElement.props).forEach((elem) => { domElement.setAttribute(elem, reactElement.props[elem]) });
    root.appendChild(domElement);    
    

}