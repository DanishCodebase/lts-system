import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import CandidatePopUp from "./CandidatePopUp";

const ProfileDetail = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">050824 PHP DEVELOPER @ SJ</h2>
        <div className="space-x-2">
          <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
            Send All Profiles to Client
          </Button>
        </div>
      </div>
      <Table className="border">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Fahad</TableCell>
            <TableCell className="font-medium text-center">
              Interview Scheduled
            </TableCell>
            <TableCell className="text-right">
              <Link to="">
                <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                  View Profile
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Danish</TableCell>
            <TableCell className="font-medium text-center">
              Feedback Awaited
            </TableCell>
            <TableCell className="text-right">
              <Link to="">
                <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                  View Profile
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Yusuf</TableCell>
            <TableCell className="font-medium text-center">
              Added to top profile
            </TableCell>
            <TableCell className="text-right">
              {/* <CandidatePopUp /> */}
              <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                View Profile
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProfileDetail;
