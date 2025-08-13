import React, { useContext } from 'react';
import { SharedStateContext } from './SharedStateContext';

const Component2 = () => {
  const { secondValue } = useContext(SharedStateContext);

  console.log('Component2 rendered');
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>Component 2 (Reader)</h2>
      <p>Current Value: {secondValue}</p>
    </div>
  );
};

function isRender(prev, next) {
   if(prev?.secondValue !== next?.secondValue) {
      return false
   }
   return true
}

export default React.memo(Component2, isRender);
