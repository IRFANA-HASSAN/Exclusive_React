import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import { useLocation, Link} from 'react-router-dom';


const ProductGrid = () => {
  const location = useLocation();
  return (
    <>
      <section className="products my-12">
        <section className="wrapper w-[90%] mx-auto max-w-[1200px]">
          <h2 className="text-bLACK-500 my-16">Home<a href="#">   {location.pathname}</a></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductGrid;
