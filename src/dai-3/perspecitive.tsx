import React from 'react';
import './perspecitive.css';

export const Perspecitive = () => {
  return (
    <div className={'container'}>
      <div className={'square'}>
        <div className={"face front"}/>
        <div className={"face left"}/>
        <div className={"face top"}/>
      </div>
    </div>
  );
};
