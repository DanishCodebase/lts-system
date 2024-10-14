import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
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
import { positionsContext } from "@/context/PositionContext";
import { clientContext } from "@/context/ClientContext";

const IndividualClient = () => {
  const { id } = useParams();

  const clients = useContext(clientContext);

  const positionsData = useContext(positionsContext);

  const clientPosition = positionsData.filter(
    (pos) => !pos.disapproved && pos.clientId == id
  );

  return (
    <>
      <div className="xs:flex justify-between items-center mb-4">
        {clients.map((client, idx) =>
          id == client.clientId ? (
            <h2 key={idx} className="text-lg font-semibold">
              {client.company}
            </h2>
          ) : (
            ""
          )
        )}
        {/* <h2 className="text-lg font-semibold">
          {clients[id].company}
        </h2> */}
        <div className="space-x-2 my-5 xs:my-0">
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Skill</TableHead>
            <TableHead>Acitve on</TableHead>
            <TableHead>Closed on</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clientPosition.map((position, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">
                {position.skill_name}
              </TableCell>
              {/* <TableCell>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {position.status}
                  </span>
                </TableCell> */}
              <TableCell>{position.created_at}</TableCell>
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
