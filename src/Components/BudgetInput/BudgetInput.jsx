import { useState } from "react";

const BudgetInput = ({ onBudgetChange }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const budget = parseInt(input);
    if (!isNaN(budget) && budget > 0) {
      onBudgetChange(budget);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center mb-6">
      <input
        type="number"
        placeholder="Enter budget per head (Tk)"
        className="p-3 border border-teal-500 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-teal-500 text-white font-bold px-4 py-3 rounded-r-lg hover:bg-teal-600"
      >
        Set Budget
      </button>
    </form>
  );
};

export default BudgetInput;
