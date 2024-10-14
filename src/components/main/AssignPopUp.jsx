import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { URLContext } from "@/context/UrlContext";

const AssignPopUp = () => {
  const [salesPersons, setSalesPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = useContext(URLContext);

  // Fetch data from API using async/await when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // If no token, redirect to login
      return;
    }

    const fetchSalesPersons = async () => {
      try {
        const response = await axios.get(url + "api/v1/operations/sales", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to request
          },
        }); // Replace with your API endpoint
        setSalesPersons(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch sales persons");
      } finally {
        setLoading(false);
      }
    };

    fetchSalesPersons();
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="mr-3">Assign to Sales</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-xl leading-none">Assign To</h4>
          </div>
          <div className="grid gap-2">
            <form action="">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a sales person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    {loading ? (
                      <SelectItem disabled>Loading...</SelectItem>
                    ) : error ? (
                      <SelectItem disabled>{error}</SelectItem>
                    ) : (
                      salesPersons.map((person, idx) => (
                        <SelectItem key={idx} value={person.name}>
                          {person.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="mt-3 w-full" type="submit">
                Assign
              </Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AssignPopUp;
