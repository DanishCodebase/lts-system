import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
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
      <h2 className="text-lg mb-5 font-semibold">New Positions</h2>
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
