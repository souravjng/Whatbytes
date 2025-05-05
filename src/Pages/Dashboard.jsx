import React, { useState } from 'react';
import StatsCard from '../components/subcomponents/StatsCard';
import QuickStatistics from '../components/subcomponents/Quickstatistics';
import ComparisonGraph from '../components/subcomponents/ComparisonGraph';
import QuestionAnalysis from '../components/subcomponents/QuestionAnalysis';
import Form from '../components/subcomponents/DashboardForm';
import RegionIssuesProgressCard from '../components/subcomponents/RegionIssuesProgressCard';

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [stats, setStats] = useState({rank: 21,percentile: 83,score: 62,unemployment: 99,// ✅ Include this to match Form + RegionIssuesProgressCard
  });

  const handleSave = (updatedStats) => {
    setStats(prev => ({ ...prev, ...updatedStats }));
    setShowForm(false);
  };

  return (
    <div className="h-full overflow-auto px-4 ">
      <div className="flex flex-wrap justify-start w-full max-w-[1220px] gap-4">
        <div className="w-[600px] md:basis-[775px]">
          <StatsCard onUpdateClick={() => setShowForm(true)} />
          <QuickStatistics {...stats} />
          <ComparisonGraph percentile={stats.percentile} />
        </div>

        <div className="w-[400px] md:basis-[390px]">
          <RegionIssuesProgressCard {...stats} />
          <QuestionAnalysis score={stats.score} />
        </div>
      </div>

      {showForm && (
        <Form
          initialValues={stats}
          onCancel={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default Dashboard;
