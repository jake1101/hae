'use strict';
import React from "react";
import Service1 from "Content/Service1";
import Service2 from "Content/Service2";
import Service3 from "Content/Service3";

export default function Service0() {
  return(
    <>
      <div className="box_list">
        <Service1 />
        <Service2 />
        <Service3 />
      </div>
    </>
    
  )
}