// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

// Root App Layout
import App from './App.jsx';
import Error from './components/Error.jsx';

// Auth
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

// Pages
import Home from './Components/Home.jsx';
import Apply from './Components/Apply.jsx';
import Blog from './Components/Blog.jsx';
import Chatbot from './Components/Chatbot.jsx';
import Contact from './Components/Contact.jsx';
import Donation from './Components/Donation.jsx';
import Employee from './Components/Employee.jsx';

// Admin Dashboard
import Admin, {
  Reports,
  Employees,
  Blogs,
  Notify
} from './components/Admin.jsx';

// About Layout + Sub Pages
import AboutLayout from './Components/AboutLayout.jsx';
import Introduction from './Components/About/Introduction.jsx';
import Journey from './Components/About/Journey.jsx';
import Founder from './Components/About/Founder.jsx';
import Team from './Components/About/Team.jsx';
import Gallery from './Components/About/Gallery.jsx';
import Partners from './Components/About/Partners.jsx';

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
