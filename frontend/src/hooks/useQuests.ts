import { useState, useEffect } from "react";
import { getQuests, completeQuest } from "../services/questService";
import axios from "axios";

export const useQuests = () => {
  const [quests, setQuests] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const data = await getQuests();
        setQuests(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data?.message || "Failed to fetch quests");
        } else if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchQuests();
  }, []);

  const complete = async (questId: string) => {
    try {
      await completeQuest(questId);
      setQuests((prev) =>
        prev.map((q) => (q.id === questId ? { ...q, completed: true } : q))
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data?.message || "Failed to complete quest");
      } else if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return { quests, loading, complete };
};
