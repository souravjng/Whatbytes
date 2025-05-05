import { useState } from "react";

const fields = [
  { key: "rank", label: "Crime" },
  { key: "percentile", label: "Infrastructure Issues" },
  { key: "score", label: "Garbage" },
  { key: "unemployment", label: "Unemployment" },
];

const Form = ({ onCancel, onSave, initialValues = {} }) => {
  const [values, setValues] = useState({
    rank: initialValues.rank ?? 21,
    percentile: initialValues.percentile ?? 83,
    score: initialValues.score ?? 62,
    unemployment: initialValues.unemployment ?? 99,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (key, value) => {
    setValues(prev => ({ ...prev, [key]: Number(value) }));
  };

  const validate = () => {
    const newErrors = {};
    for (const key in values) {
      if (values[key] > 100) newErrors[key] = "Value cannot exceed 100%.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) onSave(values);
  };

  return (
    <div className="w-screen h-full absolute top-0 left-0 z-10 bg-black/80">
      <div className="w-[500px] mx-auto mt-40 bg-white rounded-md shadow-md p-6 space-y-6 relative">
        <h2 className="text-2xl font-bold">Update Scores</h2>

        <div className="space-y-6">
          {fields.map((field, idx) => (
            <div key={field.key}>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <label className="font-semibold">
                  Update your <span className="font-bold">{field.label}</span>
                </label>
                <input
                  type="number"
                  className="ml-auto border border-blue-400 rounded-md px-3 py-1 w-24"
                  value={values[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                />
              </div>
              {errors[field.key] && (
                <p className="text-red-500 text-sm ml-12 mt-1">
                  {errors[field.key]}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={onCancel}
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
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
