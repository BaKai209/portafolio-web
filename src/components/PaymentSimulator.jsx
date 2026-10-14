import React, { useState } from 'react';

const PaymentSimulator = () => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('idle'); // idle, processing, success, declined

  const handlePayment = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) return;
    
    setStatus('processing');
    
    // Simulamos la respuesta de la API en 1.5 segundos
    setTimeout(() => {
      if (Number(amount) > 1000) {
        setStatus('declined'); // Tarjetas de más de $1000 se rechazan por cupo en el simulador
      } else {
        setStatus('success');
      }
    }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#121212', border: '1px solid #00f0ff', padding: '20px', borderRadius: '8px', color: '#fff', marginTop: '15px' }}>
      <h4 style={{ color: '#00f0ff' }}>💸Payment Gateway Simulator</h4>
      <form onSubmit={handlePayment} style={{ marginTop: '10px' }}>
        <input 
          type="number" 
          placeholder="Enter amount (USD)" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
          disabled={status === 'processing'}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #333', marginRight: '10px', backgroundColor: '#222', color: '#fff' }}
        />
        <button type="submit" style={{ backgroundColor: '#00f0ff', color: '#121212', fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          {status === 'processing' ? 'Verifying...' : 'Authorize Charge'}
        </button>
      </form>

      {status === 'success' && <p style={{ color: '#00ff66', marginTop: '10px' }}> Transaction Approved! 4 installments scheduled successfully.</p>}
      {status === 'declined' && <p style={{ color: '#ff3344', marginTop: '10px' }}> Transaction Declined: Insufficient funds or velocity limit reached.</p>}
    </div>
  );
};

export default PaymentSimulator;
