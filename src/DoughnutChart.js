import React from "react";
import { Doughnut } from "react-chartjs-2";


export function DoughnutChart() {

  const data = {
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
        hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        pointStyle: 'rectRot',
        width:"10rem"
      }
    ],
    labels: ["Direct", "Referral", "Social"],
  };
  const options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      usePointStyle: true
    },
    legend: {
      display: false,
      position: 'bottom',
      usePointStyle: true
    },
    cutoutPercentage: 80,
    usePointStyle: true
  };

  return (<div style={{height:"20rem"}}><Doughnut data={data} options={options} /></div>);
}
