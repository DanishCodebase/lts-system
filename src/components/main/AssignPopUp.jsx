import React from "react";
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

const AssignPopUp = () => {
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
                <SelectTrigger className="">
                  <SelectValue placeholder="Select a sales person" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel></SelectLabel>
                    <SelectItem value="Danish(5)">Danish (5)</SelectItem>
                    <SelectItem value="Fahad(3)">Fahad (3)</SelectItem>
                    <SelectItem value="Yusuf(2)">Yusuf (2)</SelectItem>
                    <SelectItem value="Kaif(3)">Kaif (3)</SelectItem>
                    <SelectItem value="Ehtasam(1)">Ehtasam (1)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="mt-3 w-full" type="submit">Assign</Button>
            </form>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AssignPopUp;
