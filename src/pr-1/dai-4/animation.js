import React from 'react';

export default function Animation() {
  const style = `
        #animation {
            height: 30px;
            width: 30px;
            background-color: lightpink;
            margin: 10px;
            animation-name: spin;
            animation-duration: 0.5s;
            animation-iteration-count: infinite;
            animation-play-state: paused;
        }
  
        #animation:hover {
            animation-play-state: running;
        }
  
        @keyframes spin {
            0%{
                transform: rotate(0)
            }
            100%{
                transform: rotate(360deg)
            }
        }
    `;

  const handlePlay = () => {
    let animation;
    let animationPlayState;
    let pausedButton;

    if (typeof window !== 'undefined') {
      animation = window.document.getElementById('animation');
      pausedButton = window.document.getElementById('paused-button');
      if (animation) {
        animationPlayState = window.getComputedStyle(animation).animationPlayState;
        if (animationPlayState === 'running') {
          if (pausedButton) pausedButton.innerHTML = 'running';
          animation.style.animationPlayState = 'paused';
        }
        if (animationPlayState === 'paused') {
          if (pausedButton) pausedButton.innerHTML = 'paused';
          animation.style.animationPlayState = 'running';
        }
      }
    }
  };

  return (
    <div>
      <div id={'animation'} />
      <button id={'paused-button'} onClick={handlePlay}>
        play
      </button>
      <style>{style}</style>
    </div>
  );
}
