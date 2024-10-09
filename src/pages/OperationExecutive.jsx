import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "@/components/main/Navbar";
import ActivePosition from "@/components/main/ActivePosition";
import CandidateProfiles from "@/components/main/CandidateProfiles";
import AddCandidate from "@/components/main/AddCandidate";

const OperationExecutive = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        menuItems={[
          { to: "./dashboard", label: "Dashboard" },
          { to: "./active-position", label: "Active Position" },
          { to: "./candidate-profiles", label: "Candidate's Profiles" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <Routes>
            <Route path="/" element={<ActivePosition />} />
            <Route path="/dashboard" element={<ActivePosition />} />
            <Route path="/candidate-profiles" element={<CandidateProfiles />} />
            <Route path="/add-candidate" element={<AddCandidate />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default OperationExecutive;
