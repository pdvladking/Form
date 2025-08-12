const mongoose = require("mongoose");

const udyamSchema = new mongoose.Schema(
  {
    aadhaar: String,
    name: String,
    mobile: String,
    email: String,
    businessName: String,
    organizationType: String,
    activityType: String,
    commencementDate: String,
    address: String,
    state: String,
    district: String,
    pincode: String,
    pan: String,
    bankAccount: String,
    ifsc: String,
    socialCategory: String,
    employees: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("UdyamSubmission", udyamSchema);
