import React, { useContext, useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useParams } from "react-router-dom";
import IndividualCanditate from "@/components/main/IndividualCandidate";
import axios from "axios";
import { candidatesContext } from "@/context/CandidateContext";
// import CandidatePopUp from "./CandidatePopUp";

const ProfileDetail = () => {
  const { id } = useParams();

  const candidates = useContext(candidatesContext);

  const poscandi = candidates.filter(
    (candidate) => candidate.currentPosition == id
  );

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{id}</h2>
        <div className="space-x-2">
          <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
            Send All Profiles to Client
          </Button>
        </div>
      </div>
      <Table className="border">
        <TableBody>
          {poscandi.map((candidate, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{candidate.name}</TableCell>
              <TableCell className="font-medium text-center">
                {candidate.status}
              </TableCell>
              <TableCell className="text-right">
                <IndividualCanditate candidate={candidate} />
              </TableCell>
            </TableRow>
          ))}

          {/* <TableRow>
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
              <CandidatePopUp />
              <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                View Profile
              </Button>
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </>
  );
};

export default ProfileDetail;
