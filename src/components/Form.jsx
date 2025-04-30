import React, { useState } from 'react';

const Form = ({ onCancel, onSave, initialValues = {} }) => {
  const [rank, setRank] = useState(initialValues.rank ?? 1);
  const [percentile, setPercentile] = useState(initialValues.percentile ?? 30);
  const [score, setScore] = useState(initialValues.score ?? 10);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (rank === '' || rank < 1) newErrors.rank = 'Rank is required.';
    if (percentile === '' || percentile < 0) {
      newErrors.percentile = 'Percentile is required.';
    } else if (percentile > 100) {
      newErrors.percentile = 'Percentile cannot exceed 100.';
    }

    if (score === '' || score < 0) {
      newErrors.score = 'Score is required.';
    } else if (score > 15) {
      newErrors.score = 'Score cannot exceed 15.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ rank, percentile, score });
    }
  };

  const inputClass = "ml-auto border border-blue-400 rounded-md px-3 py-1 w-24";

  return (
    <div className="w-screen h-full absolute top-0 left-0 z-10 bg-black/80">
      <div className="w-[500px] mx-auto mt-40 bg-white rounded-md shadow-md p-6 space-y-6 relative">
        <h2 className="text-2xl font-bold">Update scores</h2>

        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">1</div>
              <label className="font-semibold">Update your <span className="font-bold">Rank</span></label>
              <input
                type="number"
                className={inputClass}
                value={rank}
                onChange={(e) => setRank(Number(e.target.value))}
              />
            </div>
            {errors.rank && <p className="text-red-500 text-sm ml-12 mt-1">{errors.rank}</p>}
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">2</div>
              <label className="font-semibold">Update your <span className="font-bold">Percentile</span></label>
              <input
                type="number"
                className={inputClass}
                value={percentile}
                onChange={(e) => setPercentile(Number(e.target.value))}
              />
            </div>
            {errors.percentile && <p className="text-red-500 text-sm ml-12 mt-1">{errors.percentile}</p>}
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">3</div>
              <label className="font-semibold">Update your <span className="font-bold">Current Score</span> (out of 15)</label>
              <input
                type="number"
                className={inputClass}
                value={score}
                onChange={(e) => setScore(Number(e.target.value))}
              />
            </div>
            {errors.score && <p className="text-red-500 text-sm ml-12 mt-1">{errors.score}</p>}
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="cursor-pointer border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 flex items-center"
          >
            Save <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
