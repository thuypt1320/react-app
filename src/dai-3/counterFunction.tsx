import * as React from 'react';

function CounterFunction() {
  const css = `
    p::before {
      counter-increment: "list";
      content: "item " counter(list) ":"
    }
  `;
  return (
    <>
      <div style={{ counterReset: 'list' }}>
        <p>a</p>
        <p>a</p>
        <p>a</p>
      </div>
      <style>{css}</style>
    </>
  );
}

export default CounterFunction;
