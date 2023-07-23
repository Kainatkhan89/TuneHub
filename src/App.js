import {
  ChakraProvider,
  theme
} from '@chakra-ui/react';
import React from 'react';
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Login from './pages/Authentication/Login';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/ContactUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import LandingPage from './pages/LandingPage/LandingPage';
import AdminPage from './pages/Admin/Admin';
import LayoutWithNav from './pages/Layout/LayoutWithNav';
import LayoutWithoutNav from './pages/Layout/LayoutWithoutNav';

const router = createBrowserRouter([
  {
    element: <LayoutWithNav />,
    children: [
      {
        // Change this path back to the Admin page
        path: "/",
        //element: <LandingPage />
        element: <AdminPage />
      },
      {
        path: "/faq",
        element: <FAQ/>
      },
      {
        path: "/about-us",
        element: <AboutUs />
      },
      {
        path:"/contact-us",
        element: <ContactUs/>
      }
    ]
  },
  {
    element: <LayoutWithoutNav />,
    children: [
      {
        path: "/user/login",
        element: <Login />
      },
    ]
  }
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
