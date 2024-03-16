import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { CategoryScale } from 'chart.js'; // Import the CategoryScale

Chart.register(...registerables);
Chart.register(CategoryScale); 
const CGPA = () => {
  const labels = ['Fall 2021', 'Winter 2021', 'Fall 2022',  'Winter 2022', 'Summer 2023', 'Fall 2023', 'Intrim 2023','Winter 2023'];
  const data = [7.9, 7.76, 7.91, 7.82, 8.17, 8.39, 8.15 ];

  const chartData = {
    labels,
    datasets: [
      {
        label: '',
        fill: false,
        lineTension: 0.3,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
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

export default CGPA;
