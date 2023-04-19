import React from 'react'
import Root from "./root"
import ErrorPage from '../components/ErrorPage';
import Contact, { loader as contactLoader } from "./contact"
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"


export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} errorElement = {<ErrorPage />} />
       
    
    )
  );
