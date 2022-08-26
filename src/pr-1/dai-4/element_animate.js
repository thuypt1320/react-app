import React from 'react';
export const ElementAnimate = () => {
  const style = `
    .container{
      width:100%;
      height: 100%;
    }

    #animate {
      height: 50px;
      aspect-ratio: 1/1;
      background-color: lightblue;
    }
  `;

  const spinning = [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }];

  const timing = {
    duration: 250,
    iterations: '1',
  };

  if (typeof window !== 'undefined') {
    const animate = window.document.getElementById('animate');
    const log = window.document.getElementById('log');
    if (log) log.innerHTML = window.getComputedStyle(animate).animationPlayState;
    if (animate) {
      animate.addEventListener('click', function () {
        animate.animate(spinning, timing);
      });
    }
  }

  return (
    <>
      <div className={'container'}>
        <div id={'animate'} />
        <div id={'log'} />
      </div>
      <style>{style}</style>
    </>
  );
};
