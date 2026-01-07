const reactElement = {
  type: "div",
  props: {
    href: "https:google.com",
    target: "_blank",
  },
  children: "click me",
};
const root = document.getElementById("root");


const render = (item, root) => {
    const element = document.createElement(item.type);
 console.log(item)   
    for (let i in item.props) {
        element.setAttribute(i, item.props[i]);
    }
    element.innerHTML = item.children;
    root.appendChild(element);
   
}

render(reactElement,root)