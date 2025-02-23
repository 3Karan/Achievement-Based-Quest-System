// frontend/src/components/QuestCard.tsx
import { Quest } from "../types";

interface QuestCardProps {
  quest: Quest;
}

const QuestCard = ({ quest }: QuestCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{quest.title}</h2>
      <p className="text-gray-600">{quest.description}</p>
      <p className="text-sm text-blue-500">Points: {quest.points}</p>
    </div>
  );
};

export default QuestCard;
