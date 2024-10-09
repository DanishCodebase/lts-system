import React from "react";
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

const IndividualClient = () => {
  const positionsData = [
    {
      id: "PHP DEVELOPER",
      activeDate: "05/08/2024",
      closeDate: "10/08/2024",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Think Solution</h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create new Position
          </Button>
          <Button
            variant="outline"
            className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
            size="sm"
          >
            <List className="h-4 w-4 mr-2" />
            View All Positions
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead>Acitve on</TableHead>
            <TableHead>Closed on</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {positionsData.map((position) => (
            <TableRow key={position.id}>
              <TableCell className="font-medium">{position.id}</TableCell>
              {/* <TableCell>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {position.status}
                  </span>
                </TableCell> */}
              <TableCell>{position.activeDate}</TableCell>
              <TableCell>{position.closeDate}</TableCell>
              {/* <TableCell>
                  <Link to="/profile-detail">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default IndividualClient;
