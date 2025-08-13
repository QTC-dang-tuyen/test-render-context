import './App.css';
import { SharedStateProvider } from './SharedStateContext';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  return (
    <SharedStateProvider>
      <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
        <h1>React Context Demo</h1>
        <Component1 />
        <Component2 />
      </div>
    </SharedStateProvider>
  );
}

export default App
