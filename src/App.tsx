import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleMouseUp = () => {
    console.log(`Selected text: ${window.getSelection().toString()}`);
  };
  return (
    <>
      <div onMouseUp={handleMouseUp}>Textasdasddad</div>
    </>
  );
}

export default App;
