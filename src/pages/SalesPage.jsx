import AddClient from "@/components/main/AddClient";
import AddPosition from "@/components/main/AddPosition";
import Clients from "@/components/main/Clients";
import IndividualClient from "@/components/main/IndividualClient";
import Interviews from "@/components/main/Interviews";
import Navbar from "@/components/main/Navbar";
import PositionsTable from "@/components/main/PositionsTable";
import ProfileDetail from "@/components/main/ProfileDetail";
import { positionsContext } from "@/context/PositionContext";
import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

const SalesPage = () => {
  const positions = useContext(positionsContext);

  const approvedpositions = positions.filter(
    (pos) => !pos.disapproved && pos.active
  );

  // const approvedpositionall = positionsData.filter(
  //   (pos) => !pos.disapproved && pos.active
  // );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "./dashboard", label: "Dashboard" },
          { to: "./all-positions", label: "All Positions" },
          { to: "./clients", label: "Clients" },
        ]}
      />
      <main className="max-w-7xl pt-16 mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Interviews />
                  <PositionsTable approvedpositions={approvedpositions} />
                </>
              }
            />
            <Route
              path="dashboard"
              element={
                <>
                  <Interviews />
                  <PositionsTable approvedpositions={approvedpositions} />
                </>
              }
            />
            <Route
              path="all-positions"
              element={<PositionsTable approvedpositions={approvedpositions} />}
            />
            <Route path="clients" element={<Clients />} />
            <Route path="position/:id" element={<ProfileDetail />} />
            <Route path="client/:id" element={<IndividualClient />} />
            <Route path="add-position" element={<AddPosition />} />
            <Route path="add-client" element={<AddClient />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
