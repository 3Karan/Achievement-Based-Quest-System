import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Quest App</h1>
      <p className="mt-2">Complete quests and track achievements!</p>
      <div className="mt-4">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</Link>
        <Link to="/register" className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md">Register</Link>
      </div>
    </div>
  );
};

export default Home;
