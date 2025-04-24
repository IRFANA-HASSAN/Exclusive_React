import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const hasColors = product.colors && product.colors.length > 0;
  const [selectedColor, setSelectedColor] = useState(
    hasColors ? product.colors[0].code : null
  );
  // Add state for tracking if the heart is liked
  const [isLiked, setIsLiked] = useState(false);

  const handleColorChange = (colorCode) => {
    setSelectedColor(colorCode);
  };

  // Toggle heart function
  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="">
      <div className="relative group">
        <div className="hover:border rounded hover:shadow-sm text-center bg-gray-100 relative">
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-green-400 text-white px-2 py-1 text-xs rounded">
              NEW
            </span>
          )}
          <Link to={`/product/${product.id}`}><img
            src={product.image}
            alt={product.name}
            className="w-fit h-48 mx-auto object-contain pt-4 px-4 "
          /></Link>
          <button
            className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-sm"
            onClick={toggleHeart}
          >
            {isLiked ? (
              <img src={product.redheart} className="h-6 w-6 text-red-500" />
            ) : (
              <img src={product.heart} className="h-5 w-5" />
            )}
          </button>
          <button className="absolute bottom-40 right-2 p-1 rounded-full bg-white shadow-sm">
            <img src={product.eye} alt="Quick view" className="h-5 w-5" />
          </button>
          <div className="inset-0 hover:bg-black bg-opacity-50 flex justify-center hover:opacity-100 transition-opacity duration-300">
            <button className="w-full text-transparent hover:bg-black hover:text-white py-2 px-4 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      {/* <h6 className="mt-3 text-base  font-medium text-black">{product.name}</h6> */}
      <Link to={`/product/${product.id}`}>
        <h6 className="mt-3 text-base font-medium text-black-600 hover:underline">
          {product.name}
        </h6>
      </Link>
      <div className="text-yellow-400 flex items-center gap-2">
        <p className="text-[#DB4444] font-bold text-base  font-medium">${product.price}</p>
        <div className="flex items-center gap-1">
          {product.stars.map((starImg, index) => (
            <img key={index} src={starImg} alt="star" className="w-4 h-4" />
          ))}
        </div>
        <span className="text-gray-500 text-sm ml-1 font-semibold">({product.reviews})</span>
      </div>
      {hasColors && (
        <div className="flex space-x-2 mt-2">
          {product.colors.map((color) => (
            <button
              key={color.code}
              className={`w-4 h-4 rounded-full ${
                selectedColor === color.code
                  ? "ring-2 ring-offset-2 ring-gray-800"
                  : ""
              }`}
              style={{ backgroundColor: color.code }}
              onClick={() => handleColorChange(color.code)}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;