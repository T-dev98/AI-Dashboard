import React from 'react';

function MetricsDisplay({ metrics, isLoading }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">Key Performance Metrics</h2>
      {isLoading ? (
        <p>Loading metrics...</p>
      ) : (
        <div>
          <p>Accuracy: {metrics.accuracy}</p>
          <p>Precision: {metrics.precision}</p>
          <p>Recall: {metrics.recall}</p>
          {/* Add more metrics */}
        </div>
      )}
    </div>
  );
}

export default MetricsDisplay;
