import React from "react";
import { Doughnut } from "react-chartjs-2";


export function DoughnutChart() {

  const data = {
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        radius:123
      }
    ],
    labels: ["Direct", "Referral", "Social"],
  };
  const options = {
    maintainAspectRatio: false,
    cutout:110,
    plugins:{
    legend: {
      display: true,
      position: 'bottom',
    }
  }
  };

  return (<div style={{height:"20rem"}}><Doughnut data={data} options={options} /></div>);
}
