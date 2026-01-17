import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components"
import {Outlet} from 'react-router-dom'
function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  
  useEffect(
    () => {

      authService.getCurrentUser()
        .then(
          (userData) => {
            console.log("got here");
            
            if (userData) dispatch(login(userData))
            else dispatch(logout())
          }
      )
        
        .finally(() => setLoading(false));
      
      
    },
    [])

  
  return (
    <>
      {!loading ?
        <div className='min-h-screen w-screen flex flex-wrap content-between bg-gray-400 justify-center items-center'>
        
          <div className='w-full block'>
            <Header />
            <main>

              TODO: <Outlet/>
              
            
            </main>
            <Footer/>
          </div>
        </div>


        : null
      }
    </>
  )
  
}

export default App
