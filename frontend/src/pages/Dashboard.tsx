import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Quest {
  id: number;
  title: string;
  description: string;
}

const Dashboard = () => {
  const [quests, setQuests] = useState<Quest[]>([]);

  useEffect(() => {
    // Fetch quests from API
    setQuests([
      { id: 1, title: "First Quest", description: "Complete this to earn rewards!" },
      { id: 2, title: "Second Quest", description: "Another challenge awaits!" }
    ]);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <p className="text-gray-600">Your active quests:</p>
      <ul className="mt-4 space-y-3">
        {quests.map((quest) => (
          <li key={quest.id} className="p-4 border rounded-md">
            <Link to={`/quest/${quest.id}`} className="text-blue-500">{quest.title}</Link>
            <p>{quest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
