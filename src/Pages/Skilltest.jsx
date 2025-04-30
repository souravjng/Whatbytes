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
    <div className='h-full overflow-auto'>
      <h1 className="text-lg font-normal text-gray-500 mb-6">Skill Test</h1>
      <div className="flex flex-row flex-1 gap-4 h-full">
        <div className="basis-[65%]">
          <StatsCard onUpdateClick={handleUpdateClick} />
          <QuickStatistics
            rank={stats.rank}
            percentile={stats.percentile}
            score={stats.score}
          />
          <ComparisonGraph percentile={stats.percentile} />
        </div>

        <div className="basis-[35%]">
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
