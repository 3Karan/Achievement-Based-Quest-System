// frontend/src/components/Button.tsx
interface ButtonProps {
    text: string;
    onClick: () => void;
    type?: "button" | "submit";
  }
  
  const Button = ({ text, onClick, type = "button" }: ButtonProps) => {
    return (
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  