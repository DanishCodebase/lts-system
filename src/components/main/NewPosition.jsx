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
import { Plus, List } from "lucide-react";
import RejectPopUp from "./RejectPopUp";
import AssignPopUp from "./AssignPopUp";

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
  // heading = "New Positions",
  // btn1 = "Submit Profile",
  // link1 = "/operations/submit-profile",
  // btn2 = "View All Submissions",
  // link2 = "/operations/view-all-submissions",
}) {
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
                {/* <Link to="/sales/profile">
                  <Button className="bg-green-500 hover:bg-green-400" size="sm">
                    <Eye className="h-5 w-5" />
                  </Button>
                </Link> */}
                <AssignPopUp />
                <RejectPopUp positionId={position.positionId} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

// import React from "react";
// import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import AssignPopUp from "./AssignPopUp";
// import RejectPopUp from "./RejectPopUp";
// import { Link } from "react-router-dom";

// const newPosition = [
//   {
//     id: "050824 PHP DEVELOPER @ SJ",
//     status: "On Process",
//     profileSubmitted: 4,
//     pendingScreening: 2,
//     profilesSent: 0,
//     status: true, //status true means it has been aproved false means not
//   },
// ];

// const NewPosition = () => {
//   return (
//     <>
//       <h2 className="text-lg mb-5 font-semibold">New Positions</h2>
//       <Table className="border">
//         <TableBody>
//           <TableRow>
//             <TableCell className="font-medium">
//               050824 PHP DEVELOPER @ SJ
//             </TableCell>
//             <TableCell className="text-right">
//               <AssignPopUp />
//               <RejectPopUp />
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell className="font-medium">
//               050824 JAVA DEVELOPER @ TS
//             </TableCell>
//             <TableCell className="text-right">
//               <AssignPopUp />
//               <RejectPopUp />
//             </TableCell>
//           </TableRow>
//           <TableRow>
//             <TableCell className="font-medium">
//               050824 GRAPHIC DESIGNER @ TS
//             </TableCell>
//             <TableCell className="text-right">
//               <Link to={"/operationex"}>
//                 <Button className="bg-indigo-500 hover:bg-indigo-400">
//                   View
//                 </Button>
//               </Link>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </>
//   );
// };

// export default NewPosition;
