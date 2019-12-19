import React from "react";

export default function Spinner() {
  return (
    <div className="spinner" style={{marginTop:'0'}}>
      <div className="bounce1 " style={{backgroundColor:'white'}}></div>
      <div className="bounce2 " style={{backgroundColor:'white'}}></div>
      <div className="bounce3  " style={{backgroundColor:'white'}}></div>
    </div>
  );
}
