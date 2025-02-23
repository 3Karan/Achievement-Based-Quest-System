import { useState } from 'react';
import { addQuest } from '../services/questService';

const AddQuest = ({ refresh }: { refresh: () => void }) => {
  const [title, setTitle] = useState('');

  const handleAdd = async () => {
    if (title.trim()) {
      await addQuest(title);
      setTitle('');
      refresh(); // Refresh quest list
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter quest..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Quest</button>
    </div>
  );
};

export default AddQuest;
