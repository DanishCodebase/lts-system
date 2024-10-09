import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const RejectPopUp = () => {
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
            <form action="">
              <Input type="text" placeholder="Type the reason" />
              <Button
                className="mt-3 w-full"
                variant="destructive"
                type="submit"
              >
                Disaprove
              </Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default RejectPopUp;
