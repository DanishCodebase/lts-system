import React, { useContext, useEffect, useState } from "react"; 
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { URLContext } from "@/context/UrlContext";

const AssignPopUp = ({ positionId, onUpdate }) => {
  const [salesPersons, setSalesPersons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSalesPerson, setSelectedSalesPerson] = useState("");
  const [isOpen, setIsOpen] = useState(false); // State to control popover

  const url = useContext(URLContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchSalesPersons = async () => {
      try {
        const response = await axios.get(url + "api/v1/operations/sales", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
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

  const handleAssign = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const requestData = {
        salesId: selectedSalesPerson,
        positionId: positionId,
      };

      await axios.post(
        `${url}api/v1/operations/assignto`,
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onUpdate({ positionId, status: "ACTIVE" }); // Update the position status after assignment
      setIsOpen(false); // Close the popover
    } catch (error) {
      console.error("Error assigning sales person:", error);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button className="mr-3">Assign to Sales</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-xl leading-none">Assign To</h4>
          </div>
          <div className="grid gap-2">
            <form onSubmit={handleAssign}>
              <Select onValueChange={(value) => setSelectedSalesPerson(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a sales person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {loading ? (
                      <SelectItem disabled>Loading...</SelectItem>
                    ) : error ? (
                      <SelectItem disabled>{error}</SelectItem>
                    ) : (
                      salesPersons.map((person, idx) => (
                        <SelectItem key={idx} value={person.saleId}>
                          {person.name} ({person.active_positions_handling})
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
