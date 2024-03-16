import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { CategoryScale } from 'chart.js'; // Import the CategoryScale

Chart.register(...registerables);
Chart.register(CategoryScale); 
const Attendance = () => {
  const labels = ['January', 'February', 'March', 'April', 'May'];
  const data = [95, 88, 80, 78, 90];

  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.3,
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        data,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month',
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value',
          },
        },
      ],
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Attendance;
