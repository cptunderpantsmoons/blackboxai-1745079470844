import React, { useState } from 'react';
import { PieChart, BarChart } from 'react-d3-components';

const CarbonDashboard = ({ appStats }) => {
  const [timeframe, setTimeframe] = useState('weekly');

  const energyData = [
    { label: 'JS Processing', value: appStats.energy.js },
    { label: 'Network Transfer', value: appStats.energy.network },
    { label: 'Rendering', value: appStats.energy.rendering }
  ];

  const comparisonData = [
    {
      label: 'Your App',
      values: [
        { x: 'Load Time', y: appStats.metrics.loadTime },
        { x: 'Energy Use', y: appStats.metrics.energy }
      ]
    },
    {
      label: 'Industry Avg',
      values: [
        { x: 'Load Time', y: appStats.benchmarks.loadTime },
        { x: 'Energy Use', y: appStats.benchmarks.energy }
      ]
    }
  ];

  return (
    <div className="dashboard p-4">
      <h2 className="text-2xl font-semibold mb-4 text-ecoGreen-dark">Sustainability Report</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <PieChart
            data={energyData}
            width={300}
            height={300}
            margin={{ top: 10, bottom: 10, left: 100, right: 100 }}
          />
        </div>
        <div>
          <BarChart
            data={comparisonData}
            width={400}
            height={300}
            margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CarbonDashboard;
