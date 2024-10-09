import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import AddCandidate from "./AddCandidate";
import { Link } from "react-router-dom";

const CandidateProfiles = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">
            Candidate's Profile for Position:
          </h2>
          <p>050824 PHP DEVELOPER @ SJ</p>
        </div>
        <div className="space-x-2">
          <Link to="/operationex/add-candidate">
            <Button
              variant="outline"
              className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
            >
              Add New Profile
            </Button>
          </Link>
        </div>
      </div>
      <Table className="border mt-5">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Fahad Ansari</TableCell>
            <TableCell className="text-right">
              <Button
                variant="outline"
                className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              >
                View Profile
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sariq Sohrab</TableCell>
            <TableCell className="text-right">
              <Button
                variant="outline"
                className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              >
                View Profile
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Hanzala Tafzeel</TableCell>
            <TableCell className="text-right">
              <Button
                variant="outline"
                className="text-indigo-500 hover:text-indigo-400 hover:bg-white border-indigo-500"
              >
                View Profile
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default CandidateProfiles;
