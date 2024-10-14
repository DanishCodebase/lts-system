import React, { useContext } from "react";
import Navbar from "@/components/main/Navbar";
import NewPosition from "@/components/main/NewPosition";
import PositionsTable from "@/components/main/PositionsTable";
import { positionsContext } from "@/context/PositionContext";

const OperationLanding = () => {
  const positions = useContext(positionsContext);

  const newpositions = positions.filter(
    (pos) => !pos.disapproved && !pos.active
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <Navbar
        menuItems={[
          { to: "/", label: "Home" },
          { to: "/operationex", label: "Operation Ex" },
        ]}
      />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <NewPosition approvedpositions={newpositions} />
          {/* <PositionsTable
            approvedpositions={newpositions}
            heading="New Positions"
            btn1="Submit Profile"
            link1="/operations/submit-profile"
            btn2="View All Submissions"
            link2="/operations/view-all-submissions"
          /> */}
        </div>
      </main>
    </div>
  );
};

export default OperationLanding;
