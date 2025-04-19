import React from 'react';

const OptimizationTips = ({ tips }) => {
  if (!tips || tips.length === 0) {
    return <p className="text-gray-600">No optimization tips available.</p>;
  }

  return (
    <div className="optimization-tips mt-6">
      <h3 className="text-xl font-semibold mb-3 text-ecoGreen-dark">Optimization Tips</h3>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="p-4 border rounded shadow-sm bg-white">
            <h4 className="font-semibold text-lg">{tip.title}</h4>
            <p className="text-gray-700">{tip.detail}</p>
            <p className="text-sm text-green-600 font-medium mt-1">{tip.impact}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptimizationTips;
