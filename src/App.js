import React from 'react';
import './App.css';
// import InputWithDebouce from 'src/dai-5/InputWithDebouce';
// import {ElementAnimate} from "src/dai-4/element_animate";
// import Animation from "src/dai-4/animation";
// import {elementDimension} from "src/dai-4/windowDimension";
// import WindowSelectionChange from "src/dai-4/windowSelectionChange";
import allThemes from 'src/theme/schema.json';
import {Perspecitive} from "src/dai-3/perspecitive";
import {Matrix} from "src/dai-3/matrix";
function App() {
  if(typeof window!=="undefined") {
    window.localStorage.setItem("all-themes", JSON.stringify(allThemes));
  }

  return (
    <div style={{width: "100%"}}>
      {/*<table>*/}
      {/*  <tr>*/}
      {/*    <td><ElementAnimate/></td>*/}
      {/*    <td><Animation/></td>*/}
      {/*  </tr>*/}
      {/*  <tr>*/}
      {/*    <td><div>{JSON.stringify(elementDimension("#animate"))}</div></td>*/}
      {/*    <td><div>{JSON.stringify(elementDimension("#animation"))}</div></td>*/}
      {/*  </tr>*/}
      {/*  <tr><td colSpan={2}><WindowSelectionChange/></td></tr>*/}
      {/*  <tr><td colSpan={2}><WindowSelectionChange/></td></tr>*/}
      {/*  <tr><td colSpan={2}><InputWithDebouce /></td></tr>*/}
      {/*</table>*/}
      {/*<style>{"table, tr, td {border: 1px solid #000}"}</style>*/}
      <Perspecitive/>
      <Matrix/>
    </div>
  );
}

export default App;
