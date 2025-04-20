// app/component/HouseParentCard.tsx
import React from "react";
import Link from "next/link";

interface HouseParentProps {
  id: string;
  name: string;
  location: string;
  imageUrl?: string;
}

const HouseParentCard: React.FC<HouseParentProps> = ({
  id,
  name,
  location,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center p-1">
      <div className="w-36 h-36 mb-2 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
        <img
          src={imageUrl || "/detail-image.png"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <Link href={`/houseParent/${id}`}>
        <h3 className="font-medium text-center text-base mb-1">{name}</h3>
      </Link>

      <div className="flex items-center">
        <span className="text-sm">Location: </span>
        <span className="text-sm text-green-600 ml-1">{location}</span>
      </div>
    </div>
  );
};

export default HouseParentCard;
