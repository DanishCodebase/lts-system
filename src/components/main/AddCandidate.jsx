import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddCandidate = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-semibold mb-6">
        Candidate Details
      </h2>
      <form className="space-y-4">
        <div className="mb-4">
          <Label
            htmlFor="name"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Candidate Name
          </Label>
          <Input id="name" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="mobile"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Mobile No.
          </Label>
          <Input id="mobile" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="email"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Email Id
          </Label>
          <Input id="email" type="email" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="total-exp"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Total years Experience
          </Label>
          <Input id="total-exp" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="relevant-exp"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Relevant yrs Exp.
          </Label>
          <Input id="relevant-exp" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="notice-period"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Notice Period
          </Label>
          <Input id="notice-period" />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="rate-card"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Rate Card
          </Label>
          <Input id="rate-card" />
        </div>
        <div className="block mt-6">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white block w-full font-semibold text-[17px]">
            Button
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;
