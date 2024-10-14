import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Plus, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newPosition = [
  {
    id: "050824 PHP DEVELOPER @ SJ",
    status: "On Process",
    profileSubmitted: 4,
    pendingScreening: 2,
    profilesSent: 0,
    status: true, //status true means it has been aproved false means not
  },
];

const ActivePosition = () => {
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
      <Table className="border">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">
              050824 PHP DEVELOPER @ SJ
            </TableCell>
            <TableCell className="text-right">
              <Link to="/operationex/candidate-profiles">
                <Button
                  variant="outline"
                  className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
                  size="sm"
                >
                  View Candidate's Profiles
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 JAVA DEVELOPER @ TS
            </TableCell>
            <TableCell className="text-right">
              <Link to="/operationex/candidate-profiles">
                <Button
                  variant="outline"
                  className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
                  size="sm"
                >
                  View Candidate's Profiles
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              050824 GRAPHIC DESIGNER @ TS
            </TableCell>
            <TableCell className="text-right">
              <Link to="/operationex/candidate-profiles">
                <Button
                  variant="outline"
                  className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
                  size="sm"
                >
                  View Candidate's Profiles
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ActivePosition;
