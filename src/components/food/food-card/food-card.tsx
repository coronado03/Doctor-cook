import Image from "next/image";

type FoodCardProps = {
  foodItem: {
    name: string;
    image: string;
    description: string;
  };
};

export const FoodCard = ({ foodItem }: FoodCardProps) => {
  const imageSrc =
    foodItem.image ||
    "https://via.placeholder.com/1024x1024.png?text=Image+Not+Available";

  return (
    <div className="card w-full max-w-xs p-6 bg-grey-800 shadow-gray-100 shadow-lg rounded-lg text-white transition-transform duration-200 transform hover:scale-105">
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={foodItem.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mt-4">{foodItem.name}</h3>
      <p className="text-sm mt-2 text-gray-50">{foodItem.description}</p>
    </div>
  );
};
