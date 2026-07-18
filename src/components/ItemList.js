import { CDN_URL } from "../utils/constant";

const VegIcon = ({ isVeg }) => (
  <span
    className={`inline-flex items-center justify-center w-4 h-4 border rounded-sm mb-2 ${
      isVeg ? "border-green-600" : "border-red-600"
    }`}
  >
    <span
      className={`w-1.5 h-1.5 rounded-full ${
        isVeg ? "bg-green-600" : "bg-red-600"
      }`}
    ></span>
  </span>
);

const ItemList = ({ items }) => {
  return (
    <ul className="divide-y divide-gray-100">
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId, isVeg } =
          item.card.info;

        return (
          <li key={id} className="flex items-start justify-between gap-4 py-5">
            <div className="flex-1">
              <VegIcon isVeg={isVeg} />
              <h4 className="text-gray-800 font-medium">{name}</h4>
              <p className="text-sm text-gray-700 mt-1">
                ₹{(price || defaultPrice) / 100}
              </p>
              {description && (
                <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                  {description}
                </p>
              )}
            </div>

            {imageId && (
              <div className="relative shrink-0">
                <img
                  src={CDN_URL + imageId}
                  alt={name}
                  className="w-28 h-24 object-cover rounded-lg"
                />
                <button className="absolute left-1/2 -translate-x-1/2 -bottom-2 px-4 py-1 text-xs font-bold text-green-600 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-green-50 transition-colors">
                  ADD
                </button>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
