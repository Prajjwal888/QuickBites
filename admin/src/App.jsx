import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import List from "./pages/List/List";
import Order from "./pages/Order/Order";
import Add from "./pages/Add/Add";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const url = "https://food-delivery-backend-hvf4.onrender.com";
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <hr></hr>
      <div className="app-content">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/add" element={<Add url={url}></Add>}></Route>
          <Route path="/list" element={<List url={url}></List>}></Route>
          <Route path="/orders" element={<Order url={url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
