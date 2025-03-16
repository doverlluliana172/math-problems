import { useState } from 'react';

const add = (a: number, b: number): number => a + b;

function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const sum = add(parseInt(number1), parseInt(number2));
    setSum(sum);
  };

  return (
    <div className="App">
      <h1>Math Problems</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number1">Enter a number: </label>
        <input type="text" id="number1" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        <br />
        <label htmlFor="number2">Enter another number: </label>
        <input type="text" id="number2" value={number2} onChange={(e) => setNumber2(e.target.value)} />
        <br />
        <button type="submit">Calculate Sum</button>
        {sum && (
          <>
            <div>The sum is: {sum}</div>
            <button onClick={() => setSum(null)}>Reset</button>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
