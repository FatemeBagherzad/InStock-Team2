import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehouseEdit from "./components/WarehouseEdit/WarehouseEdit";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/warehouse/:id/edit" component={WarehouseEdit} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
