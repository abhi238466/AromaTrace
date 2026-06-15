function FeaturedCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeaturedCard;