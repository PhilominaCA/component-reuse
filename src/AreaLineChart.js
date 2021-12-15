import React from "react";
import { Line } from "react-chartjs-2";


export function AreaLineChart() {
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const options = {
    plugins:{
    legend:
    {
      display:false
    }
    },
    scales: {
      y: {
        type: "linear",
        max: 40000,
        min: 0,
        ticks: {
          stepSize: 10000,
          callback: function (value) {
            return "$" + value;
          }
        },
        grid: {
          color: "rgb(210, 211, 214)",
          zeroLineColor: "rgb(210, 211, 214)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        },
        beginAtZero: true
      },
      x: {
        type: "category",
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          callback: function (value) {
            return (value % 2 === 0 ? month[value] : "");
          }
        },
      }
    }
  };

  const data = {
    datasets: [
      {
        data: [
          0,
          10000,
          5000,
          15000,
          10000,
          20000,
          15000,
          25000,
          20000,
          30000,
          25000,
          40000
        ],

        borderColor: "#4e73df",
        backgroundColor: "#4e73df",
        tension: "0.3"
      }
    ]
  };
  return (<div style={{paddingTop:"1rem",paddingBottom:"2rem"}}><Line options={options} data={data} /></div>);
}
