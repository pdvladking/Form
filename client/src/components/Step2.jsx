import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const [formData, setFormData] = useState({
    aadhaar: '',
    name: '',
    mobile: '',
    email: '',
    businessName: '',
    pan: '',
    address: '',
    bankAccount: '',
    ifsc: '',
    commencementDate: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:5000/api/submit',
        formData
      );
      console.log('✅ Submission success:', res.data);
      navigate('/success'); // Redirect to confirmation page
    } catch (err) {
      console.error('❌ Submission error:', err.response?.data);
      setErrors(err.response?.data?.errors || {});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Example field */}
      <input
        type="text"
        name="aadhaar"
        value={formData.aadhaar}
        onChange={handleChange}
        placeholder="Enter Aadhaar"
      />
      {errors.aadhaar && <p className="error">{errors.aadhaar}</p>}

      {/* Repeat for other fields... */}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Step2;
