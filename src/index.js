import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import User from './components/User/User';
import Space, {spaceLoader} from './components/Space/Space';
import Twitter from './components/twitter/Twitter';
import YouTube from './components/youtube/YouTube';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='twitter' element={<Twitter />} />
      <Route path='youtube' element={<YouTube />} />
      <Route path='user/' element={<User />} >
        <Route path=':userId' element={<User/>}/>
      </Route>
      <Route 
      loader={spaceLoader}
      path='space' 
      element={<Space/>} />
    </Route>

  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


