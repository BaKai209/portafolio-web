import React, { useState } from 'react';

const EmergencySwitch = () => {
  const [isSystemDown, setIsSystemDown] = useState(false);

  return (
    <div style={{ backgroundColor: '#121212', border: isSystemDown ? '1px solid #ff3344' : '1px solid #00f0ff', padding: '20px', borderRadius: '8px', color: '#fff', marginTop: '15px', transition: '0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ color: isSystemDown ? '#ff3344' : '#00f0ff' }}>
          {isSystemDown ? '🚨 SYSTEM LOCKDOWN ACTIVE' : '🟢 ALL SYSTEMS OPERATIONAL'}
        </h4>
        <button 
          onClick={() => setIsSystemDown(!isSystemDown)}
          style={{ backgroundColor: isSystemDown ? '#ff3344' : '#00f0ff', color: '#121212', fontWeight: 'bold', padding: '8px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          {isSystemDown ? 'Restore Cluster' : 'Trigger Kill-Switch'}
        </button>
      </div>
      <p style={{ color: '#ccc', fontSize: '13px', marginTop: '10px' }}>
        {isSystemDown 
          ? 'API traffic has been gracefully routed to a static maintenance page. Database mutation locks enabled.' 
          : 'Core infrastructure is processing transactions via active Webhooks. Concurrency metrics standard.'}
      </p>
    </div>
  );
};

export default EmergencySwitch;
