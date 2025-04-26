// src/pages/StockItems.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";

interface StockItem {
  id: number;
  itemName: string;
  batchNo: string;
  quantity: number;
  expiryDate: string;
  rate: number;
  mrp: number;
  company: string;
}

const StockItems: React.FC = () => {
  const [items, setItems] = useState<StockItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchStockItems();
  }, []);

  const fetchStockItems = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/stocks");
      setItems(res.data);
    } catch (error) {
      alert("Failed to fetch stock items.");
    }
  };

  const filteredItems = items.filter(item =>
    item.itemName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="form-container">
      <h2>Stock Items</h2>
      <input
        type="text"
        placeholder="Search by item name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-group"
      />

      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Batch No</th>
            <th>Quantity</th>
            <th>Expiry</th>
            <th>Rate</th>
            <th>MRP</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.batchNo}</td>
              <td>{item.quantity}</td>
              <td>{item.expiryDate}</td>
              <td>{item.rate}</td>
              <td>{item.mrp}</td>
              <td>{item.company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockItems;
