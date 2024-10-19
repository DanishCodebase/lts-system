import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Unauthorized from "./components/main/Unauthorized";
import OperationLanding from "./pages/OperationLanding";
import OperationExecutive from "./pages/OperationExecutive";
import SalesPage from "./pages/SalesPage";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// A utility function to get the user role from local storage
const getUserRole = () => {
  return localStorage.getItem("userRole"); // Assumes 'userRole' is the key used to store the role
};

// A higher-order component to handle route protection based on the user role
const ProtectedRoute = ({ allowedRoles, children }) => {
  const userRole = getUserRole();

  if (!userRole) {
    // If no role is found, redirect to the login page
    return <Navigate to="/" />;
  }

  // Check if the user's role matches one of the allowed roles for this route
  return allowedRoles.includes(userRole) ? (
    children
  ) : (
    <Navigate to="/unauthorized" />
  );
};

const App = () => {
  return (
    <Routes>
      {/* Admin Routes */}
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>
        }
      />

      {/* Sales Routes */}
      <Route
        path="/sales/*"
        element={
          <ProtectedRoute allowedRoles={["sales"]}>
            <SalesPage />
          </ProtectedRoute>
        }
      />

      {/* Operations Routes */}
      <Route
        path="/operations/*"
        element={
          <ProtectedRoute allowedRoles={["operations"]}>
            <OperationLanding />
          </ProtectedRoute>
        }
      />

      {/* OperationEx Routes */}
      <Route
        path="/operationex/*"
        element={
          <ProtectedRoute allowedRoles={["operationex"]}>
            <OperationExecutive />
          </ProtectedRoute>
        }
      />

      {/* Unauthorized Page */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Login Route */}
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;

// import React from "react";
// import Login from "./pages/Login";
// import { Route, Routes } from "react-router-dom";
// import SalesPage from "./pages/SalesPage";
// import OperationLanding from "./pages/OperationLanding";
// import OperationExecutive from "./pages/OperationExecutive";
// import Admin from "./pages/Admin";

// const App = () => {
//   return (
//     <>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/sales/*" element={<SalesPage />} />
//         <Route path="/operations/*" element={<OperationLanding />} />
//         <Route path="/operationex/*" element={<OperationExecutive />} />
//         <Route path="/admin/*" element={<Admin />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
