import React from 'react';

const UdyamFields = ({ formData, errors, handleChange }) => {
  if (!formData) return <p className="text-red-500">Form data not loaded</p>;

  const fields = [
    { name: 'aadhaar', label: 'Aadhaar Number', type: 'text' },
    { name: 'name', label: 'Full Name', type: 'text' },
    { name: 'mobile', label: 'Mobile Number', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'businessName', label: 'Business Name', type: 'text' },
    { name: 'organizationType', label: 'Organization Type', type: 'text' },
    { name: 'activityType', label: 'Activity Type', type: 'text' },
    { name: 'commencementDate', label: 'Commencement Date', type: 'date' },
    { name: 'address', label: 'Business Address', type: 'text' },
    { name: 'state', label: 'State', type: 'text' },
    { name: 'district', label: 'District', type: 'text' },
    { name: 'pincode', label: 'Pincode', type: 'text' },
    { name: 'pan', label: 'PAN Number', type: 'text' },
    { name: 'bankAccount', label: 'Bank Account Number', type: 'text' },
    { name: 'ifsc', label: 'IFSC Code', type: 'text' },
    { name: 'socialCategory', label: 'Social Category', type: 'text' },
    { name: 'employees', label: 'Number of Employees', type: 'number' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {fields.map(({ name, label, type }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name} className="text-sm font-medium text-purple-300">
            {label}
          </label>
          <input
            type={type}
            name={name}
            id={name}
            value={formData?.[name] || ''}
            onChange={handleChange}
            className={`mt-1 p-2 rounded-md bg-gray-800 text-white border ${
              errors[name] ? 'border-red-500' : 'border-gray-700'
            }`}
          />
          {errors[name] && (
            <span className="text-red-500 text-xs mt-1">{errors[name]}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default UdyamFields;
