import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Perform registration (use API)
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-3">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border px-3 py-2 rounded-md" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2 rounded-md" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Register</button>
      </form>
    </div>
  );
};

export default Register;
