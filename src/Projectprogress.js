import React from "react";
import { ProjectCards } from "./ProjectCards";

export function Projectprogress() {
  const projDetails = [
    {
      title: "Server Migration",
      value: "20%",
      progress: <progress value="20" max="100" className="red-progress"> </progress>,
    },
    {
      title: "Sales Tracking",
      value: "40%",
      progress: <progress value="30" max="100" className="warning-progress"> </progress>,
    },
    {
      title: "Customer Database",
      value: "60%",
      progress: <progress value="60" max="100" className="primary-progress"> </progress>,
    },
    {
      title: "Payout Details",
      value: "80%",
      progress: <progress value="80" max="100" className="info-progress"> </progress>,
    },
    {
      title: "Account Setup",
      value: "Complete!",
      progress: <progress value="100" max="100" className="success-progress"> </progress>,
    }
  ];
  return (<div>
    {projDetails.map(({ title, value, progress }) => <ProjectCards title={title} value={value} progress={progress} />)}
  </div>);
}
