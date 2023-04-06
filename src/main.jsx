import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Books from "./Components/Books/Books";
import BookDitails from "./Components/BookDetilas/BookDitails";

const router =createBrowserRouter([
  {
  path:'/',
  element:<App></App>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'about',
      element:<About></About>
    },
    {
      path:'books',
      element:<Books></Books>,
      loader:()=>fetch('https://api.itbook.store/1.0/new'),
    },
    {
      path:'book/:id',
      element:<BookDitails></BookDitails>,
    loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`),
    },
    {
      path:'header',
      element:<Header></Header>
    },
  ]
  },
  {
    path:'Books',
    element:<p>About page</p>
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router}/>

);
