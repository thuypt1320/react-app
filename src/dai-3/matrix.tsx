import React from 'react';
import './matrix.css';

export const Matrix = () => {
  return(
    <div className={"container"}>
      <div className={"matrix2d"}/>

      <div className={"matrix3d"}>
        <div className={"face front"}/>
        <div className={"face back"}/>
        <div className={"face left"}/>
        <div className={"face right"}/>
        <div className={"face top"}/>
        <div className={"face bottom"}/>
      </div>
    </div>
  );
};