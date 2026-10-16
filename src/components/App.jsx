import React from "react";
import { useState } from "react";
function App() {
const [count,setcount]= useState(0);
  function handleClick() {
    setcount(count +1);
  }
   function handleClickDecrease() {
    setcount(count +1);
  }
return(
    <div>
      <h1>{count}</h1>
      <button onClick={han