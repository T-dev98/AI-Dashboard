import React, { useState } from 'react';

function AIControls() {
  const [isRunning, setIsRunning] = useState(false);
  const [configuration, setConfiguration] = useState({
    // Default configuration values
    threshold: 0.7,
    mode: 'auto',
  });

  const handleStart = () => {
    setIsRunning(true);
    // Implement logic to start AI model
  };

  const handleStop = () => {
    setIsRunning(false);
    // Implement logic to stop AI model
  };

  const handleThresholdChange = (event) => {
    const newThreshold = parseFloat(event.target.value);
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      threshold: newThreshold,
    }));
  };

  const handleModeChange = (event) => {
    const newMode = event.target.value;
    setConfiguration((prevConfig) => ({
      ...prevConfig,
      mode: newMode,
    }));
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">AI Controls</h2>
      <div className="mb-4">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Start AI
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded ml-2"
        >
          Stop AI
        </button>
      </div>
      <div>
        <label className="block font-semibold mb-1">Threshold:</label>
        <input
          type="number"
          step="0.01"
          value={configuration.threshold}
          onChange={handleThresholdChange}
          className="w-full border border-gray-300 rounded p-1"
        />
      </div>
      <div className="mt-2">
        <label className="block font-semibold mb-1">Mode:</label>
        <select
          value={configuration.mode}
          onChange={handleModeChange}
          className="w-full border border-gray-300 rounded p-1"
        >
          <option value="auto">Auto</option>
          <option value="manual">Manual</option>
        </select>
      </div>
    </div>
  );
}

export default AIControls;
