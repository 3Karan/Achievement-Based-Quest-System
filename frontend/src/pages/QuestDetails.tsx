import { useParams } from "react-router-dom";

const QuestDetails = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold">Quest Details</h2>
      <p className="text-gray-600">Details for quest ID: {id}</p>
      {/* Fetch and display detailed quest info here */}
    </div>
  );
};

export default QuestDetails;
