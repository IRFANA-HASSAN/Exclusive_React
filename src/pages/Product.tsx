import  { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import Delivery from '../assets/icons/black-delivery.svg';
import Return from '../assets/icons/black-return.svg';

const Product = () => {
  const location = useLocation();
  const { id } = useParams();
  const product = products.find(item => item.id.toString() === id);

  if (!product) return <div className="p-4">Product not found.</div>;

  // Color selection logic
  const hasColors = product.colors && product.colors.length > 0;
  const [selectedColor, setSelectedColor] = useState(
    hasColors ? product.colors[0].code : null
  );

  const handleColorChange = (colorCode) => {
    setSelectedColor(colorCode);
  };

  return (
    <div className="wrapper w-[90%] mx-auto max-w-[1200px] py-8">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb mb-6">
        <p className="text-gray-600 flex items-center text-sm ">
          Home / Products / <h3 className="text-black ml-1">{product.name}</h3>
        </p>
      </div>

      {/* Product Display Section */}
      <section className="product-display flex flex-col md:flex-row gap-8 mb-12">
        {/* Product Image */}
        <div className="product-image w-full md:w-1/2 bg-[#F5F5F5] p-8 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-w-full  object-contain" />
        </div>

        {/* Product Details */}
        <div className="product-details w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-1.5">{product.name}</h1>

          {/* Ratings */}
          <div className="ratings flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              {product.stars.map((starImg, index) => (
                <img key={index} src={starImg} alt="star" className="w-4 h-4" />
              ))}
            </div>
            <span className="text-gray-500">({product.reviews || 0} reviews)</span>
            <span className="text-green-500 ml-2 border-l-2 h-4 flex justify-center items-center border-black-600 pl-4">{product.stock}</span>
          </div>

          <p className="text-2xl font-normal mb-2">${product.price}</p>
          <p className="text-black mb-3 w-full md:w-9/12 border-b-2 border-black pb-3">
            {product.description ||
              "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive."}
          </p>

          {/* Color Options (Dynamic) */}
          {hasColors && (
            <div className="colors mb-6">
              <p className="font-normal text-xl flex items-center mb-2">Colors:</p>
              <div className="flex items-center gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.code}
                    className={`w-6 h-6 rounded-full border ${
                      selectedColor === color.code
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => handleColorChange(color.code)}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Delivery Info */}
          <div className="delivery-info border border-black rounded-md mb-4 w-full md:w-3/4">
            <div className="flex items-center p-4 border-b border-black">
              <span className="icon mr-3">
                <img src={Delivery} alt="Delivery Icon" className="w-11 h-11" />
              </span>
              <div>
                <p className="font-medium mb-2">Free Delivery</p>
                <p className="text-sm text-gray-500 hover:underline hover:text-black cursor-pointer">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="flex items-center p-4">
              <span className="icon mr-3">
                <img src={Return} alt="Return Icon" className="w-11 h-11" />
              </span>
              <div>
                <p className="font-medium mb-2">Return Delivery</p>
                <p className="text-sm text-gray-500 hover:underline hover:text-black cursor-pointer">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="related-products">
        <div className='flex items-center mb-4'>
          <div className='bg-[#DB4444] md:w-5 md:h-10 rounded w-4 h-8'></div>
          <h6 className='pl-4 md:font-semibold text-base text-[#DB4444]'>Related Items</h6>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...products]
            .filter(p => p.id.toString() !== id) // Exclude current product
            .filter((p, index, self) =>           // Filter out duplicate images
              index === self.findIndex(obj => obj.image === p.image)
            )
            .sort(() => 0.5 - Math.random())      // Shuffle
            .slice(0, 4)                          // Pick 4 unique ones
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </section>


    </div>
  );
};

export default Product;
