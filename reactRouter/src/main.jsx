import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { loadGithubInfo } from './components/github/github.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {path:"",element:<Home/>},
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "user/:id", element: <User /> },
        {
          loader:loadGithubInfo,
          path: "github",
          element: <Github />
        }
      ]
    }
  ]
)



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='home' element={<Home/>} />
//     </Route>)
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
