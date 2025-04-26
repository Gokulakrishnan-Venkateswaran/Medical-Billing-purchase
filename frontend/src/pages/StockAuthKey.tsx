// src/pages/StockAuthKey.tsx
import React, { useState } from "react";
import axios from "axios";

const StockAuthKey: React.FC = () => {
  const [key, setKey] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const generateKey = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/auth/generate");
      setKey(res.data.key);
      setResponseMsg("New key generated successfully.");
    } catch (error) {
      setResponseMsg("Failed to generate key.");
    }
  };

  const verifyKey = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/verify", { key });
      if (res.data.valid) {
        setResponseMsg("Key is valid!");
      } else {
        setResponseMsg("Invalid key!");
      }
    } catch (error) {
      setResponseMsg("Verification failed.");
    }
  };

  return (
    <div className="form-container">
      <h2>Stock Authentication Key</h2>
      <div className="form-group">
        <label>Enter/Generate Key</label>
        <input type="text" value={key} onChange={(e) => setKey(e.target.value)} />
      </div>
      <div className="button-group">
        <button onClick={generateKey}>Generate</button>
        <button onClick={verifyKey}>Authenticate</button>
      </div>
      <p>{responseMsg}</p>
    </div>
  );
};

export default StockAuthKey;
