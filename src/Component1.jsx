import React, { useContext } from 'react';
import { SharedStateContext } from './SharedStateContext';

const Component1 = () => {
  const { sharedValue, setSharedValue } = useContext(SharedStateContext);

  const handleUpdate = () => {
    setSharedValue('Updated at ' + new Date().toLocaleTimeString());
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h2>Component 1 (Updater)</h2>
      <p>Current Value: {sharedValue}</p>
      <button onClick={handleUpdate}>Update Value</button>
    </div>
  );
};

export default Component1;
