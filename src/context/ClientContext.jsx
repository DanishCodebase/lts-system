import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLContext } from "./UrlContext";
import axios from "axios";

export const clientContext = createContext();

const ClientContext = ({ children }) => {
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
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchClients();
  }, [navigate]);

  return (
    <>
      <clientContext.Provider value={clients}>
        {children}
      </clientContext.Provider>
    </>
  );
};

export default ClientContext;
