import React from "react";
import Navbar from "@/components/main/Navbar";
import NewPosition from "@/components/main/NewPosition";

const OperationLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar menuItems={[{ to: "/", label: "Home" }]} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <NewPosition />
        </div>
      </main>
    </div>
  );
};

export default OperationLanding;
