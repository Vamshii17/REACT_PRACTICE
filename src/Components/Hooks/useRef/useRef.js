import { useRef, useState } from 'react';

const UseRefCounter = () => {
  const ref = useRef(0);
  const [displayCount, setDisplayCount] = useState(0);

  function handleClick() {
    ref.current += 1;
    setDisplayCount(ref.current);
  }

  return (
    <>
      <h3>You clicked {displayCount} times!</h3>
      <button onClick={handleClick}>
        Click me!
      </button>
    </>
  );
}

export default UseRefCounter;
