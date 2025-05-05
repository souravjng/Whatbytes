import { useState } from 'react';
import { FaEnvelope, FaStar, FaTrashAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Messagebox = ({ id, sender, subject, content, time, starred: initialStarred }) => {
  const [starred, setStarred] = useState(initialStarred);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-4 rounded-xl bg-white hover:bg-gray-50 shadow-sm flex justify-between items-start transition"
    >
      {/* Left: Envelope + Info */}
      <div className="flex items-start gap-4">
        <FaEnvelope className="text-blue-500 w-5 h-5 mt-1 shrink-0" />
        <div>
          <div className="flex gap-2 items-center text-gray-800">
            <h4 className="font-semibold text-base">{sender}</h4>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
          <div className="text-sm text-gray-700 mt-1 font-medium">{subject}</div>
          <p className="text-sm text-gray-500 mt-0.5 line-clamp-2">{content}</p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex flex-col items-center gap-3 mt-1 text-gray-400">
        <button
          aria-label="Star"
          onClick={() => setStarred(!starred)}
          className={`transition-colors ${starred ? 'text-yellow-400' : 'hover:text-yellow-400'}`}
        >
          <FaStar className="w-4 h-4" />
        </button>
        <button aria-label="Delete" className="hover:text-red-500 transition-colors">
          <FaTrashAlt className="w-4 h-4" />
        </button>
      </div>
    </motion.li>
  );
};

export default Messagebox;
