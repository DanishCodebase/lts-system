import React, { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { URLContext } from "@/context/UrlContext";

const AddClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    company: "",
  });

  const url = useContext(URLContext);

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/"); // If no token, redirect to login
      return;
    }

    e.preventDefault();
    try {
      const response = await axios.post(
        url + "api/v1/client/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Client added successfully:", response.data);
      // Handle success, clear form fields, or show success message
      setFormData({ name: "", phone: "", email: "", address: "", company: "" });
    } catch (error) {
      console.log("Error adding client:", error);
      // Handle error, show error message to user
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl text-center font-semibold mb-6">Add Client</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label
            htmlFor="name"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Client Name
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
            htmlFor="address"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Address
          </Label>
          <Input
            id="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label
            htmlFor="company"
            className="mb-2 font-medium text-[17px] block text-gray-700"
          >
            Company Name
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="block mt-6">
          <Button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white block w-full font-semibold text-[17px]"
          >
            Add Client
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddClient;
