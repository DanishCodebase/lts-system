import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLContext } from "./UrlContext";
import axios from "axios";

export const positionsContext = createContext();

const PositionContext = ({ children }) => {
  const [positionsData, setPositionsData] = useState([]);
  const navigate = useNavigate();
  const url = useContext(URLContext);

  useEffect(() => {
    const fetchPositions = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/"); // If no token, redirect to login
        return;
      }

      try {
        const res = await axios.get(url + "api/v1/positions?limit=100", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request
          },
        });
        setPositionsData(res.data);
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPositions();
  }, [navigate]);

  return (
    <>
      <positionsContext.Provider value={positionsData}>
        {children}
      </positionsContext.Provider>
    </>
  );
};

export default PositionContext;
