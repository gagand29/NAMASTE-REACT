const Shimmer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-64 h-56 m-3 rounded-xl bg-gray-200 animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
