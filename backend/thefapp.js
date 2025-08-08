import React, { useState } from 'react';
import { checkIMEI } from './api';

export default function App() {
  const [imei, setImei] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = async () => {
    if (!imei) return alert('Enter IMEI');
    const res = await checkIMEI(imei);
    setResult(res);
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Mobile Theft Checker</h1>
      <input
        type="text"
        placeholder="Enter IMEI number"
        value={imei}
        onChange={e => setImei(e.target.value)}
        style={{ padding: 8, width: '100%', marginBottom: 10 }}
      />
      <button onClick={handleCheck} style={{ padding: 10, width: '100%' }}>
        Check IMEI
      </button>
      {result && (
        <div style={{ marginTop: 20, padding: 10, border: '1px solid #ccc' }}>
          <strong>{result.message}</strong>
        </div>
      )}
    </div>
  );
}
