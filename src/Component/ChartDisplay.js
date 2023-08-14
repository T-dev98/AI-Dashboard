import React from 'react';
import { Line } from 'react-chartjs-2';


function ChartDisplay({ predictions }) {
  const chartData = {
    labels: predictions.map(prediction => prediction.timestamp),
    datasets: [
      {
        label: 'Predicted Values',
        data: predictions.map(prediction => prediction.predictedValue),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Actual Values',
        data: predictions.map(prediction => prediction.actualValue),
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day', // or another time unit as needed
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">AI Model Predictions vs Actual Results</h2>
      <div className="w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default ChartDisplay;
