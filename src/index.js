import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//styles
import "bootstrap/dist/css/bootstrap.min.css";

//import links
import App from './App';
import Home from './routes/Home';
import Blog from './routes/Blog'
import Post from './routes/Post'
import Contact from './routes/Contact';
import Notfoundpage from './routes/Notfoundpage'

//testing
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/blog/:id' element={<Post />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Notfoundpage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
