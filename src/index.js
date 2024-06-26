import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListCars from "./components/ListCars";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Landing from "./components/Landing";
import SearchCar from "./components/SearchCar";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />} />
        <Route path="/searchcar" element={<SearchCar />} />
        <Route path="/cars" element={<ListCars />} />
        <Route path="/addcars" element={<AddCar />} />
        <Route path="/edit/:id" element={<EditCar />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
