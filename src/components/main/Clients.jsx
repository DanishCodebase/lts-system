import React, { useContext, useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { clientContext } from "@/context/ClientContext";

const Clients = () => {
  const clients = useContext(clientContext);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Client List</h2>
        <div className="space-x-2">
          <Link to="/sales/add-client">
            <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
              Add New Client
            </Button>
          </Link>
        </div>
      </div>
      <Table className="border">
        <TableBody>
          {clients.map((client, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium">{client.company}</TableCell>
              <TableCell className="font-medium text-center">
                {client.clientId}
              </TableCell>
              <TableCell className="text-right">
                <Link to={`/sales/client/${client.clientId}`}>
                  <Button
                    className="bg-indigo-500 hover:bg-indigo-400"
                    size="sm"
                  >
                    View Positions
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Clients;
