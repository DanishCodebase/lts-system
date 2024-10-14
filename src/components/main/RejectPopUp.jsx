import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { URLContext } from "@/context/UrlContext";

const RejectPopUp = ({ positionId }) => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function
  const url = useContext(URLContext);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // Redirect to login if no token found
      return;
    }

    try {
      const response = await axios.put(
        `${url}api/v1/operations/positions/disapprove/${positionId}`, // Correct URL with template literals
        { reason }, // Wrap reason in an object
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting reason:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="destructive">Disapprove</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-xl leading-none">
              Reason of Rejection
            </h4>
          </div>
          <div className="grid gap-2">
            <form onSubmit={handleFormSubmit}>
              <Input
                type="text"
                placeholder="Type the reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
              />
              <Button className="mt-3 w-full" variant="destructive" type="submit">
                Disapprove
              </Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RejectPopUp;
