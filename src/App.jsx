import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        You clicked count to see <span>{count}</span> number.
      </p>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
};

export default App;
