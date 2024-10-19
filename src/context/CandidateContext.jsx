import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { URLContext } from "./UrlContext";

export const candidatesContext = createContext();

const CandidateContext = ({ children }) => {
  const [candidatesData, setCandidatesData] = useState([]);
  const navigate = useNavigate();
  const url = useContext(URLContext);
  //   console.log(url);

  useEffect(() => {
    const fetchCandidates = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/"); // If no token, redirect to login
        return;
      }

      try {
        const res = await axios.get(
          url + "api/v1/candidate", // Assuming the endpoint is for candidates
          {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token to request
            },
          }
        );
        setCandidatesData(res.data); // Assuming the response contains candidates data
        // console.log(candidatesData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCandidates();
  }, [navigate]);

  return (
    <>
      <candidatesContext.Provider value={candidatesData}>
        {children}
      </candidatesContext.Provider>
    </>
  );
};

export default CandidateContext;
