import React, { useState } from 'react';
import './App.css'
const ZakatCalculator = () => {
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [cash, setCash] = useState(0);
  const [investments, setInvestments] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [zakat, setZakat] = useState(0);

  const calculateZakat = () => {
    const totalWealth = gold + silver + cash + investments;

    // Gold: No zakat if less than 87.48 grams
    const goldZakatable = gold >= 87.48 ? gold : 0;

    // Silver: No zakat if less than 612.36 grams
    const silverZakatable = silver >= 612.36 ? silver : 0;

    // Cash: No zakat if less than Nisaab (612.36 grams of silver)
    const cashZakatable = totalWealth >= 612.36 ? cash : 0;

    // Investments: Zakat is due on the market value of the investments
    const investmentsZakatable = investments;

    const zakatableAmount = goldZakatable + silverZakatable + cashZakatable + investmentsZakatable;
    const zakatAmount = zakatableAmount * 0.025; // Zakat rate is 2.5%

    setTotalAssets(totalWealth);
    setZakat(zakatAmount);
  };
return (
  <div className='container mt-4'>
  <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Zakat Calculator</h1>
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Gold (grams):
        <input type="number" value={gold} onChange={(e) => setGold(parseFloat(e.target.value))} style={{ marginLeft: '10px' }} />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Silver (grams):
        <input type="number" value={silver} onChange={(e) => setSilver(parseFloat(e.target.value))} style={{ marginLeft: '10px' }} />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Cash (USD):
        <input type="number" value={cash} onChange={(e) => setCash(parseFloat(e.target.value))} style={{ marginLeft: '10px' }} />
      </label>
      <br />
      <label style={{ display: 'block', marginBottom: '10px' }}>
        Investments (USD):
        <input type="number" value={investments} onChange={(e) => setInvestments(parseFloat(e.target.value))} style={{ marginLeft: '10px' }} />
      </label>
      <br />
      <button className="btn btn-primary" onClick={calculateZakat}>Calculate Zakat</button>
 
      <br />
      <p style={{ marginTop: '20px' }}>Total Assets: ${totalAssets.toFixed(2)}</p>
      <p className='zaka'>Zakat: ${zakat.toFixed(2)}</p>
    </div>
    </div>
  );
};
export default ZakatCalculator;
