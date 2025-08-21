import { HiStar } from "react-icons/hi";

export default function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {Array.from({ length: 5 }, (_, i) => (
          <HiStar
            key={i}
            className={`h-5 w-5 ${
              i < Math.floor(rating)
                ? "text-yellow-400"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
      <span className="text-gray-600 dark:text-gray-400">
        {rating} ({reviews} reviews)
      </span>
    </div>
  );
}
