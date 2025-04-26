// src/pages/PurchaseItems.tsx
import React, { useState } from "react";
import axios from "axios";
import SuccessPopup from "../components/SuccessPopup";

const PurchaseItems: React.FC = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    batchNo: "",
    quantity: "",
    rate: "",
    mrp: "",
    expiryDate: "",
    manufacturingDate: "",
    company: "",
    barcode: ""
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/purchase", formData);
      alert("Item saved successfully!");
      setFormData({
        itemName: "",
        batchNo: "",
        quantity: "",
        rate: "",
        mrp: "",
        expiryDate: "",
        manufacturingDate: "",
        company: "",
        barcode: ""
      });
      setShowPopup(true);
    } catch (error) {
      alert("Error saving item.");
    }
  };

  return (
    <div className="form-container">
      <h2>Purchase Items</h2>
      <form onSubmit={handleSubmit}>
        {["itemName", "batchNo", "quantity", "rate", "mrp", "expiryDate", "manufacturingDate", "company", "barcode"].map(field => (
          <div key={field} className="form-group">
            <label>{field}</label>
            <input type="text" name={field} value={(formData as any)[field]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Save Item</button>
      </form>
      {showPopup && (
        <SuccessPopup
          message="Your data has been saved successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default PurchaseItems;
