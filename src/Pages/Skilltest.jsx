import React, { useState } from 'react';
import StatsCard from '../components/StatsCard';
import AnalysisCard from '../components/AnalysisCard';
import QuickStatistics from '../components/Quickstatistics';
import ComparisonGraph from '../components/ComparisonGraph';
import QuestionAnalysis from '../components/QuestionAnalysis';
import Form from '../components/Form';

const Skilltest = () => {
  const [showForm, setShowForm] = useState(false);

  const [stats, setStats] = useState({
    rank: 1,
    percentile: 30,
    score: 10,
  });

  const handleUpdateClick = () => {
    setShowForm(true);
  };

  const handleSave = (newStats) => {
    setStats(newStats);
    setShowForm(false);
  };

  return (
    <div className="h-full overflow-auto px-4">
      <h1 className="text-lg font-normal text-gray-500 mb-6">Skill Test</h1>
      
      <div className="flex flex-wrap justify-start w-full max-w-[1220px] gap-4 ml-0">
        <div className="w-[600px] md:basis-[775px] ">
          <StatsCard onUpdateClick={handleUpdateClick} />
          <QuickStatistics
            rank={stats.rank}
            percentile={stats.percentile}
            score={stats.score}
          />
          <ComparisonGraph percentile={stats.percentile} />
        </div>
        <div className="w-[400px] md:basis-[390px] ">
          <AnalysisCard />
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

export default Skilltest;
