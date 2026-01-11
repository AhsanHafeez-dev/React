import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from "react-redux"
import { store } from "./app/store.js";
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './Layout'
// import Home from './components/home/Home.jsx'
// import About from "./components/about/About.jsx";
// import Contact from "./components/contact/Contact.jsx";
// import Github, { getGithubInfo } from "./components/Github/Github.jsx";


import App from './App.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "", element: <Home /> },
//         { path: "about", element: <About /> },
//         { path: "contact", element: <Contact /> },
//         { path: "github/:userName", element: <Github /> },
//         // { path: "", element: <Home /> },
//       ]
//     }
//   ]
// )


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />} >
//       <Route path='' element={<Home />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='about' element={<About />} />
//       <Route path='github/:userName' element={<Github />} loader={getGithubInfo} />

      

//     </Route>
//   )
// )




createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <App/>
    
  </Provider>,
)


