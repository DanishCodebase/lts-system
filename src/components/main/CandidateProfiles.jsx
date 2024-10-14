import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, List } from "lucide-react";
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
