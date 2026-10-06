import React, { useState } from 'react';

const ApiMonitor = () => {
  // Estados para controlar la carga y el mensaje de error
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(null);

  // Función asíncrona que simula la conexión y captura el fallo
  const testApiConnection = async () => {
    setLoading(true);
    setErrorStatus(null);

    try {
      // Forzamos un error llamando a una ruta que no existe a propósito
      const response = await fetch('https://typicode.com');
      
      if (!response.ok) {
        // Si el servidor responde con error (404/500), disparamos el fallo
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      // El bloque catch atrapa la caída del sistema de forma segura
      console.error("Technical logs caught successfully:", error.message);
      setErrorStatus("Error 500 / 404 Detected: Connection failed. System isolated successfully via Catch Block.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#121212', border: '1px solid #00f0ff', padding: '24px', borderRadius: '8px', color: '#fff', marginTop: '20px' }}>
      <h3 style={{ color: '#00f0ff', marginBottom: '12px' }}>Live API Integration & Error Handling Simulator</h3>
      <p style={{ color: '#ccc', fontSize: '14px' }}>
        This module demonstrates advanced technical support capabilities by handling unexpected server crashes gracefully without freezing the UI.
      </p>
      
      <button 
        onClick={testApiConnection}
        disabled={loading}
        style={{ backgroundColor: '#00f0ff', color: '#121212', fontWeight: 'bold', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', marginTop: '15px' }}
      >
        {loading ? 'Connecting...' : 'Test API Connectivity'}
      </button>

      {/* Si hay un error capturado, mostramos el letrero de seguridad en rojo */}
      {errorStatus && (
        <div style={{ backgroundColor: '#ff003322', border: '1px solid #ff0033', padding: '12px', borderRadius: '4px', marginTop: '15px', color: '#ff3344', fontWeight: 'bold', fontSize: '14px' }}>
          ⚠️ {errorStatus}
        </div>
      )}
    </div>
  );
};

export default ApiMonitor;
