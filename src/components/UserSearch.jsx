import React, { useState } from 'react';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const initialUsers = [
    { id: 1, name: 'Alice Smith', email: 'alice@sezzle.com', role: 'Merchant' },
    { id: 2, name: 'Bob Johnson', email: 'bob@gmail.com', role: 'Customer' },
    { id: 3, name: 'Carol White', email: 'carol@sefton.com', role: 'Administrator' },
    { id: 4, name: 'Dave Brown', email: 'dave@outlook.com', role: 'Customer' },
  ];

  // Aplicamos el filtro optimizado en cada renderizado basado en el input
  const filteredUsers = initialUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#121212', border: '1px solid #00f0ff', padding: '20px', borderRadius: '8px', color: '#ffffff', marginTop: '15px' }}>
      <h4 style={{ color: '#00f0ff' }}>🔍 High-Performance CRM User Filter</h4>
      <input 
        type="text" 
        placeholder="Search by name or email..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '20%', padding: '8px', marginTop: '10px', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
      />
      <ul style={{ marginTop: '15px', paddingLeft: '20px' }}>
        {filteredUsers.map(user => (
          <li key={user.id} style={{ marginBottom: '8px', fontSize: '14px' }}>
            <strong>{user.name}</strong> ({user.role}) - <span style={{ color: '#ccc' }}>{user.email}</span>
          </li>
        ))}
        {filteredUsers.length === 0 && <p style={{ color: '#ff3344' }}>No system records match your search criteria.</p>}
      </ul>
    </div>
  );
};

export default UserSearch;
