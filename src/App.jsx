import React from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import OperationLanding from "./pages/OperationLanding";
import OperationExecutive from "./pages/OperationExecutive";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sales/*" element={<SalesPage />} />
        <Route path="/operations/*" element={<OperationLanding />} />
        <Route path="/operationex/*" element={<OperationExecutive />} />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
