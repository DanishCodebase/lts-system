import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URLContext } from "@/context/UrlContext";

const AddPosition = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    clientId: "",
    expected_salary: "",
    skill_name: "",
    experience: "",
    resource_count: "",
    tenure: "",
    interview_rounds: "",
  });

  const url = useContext(URLContext);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // If no token, redirect to login
      return;
    }
    
    e.preventDefault();
    try {
      const response = await axios.post(
        url + "api/v1/sales/position/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Form Data Submitted Successfully:", response.data);
      alert("Position added successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Failed to add position. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-semibold mb-6">Add Position</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label
            htmlFor="clientId"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Client
          </Label>
          <Input
            id="clientId"
            value={formData.clientId}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="expected_salary"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Salary Offering
          </Label>
          <Input
            id="expected_salary"
            value={formData.expected_salary}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="skill_name"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Skill Name
          </Label>
          <Input
            id="skill_name"
            value={formData.skill_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="experience"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Relevant Years Experience
          </Label>
          <Input
            id="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="resource_count"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Number of Resources
          </Label>
          <Input
            id="resource_count"
            value={formData.resource_count}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="tenure"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Contract Tenure
          </Label>
          <Input
            id="tenure"
            value={formData.tenure}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="interview_rounds"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Interview Rounds
          </Label>
          <Input
            id="interview_rounds"
            value={formData.interview_rounds}
            onChange={handleInputChange}
          />
        </div>
        <div className="block mt-6">
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white block w-full font-semibold text-[17px]"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPosition;
