import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { CategoryScale } from 'chart.js'; // Import the CategoryScale

Chart.register(...registerables);
Chart.register(CategoryScale); // Register the CategoryScale

const SubAttendance = () => {
  const labels = ["CSE3012", "CSD4008", "MAT3008", "ENG1004", "CSE2002", "CSE2001"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Attendance %",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [90, 80, 95, 72, 82, 89,],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: labels,
      },
    },
  };

  return (
    <div className="line-chart">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SubAttendance;
