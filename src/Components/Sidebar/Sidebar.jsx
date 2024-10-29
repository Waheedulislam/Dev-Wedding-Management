const Sidebar = ({ selectedItems, totalCost, remainingBudget, onRemoveItem }) => {
  return (
    <div className="bg-teal-100 p-2 rounded-lg shadow-md w-full ">
      <h3 className="text-xl font-bold text-teal-700 mb-4">Your Platter</h3>
      <ul className="space-y-2">
        {selectedItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span className="text-lg">{item.name}</span>
            <span className="text-teal-700 font-semibold">Tk {item.price}</span>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="ml-4 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-lg">
        <p>
          Total Cost: <span className="font-semibold">Tk {totalCost}</span>
        </p>
        <p>
          Remaining Budget:{" "}
          <span
            className={`font-semibold ${remainingBudget < 0 ? "text-red-500" : "text-teal-700"}`}
          >
            Tk {remainingBudget}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
