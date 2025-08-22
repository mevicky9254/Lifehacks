import { useState } from 'react'




function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
    setCount(count => count + 1);
    console.log(count);
    
    
  };

  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }

  };

  return (
    <>
      <h1>this is counter app</h1>
      <h2>count is : {count}</h2>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>

    </>
  )
}

export default App
