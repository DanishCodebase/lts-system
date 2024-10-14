// src/components/PositionsTable.jsx
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
import { Eye, Plus, List } from "lucide-react";

// const positionsData = [
//   {
//     id: "050824 PHP DEVELOPER @ SJ",
//     status: "On Process",
//     profileSubmitted: 4,
//     pendingScreening: 2,
//     profilesSent: 0,
//   },
// ];

export default function PositionsTable({
  approvedpositions,
  // heading = "Active Positions Status",
  // btn1 = "Create new Position",
  // link1 = "/sales/add-position",
  // btn2 = "View All Positions",
  // link2 = "/sales/all-positions",
}) {
  return (
    <>
      <div className="xs:flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Positions Status</h2>
        <div className="space-x-2 my-10 xs:my-0">
          <Link to="/sales/add-position">
            <Button
              variant="outline"
              className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              size="sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create new Position
            </Button>
          </Link>
          <Link to="/sales/all-positions">
            <Button
              variant="outline"
              className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              size="sm"
            >
              <List className="h-4 w-4 mr-2" />
              View All Positions
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
          {approvedpositions.map((position, idx) => (
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
                <Link to={"/sales/position/" + position.positionId}>
                  <Button className="bg-green-500 hover:bg-green-400" size="sm">
                    <Eye className="h-5 w-5" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
