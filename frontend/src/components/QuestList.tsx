// frontend/src/components/QuestList.tsx
import QuestCard from "./QuestCard";
import { Quest } from "../types";

interface QuestListProps {
  quests: Quest[];
}

const QuestList = ({ quests }: QuestListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {quests.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </div>
  );
};

export default QuestList;
