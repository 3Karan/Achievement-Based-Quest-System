import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">404</h1>
      <p className="mt-2 text-gray-600">Page not found!</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Go Home</Link>
    </div>
  );
};

export default NotFound;
