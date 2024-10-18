import { useState } from "react";
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
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select"; // Ensure the correct import path for your Select component

export default function PositionsTable({ approvedpositions, hidden }) {
  const [selectedStatus, setSelectedStatus] = useState("All"); // Default to "All"

  // Function to determine the color class based on the status
  const getStatusClass = (status) => {
    switch (status) {
      case "CLOSED":
        return "bg-yellow-500 text-white";
      case "ACTIVE":
        return "bg-green-500 text-white";
      case "DISAPPROVED":
        return "bg-red-500 text-white";
      case "WAITING_FOR_APPROVAL":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  // Filtered positions based on selected status
  const filteredPositions =
    selectedStatus === "All"
      ? approvedpositions
      : approvedpositions.filter(
          (position) => position.status === selectedStatus
        );

  return (
    <>
      <div className="xs:flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Active Positions Status</h2>
        <div className="flex space-x-4 items-center my-10 xs:my-0">
          {/* ShadCN Select component for status filter */}
          <Select
            value={selectedStatus}
            onValueChange={(value) => setSelectedStatus(value)}
          >
            <SelectTrigger className={`${hidden} w-[200px]`}>
              <SelectValue placeholder="Select a status" defaultValue="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="ACTIVE">Active</SelectItem>
                <SelectItem value="CLOSED">Closed</SelectItem>
                <SelectItem value="DISAPPROVED">Disapproved</SelectItem>
                <SelectItem value="WAITING_FOR_APPROVAL">
                  Waiting for Approval
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
          {filteredPositions.map((position, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">
                {position.positionId}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                    position.status
                  )}`}
                >
                  {position.status}
                </span>
              </TableCell>
              <TableCell>{position.profile_submitted}</TableCell>
              <TableCell>{position.profile_sent}</TableCell>
              <TableCell>{position.pendingScreening}</TableCell>
              <TableCell>
                <Link to={`/sales/position/${position.positionId}`}>
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
