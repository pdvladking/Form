function validateForm(data) {
  const errors = {};

  if (!/^\d{12}$/.test(data.aadhaar))
    errors.aadhaar = "Aadhaar must be 12 digits";
  if (!data.name?.trim()) errors.name = "Name is required";
  if (!/^\d{10}$/.test(data.mobile)) errors.mobile = "Mobile must be 10 digits";
  if (!data.email?.includes("@")) errors.email = "Invalid email";
  if (!data.businessName?.trim())
    errors.businessName = "Business name required";
  if (!data.pan?.trim()) errors.pan = "PAN is required";
  if (!data.address?.trim()) errors.address = "Address is required";
  if (!data.bankAccount?.trim()) errors.bankAccount = "Bank account required";
  if (!data.ifsc?.trim()) errors.ifsc = "IFSC is required";
  if (!data.commencementDate?.trim()) errors.commencementDate = "Date required";

  return errors;
}

module.exports = { validateForm };
