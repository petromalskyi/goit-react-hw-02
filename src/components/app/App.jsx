import { useState } from 'react';
import './App.module.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
