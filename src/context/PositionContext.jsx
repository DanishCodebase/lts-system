import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLContext } from "./UrlContext";
import axios from "axios";

export const positionsContext = createContext();

const PositionContext = ({ children }) => {
  const url = useContext(URLContext);
  const [positionsData, setPositionsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPositions = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/"); // If no token, redirect to login
        return;
      }

      try {
        const res = await axios.get(
          url + "api/v1/positions?orderBy=newestFirst",
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token to request
            },
          }
        );
        setPositionsData(res.data.positions);
        // console.log(res.data.positions);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPositions();
  }, [navigate]);

  // console.log(positionsData);

  return (
    <>
      <positionsContext.Provider value={positionsData}>
        {children}
      </positionsContext.Provider>
    </>
  );
};

export default PositionContext;
