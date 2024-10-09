import Clients from "@/components/main/Clients";
import IndividualClient from "@/components/main/IndividualClient";
import Interviews from "@/components/main/Interviews";
import Navbar from "@/components/main/Navbar";
import PositionsTable from "@/components/main/PositionsTable";
import ProfileDetail from "@/components/main/ProfileDetail";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const SalesPage = ({
  url = "https://cyan-hamster-479122.hostingersite.com/",
}) => {
  const [positionsData, setPositionsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPositions = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/"); // If no token, redirect to login
        return;
      }

      try {
        const res = await axios.get(url + "api/v1/positions?limit=100", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request
          },
        });
        setPositionsData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPositions();
  }, [navigate]);

  const approvedpositions = positionsData.filter(
    (pos) => !pos.disapproved && pos.status == "open"
  );

  const approvedpositionclosed = positionsData.filter(
    (pos) => !pos.disapproved
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "./dashboard", label: "Dashboard" },
          { to: "./all-positions", label: "All Positions" },
          { to: "./clients", label: "Clients" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
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
              element={
                <PositionsTable approvedpositions={approvedpositionclosed} />
              }
            />
            <Route path="clients" element={<Clients />} />
            <Route path="profile" element={<ProfileDetail />} />
            <Route path="client" element={<IndividualClient />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SalesPage;
