import React from "react";

export function ProjectCards({ title, value, progress }) {
  return (<div className="progress-card">
    <div className="project-title-div">
      <span>{title}</span>
      <span>{value}</span>
    </div>
    {progress}

  </div>);
}
