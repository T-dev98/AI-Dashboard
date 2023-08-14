import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MetricsDisplay from './Component/MetricsDisplay';
import ChartDisplay from './Component/ChartDisplay';
import AIControls from './Component/AIControls';


function App() {
  const [metrics, setMetrics] = useState({});
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch metrics data from API
    axios.get('/api/metrics')
      .then(response => {
        setMetrics(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching metrics:', error);
        setIsLoading(false);
      });

    // Fetch predictions data from API
    axios.get('/api/predictions')
      .then(response => {
        setPredictions(response.data);
      })
      .catch(error => {
        console.error('Error fetching predictions:', error);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">AI Product Dashboard</h1>
      <MetricsDisplay metrics={metrics} isLoading={isLoading} />
      <ChartDisplay predictions={predictions} />
      <AIControls />
    </div>
  );
}

export default App;
