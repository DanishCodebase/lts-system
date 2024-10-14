import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URLContext } from "@/context/UrlContext";

const AddCandidate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    experience: "",
    relevant_experience: "",
    rate_card: "",
    positionId: "",
  });

  const url = useContext(URLContext);

  // Handle form data change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  // Submit form data to backend
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // If no token, redirect to login
      return;
    }

    e.preventDefault();
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: {
          country: formData.country,
          state: formData.state,
        },
        experience: formData.experience,
        relevant_experience: formData.relevant_experience,
        rate_card: formData.rate_card,
        positionId: formData.positionId,
      };

      await axios.post(url + "api/v1/operations/candidates/add", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }); // Replace with your API endpoint
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        experience: "",
        relevant_experience: "",
        rate_card: "",
        positionId: "",
      });
      alert("Candidate data submitted successfully");
    } catch (error) {
      console.error("Error submitting candidate data:", error);
      alert("Failed to submit candidate data");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-semibold mb-6">
        Candidate Details
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label
            htmlFor="name"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Candidate Name
          </Label>
          <Input id="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="phone"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Mobile No.
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="email"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Email Id
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="country"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Country
          </Label>
          <Input
            id="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="state"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            State
          </Label>
          <Input
            id="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="experience"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Total years Experience
          </Label>
          <Input
            id="experience"
            value={formData.experience}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="relevant_experience"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Relevant yrs Exp.
          </Label>
          <Input
            id="relevant_experience"
            value={formData.relevant_experience}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="rate_card"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Rate Card
          </Label>
          <Input
            id="rate_card"
            value={formData.rate_card}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="positionId"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Position ID
          </Label>
          <Input
            id="positionId"
            value={formData.positionId}
            onChange={handleInputChange}
          />
        </div>
        <div className="block mt-6">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white block w-full font-semibold text-[17px]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddCandidate;
