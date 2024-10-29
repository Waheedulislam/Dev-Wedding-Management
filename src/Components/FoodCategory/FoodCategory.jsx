const FoodCategory = ({ category, items, onAddItem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-2xl font-semibold text-teal-600 mb-4">{category}</h3>
      <ul className="space-y-2 ">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center ">
            <p className="text-lg w-1/3">{item.name}</p>
            <p className="text-teal-700 font-semibold w-1/3">Tk {item.price}</p>
            <button
              onClick={() => onAddItem(item)}
              className="ml-4 bg-teal-500 text-white py-1 px-4 rounded-lg hover:bg-teal-600"
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodCategory;
