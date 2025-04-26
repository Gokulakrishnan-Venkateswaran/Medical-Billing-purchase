// src/pages/AgencyDetails.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessPopup from "../components/SuccessPopup";

interface Agency {
  id: number;
  name: string;
  contactNumber: string;
  email: string;
  address: string;
}

const AgencyDetails: React.FC = () => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [formData, setFormData] = useState<Partial<Agency>>({});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchAgencies();
  }, []);

  const fetchAgencies = async () => {
    const res = await axios.get("http://localhost:8080/api/agencies");
    setAgencies(res.data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/agencies", formData);
    setShowPopup(true);
    setFormData({});
    fetchAgencies();
  };

  return (
    <div className="form-container">
      <h2>Agency Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Agency Name</label>
          <input name="name" value={formData.name || ""} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Contact Number</label>
          <input name="contactNumber" value={formData.contactNumber || ""} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input name="email" value={formData.email || ""} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input name="address" value={formData.address || ""} onChange={handleChange} />
        </div>
        <button type="submit">Add Agency</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Agency Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {agencies.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.contactNumber}</td>
              <td>{a.email}</td>
              <td>{a.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <SuccessPopup
          message="Your data has been saved successfully!"
          onClose={() => setShowPopup(false)}
        />
    </div>
  );
};

export default AgencyDetails;
