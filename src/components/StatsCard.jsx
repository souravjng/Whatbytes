import React from "react";

const StatsCard = ({ onUpdateClick }) => {
  const cardData = {
    title: "Hyper Text Markup Language",
    questions: 8,
    duration: "15 mins",
    submittedDate: "5 June 2021",
    imageSrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  };

  return (
    <div className="h-[130px] w-[770px] p-4 rounded-xl border border-gray-300 flex items-center space-x-4 bg-white">
      <img
        src={cardData.imageSrc}
        alt="Logo"
        className="w-12 h-12"
      />
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{cardData.title}</h2>
        <p className="text-sm text-gray-600">
          Questions: {cardData.questions.toString().padStart(2, "0")} | Duration: {cardData.duration} | Submitted on {cardData.submittedDate}
        </p>
      </div>
      <button
        onClick={onUpdateClick}
        className="bg-blue-900 cursor-pointer text-white px-9 py-3 rounded hover:bg-blue-800 transition"
      >
        Update
      </button>
    </div>
  );
};

export default StatsCard;
