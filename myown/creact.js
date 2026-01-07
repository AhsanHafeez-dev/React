
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    targer: "blank",
  },
  children: "click me to visit google",

  textContent: "khkjdshfkjshd",

  

};
const root = document.getElementById("root")

function render(element) {
    const elementToAdd=document.createElement(element.type);
    
    const props = element.props;
    for (prop in props ) {
        console.log("setting : ",prop," to value : ",props[prop]);
        
        elementToAdd.setAttribute(prop,props[prop])
        
        
    }

    const lst = Array.from(Object.keys(element));
    lst.forEach(
        (el) => {
            if (el == "props") {
                console.log("ignoring props");
                
                return;
            }
            console.log(el);
            
            elementToAdd[el] = element[el];
            
            
        }
    )

    
    

    
    
    root.appendChild(elementToAdd)
}


render(reactElement);

