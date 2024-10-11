import React, { useContext, useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { URLContext } from "@/context/UrlContext";
import axios from "axios";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();
  const url = useContext(URLContext);

  useEffect(() => {
    const fetchClients = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/"); // If no token, redirect to login
        return;
      }

      try {
        const res = await axios.get(url + "api/v1/client", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request
          },
        });
        setClients(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClients();
  }, [navigate]);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Client List</h2>
        <div className="space-x-2">
          <Button className="bg-indigo-500 hover:bg-indigo-400" size="sm">
            Add New Client
          </Button>
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
