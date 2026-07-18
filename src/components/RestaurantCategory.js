import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="mb-4 rounded-xl bg-white shadow-md overflow-hidden">
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
      >
        <span className="font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`shrink-0 text-orange-500 text-2xl font-light leading-none transition-transform duration-200 ${
            showItems ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {showItems && (
        <div className="border-t border-gray-100 px-5">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
