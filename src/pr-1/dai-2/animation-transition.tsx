import * as React from 'react';
function AnimationTransition() {
  const btcss = `
    .bt {
        width: 100%;
        height: fit-content;
        background: transparent;
        position: relative;
        font-size: 12px;
        padding: 10px;
    }
    .bt:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: #8accf1;
        z-index: -1;
        transition: width .75s ease-in;
    }
    .bt:hover:before {
        width: 100%
    }
    `;

  return (
    <div>
      <button className={'bt'}>button</button>
      <style>{btcss}</style>
    </div>
  );
}

export default AnimationTransition;
