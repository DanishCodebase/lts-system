import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, List } from "lucide-react";
import RejectPopUp from "./RejectPopUp";
import AssignPopUp from "./AssignPopUp";

export default function PositionsTable({ approvedpositions }) {
  const [positions, setPositions] = useState([]);

  // Use useEffect to update the positions state when approvedpositions prop changes
  useEffect(() => {
    setPositions(approvedpositions);
  }, [approvedpositions]);

  // Function to update the position status when an action is performed
  const updatePositionStatus = (updatedPosition) => {
    setPositions((prevPositions) =>
      prevPositions.map((position) =>
        position.positionId === updatedPosition.positionId
          ? { ...position, ...updatedPosition }
          : position
      )
    );
  };

  return (
    <>
      <div className="xs:flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">New Positions</h2>
        <div className="space-x-2 my-10 xs:my-0">
          <Link to="/operationex/add-candidate">
            <Button
              variant="outline"
              className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Submit New Profile
            </Button>
          </Link>
          <Link to="/operationex/candidate-profiles">
            <Button
              variant="outline"
              className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              size="sm"
            >
              <List className="h-4 w-4 mr-2" />
              View All Submissions
            </Button>
          </Link>
        </div>
      </div>
      <Table className="text-base font-normal text-nowrap">
        <TableHeader>
          <TableRow>
            <TableHead>Position ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Profile Submitted</TableHead>
            <TableHead>Profiles Sent to Client</TableHead>
            <TableHead>Pending Screening</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positions.map((position, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">
                {position.positionId}
              </TableCell>
              <TableCell>
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {position.status}
                </span>
              </TableCell>
              <TableCell>{position.profile_submitted}</TableCell>
              <TableCell>{position.profile_sent}</TableCell>
              <TableCell>{position.pendingScreening}</TableCell>
              <TableCell>
                <AssignPopUp
                  positionId={position.positionId}
                  onUpdate={updatePositionStatus}
                />
                <RejectPopUp
                  positionId={position.positionId}
                  onUpdate={updatePositionStatus}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
