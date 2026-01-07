# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## React Hooks My Learning 
## Use State :
- It is used to create a state like 

```javascript
const [counter,setCounter]=useState(0);
console.log(counter) // getter or get value
setCounter(counter+1); // set The counter value
```

- here 0 is initial value of counter 
- you can consider counter and setCounter as getter and setter by writting counter you get value and by calling setCounter you update the value
- but question is we can do it using our vanila (plain) javascript so why use useState
- lets say you use this in any component of your app lie 


```html
<h1> my counter {counter}</h1>
```

- if you have declared counter as classic js variable now once it has rendered and value of counter changes nothing changes in ui because you manually have to update ui using dom using slectors
- But what if you variable automaticallt react to changes thats where useState comes into the picture When ever you  set value using setCounter react "reacts" and update all the ui's component using that value 

## Use Effect :
- Before starting to understatnding this hook we should understand first the component lifecyle in react which is mainly four stages 
- Initialized
- mounted
- updation 
- unmounting 
- names are alreafy self-explanatory but lets still talk about them for clarity
-  Initilization as name suggest is creation of element mounting is rendering of element i.e when compoenent starts to become visible , updation is when component changes (remeber setState?) and unmounting when components gets deleted to removed 
- if you want to perform any action on when ever any phase of lifecycle is going on you can use useEffect hook
- first see its basic syntax and then we will move litlle more understanding
- it basically takes two arguments first is callback function and other is dependency array

```javascript

useEffect(
    ()=>{},
    []
)
```

- if you dont pass empty array in second parameter it will be run on first render
- but if you dont pass anything in second paramtere it will run on every render


```javascript

useEffect(
    ()=>{})
```

- if you pass any state in second paramtere array it will be called everytime that state has changes or initialized


```javascript

useEffect(
    ()=>{},
    [counter]
)
```


- till now we have seen how to execute anything when compoenent is mounted (passing empty array in second argument) or how to run on every render (passing nothing in second paramter) how to execute something on update of state (passing state in second paramtere) now its time we see how to execute something on unmoiunt 


```javascript

useEffect(
    ()=>{
        // execute anything you want to execute on first render

        return ()=>{}    // it will run on unmounting
    },
    []
)
```

- now return function will be executed when component is unmounted 
- but what if we return function when passing state

```javascript

useEffect(
    ()=>{
        // any logic
        return ()=>{}
    },
    [counter]
)
```

- in this case when counter is destroyed it is called 
- on every update previous state is un mount and new state is mouned so this return fucnction will execute just before updation 
