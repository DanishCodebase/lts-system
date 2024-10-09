import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Clients = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">050824 PHP DEVELOPER @ SJ</h2>
        <div className="space-x-2">
          <Button
            className="bg-indigo-500 hover:bg-indigo-400"
            size="sm"
          >
            Add New Client
          </Button>
        </div>
      </div>
      <Table className="border">
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Think Solution</TableCell>
            <TableCell className="font-medium text-center">
              TS
            </TableCell>
            <TableCell className="text-right">
              <Link to="/sales/client">
                <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                  View Positions
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="font-medium">Think Solution</TableCell>
            <TableCell className="font-medium text-center">
              TS
            </TableCell>
            <TableCell className="text-right">
              <Link to="/sales/client">
                <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                  View Positions
                </Button>
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
          <TableCell className="font-medium">Think Solution</TableCell>
            <TableCell className="font-medium text-center">
              TS
            </TableCell>
            <TableCell className="text-right">
              <Link to="/sales/client">
                <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
                  View Positions
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Clients;
