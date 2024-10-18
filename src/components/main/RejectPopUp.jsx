import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { URLContext } from "@/context/UrlContext";

const RejectPopUp = ({ positionId, onUpdate }) => {
  const [reason, setReason] = useState("");
  const navigate = useNavigate();
  const url = useContext(URLContext);
  const [isOpen, setIsOpen] = useState(false); // State to control popover

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      await axios.put(
        `${url}api/v1/operations/positions/disapprove/${positionId}`,
        { reason },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onUpdate({ positionId, status: "Disapproved" }); // Update the position status after rejection
      setIsOpen(false); // Close the popover
    } catch (error) {
      console.error("Error submitting reason:", error);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="destructive">Disapprove</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium text-xl leading-none">
              Disapprove Reason
            </h4>
            <p className="text-sm text-muted-foreground">
              Provide a reason for disapproving this position.
            </p>
          </div>
          <div className="grid gap-2">
            <form onSubmit={handleFormSubmit}>
              <Input
                type="text"
                placeholder="Write the reason here"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              <Button className="mt-3 w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RejectPopUp;
