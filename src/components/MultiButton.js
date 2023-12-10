import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      {/* Using handleClick function directly */}
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>

      {/* Reusing handleClick function with a loop */}
      {[1, 2, 3].map((number) => (
        <button key={number} onClick={() => handleClick(number)}>
          Button {number}
        </button>
      ))}
    </div>
  );
}

export default MultiButton;
