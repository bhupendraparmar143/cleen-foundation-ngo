// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Root App Layout
import App from './App.jsx';
import Error from './components/Error.jsx';

// Auth
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';

// Pages
import Home from './Components/Home.jsx';
import Apply from './components/Apply.jsx';
import Blog from './components/Blog.jsx';
import Chatbot from './components/Chatbot.jsx';
import Contact from './components/Contact.jsx';
import Donation from './components/Donation.jsx';
import Employee from './components/Employee.jsx';

// Admin Dashboard
import Admin, {
  Reports,
  Employees,
  Blogs,
  Notify
} from './components/Admin.jsx';

// About Layout + Sub Pages
import AboutLayout from './components/AboutLayout.jsx';
import Introduction from './components/About/Introduction.jsx';
import Journey from './components/About/Journey.jsx';
import Founder from './components/About/Founder.jsx';
import Team from './components/About/Team.jsx';
import Gallery from './components/About/Gallery.jsx';
import Partners from './components/About/Partners.jsx';

// Router configuration
const router = createBrowserRouter([
  {
    path: '/cleen-foundation-ngo',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, // ✅ Fixed default home route
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          { index: true, element: <Introduction /> },
          { path: 'journey', element: <Journey /> },
          { path: 'founder', element: <Founder /> },
          { path: 'team', element: <Team /> },
          { path: 'gallery', element: <Gallery /> },
          { path: 'partners', element: <Partners /> }
        ]
      },
      {
        path: 'admin',
        element: <Admin />,
        children: [
          { path: 'employees', element: <Employees /> },
          { path: 'reports', element: <Reports /> },
          { path: 'blogs', element: <Blogs /> },
          { path: 'notify', element: <Notify /> }
        ]
      },
      { path: 'apply', element: <Apply /> },
      { path: 'blog', element: <Blog /> },
      { path: 'chatbot', element: <Chatbot /> },
      { path: 'contact', element: <Contact /> },
      { path: 'donation', element: <Donation /> },
      { path: 'employee', element: <Employee /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> }
    ]
  }
]);

// Render to DOM
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
