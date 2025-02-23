// frontend/src/components/ProfileCard.tsx
import { User } from "../types";

interface ProfileCardProps {
  user: User;
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-blue-500">Points: {user.points}</p>
    </div>
  );
};

export default ProfileCard;
