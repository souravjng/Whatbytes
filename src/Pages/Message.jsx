import { useState } from 'react';
import Messagebox from '../components/subcomponents/Messagebox';

const mockMessages = [
  {
    id: 1,
    sender: "Admin Support",
    subject: "Welcome to RiseYourVoice",
    content: "Thank you for joining. Here’s how to get started...",
    time: "2h ago",
    starred: true,
  },
  {
    id: 2,
    sender: "Complaint Team",
    subject: "Update on your submission",
    content: "Your complaint #1015 is now under review.",
    time: "4h ago",
    starred: false,
  },
  {
    id: 3,
    sender: "Policy Desk",
    subject: "New civic policy update",
    content: "Please review the changes in local civic policies.",
    time: "Yesterday",
    starred: false,
  },
  {
    id: 4,
    sender: "User Survey",
    subject: "Help us improve",
    content: "Take a short survey to improve your experience.",
    time: "2 days ago",
    starred: true,
  },
  {
    id: 5,
    sender: "System Alert",
    subject: "Scheduled maintenance",
    content: "Our system will be under maintenance tonight.",
    time: "3 days ago",
    starred: false,
  },
];

export default function Messages() {
  const [messages] = useState(mockMessages);

  return (
    <div className="w-screen h-screen bg-gray-100 overflow-y-auto p-6">
      <div className="w-full max-w-6xl  bg-white shadow-md rounded-xl p-4">
        <h2 className="text-2xl font-semibold mb-4">Inbox</h2>
        <ul className="space-y-4">
          {messages.map((msg) => (
            <Messagebox key={msg.id} {...msg} />
          ))}
        </ul>
      </div>
    </div>
  );
}
