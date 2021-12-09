import React from "react";


export function Card({ title, value, icon, borderColo }) {

  return (<div className="card-div" style={{
    borderLeft: "5px solid", borderColor: borderColo
  }}>
    <div className="card-details">
      <span className="card-title" style={{
        color: borderColo
      }}>{title}</span>
      <span className="card-value">{value}</span>
    </div>
    {icon}
  </div>);
}
