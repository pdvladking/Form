import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UdyamFields from "./UdyamFields";

const UdyamForm = () => {
  const [formData, setFormData] = useState({
    aadhaar: "",
    name: "",
    mobile: "",
    email: "",
    businessName: "",
    organizationType: "",
    activityType: "",
    commencementDate: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    pan: "",
    bankAccount: "",
    ifsc: "",
    socialCategory: "",
    employees: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!/^\d{12}$/.test(formData.aadhaar))
      newErrors.aadhaar = "Aadhaar must be 12 digits";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile must be 10 digits";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (!formData.businessName.trim())
      newErrors.businessName = "Business name required";
    if (!formData.pan.trim()) newErrors.pan = "PAN is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.bankAccount.trim())
      newErrors.bankAccount = "Bank account required";
    if (!formData.ifsc.trim()) newErrors.ifsc = "IFSC is required";
    if (!formData.commencementDate.trim())
      newErrors.commencementDate = "Date required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const res = await axios.post(
          "https://form-47tb.onrender.com/api/forms/submit", 
          formData
        );
        console.log("✅ Submitted:", res.data);
        navigate("/success");
      } catch (err) {
        console.error("❌ Submission error:", err.response?.data);
        setErrors(err.response?.data?.errors || {});
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto space-y-6"
    >
      <h2 className="text-xl font-bold text-purple-400">
        Udyam Registration Form
      </h2>

      <UdyamFields
        formData={formData}
        errors={errors}
        handleChange={handleChange}
      />

      <button
        type="submit"
        className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-md font-semibold transition"
      >
        Submit Registration
      </button>
    </form>
  );
};

export default UdyamForm;