import {Link} from 'react-router-dom';
import apple from '../assets/icons/apple_logo.png';
import rightarrow from '../assets/icons/rightarrow1.svg';
import hero from '../assets/images/heroimg.jpg';
import categoriesData from "../data/categories.json";
import { Card, CardBody, CardTitle } from 'reactstrap'; // Bootstrap components
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import ServiceHighlights from '../components/ServiceHighlights';


const Home = () => {

  return (
    <>
      <section className="home py-8 md:py-14">
        <section className="wrapper w-[90%] mx-auto max-w-[1200px]">
          {/* hero section */}
          <section className="hero bg-black flex justify-between items-center py-4 px-1 md:px-8 rounded-lg">
            <div className="content flex-1 ml-8">
              <h4 className="flex items-center text-sm text-white font-normal md:mb-8 md:text-base"><img src={apple} alt="apple logo" className="w-7 h-8 mr-1" />iPhone 14 Series</h4>
              <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-2 leading-snug sm:leading-normal md:leading-relaxed lg:leading-[3.9rem]">
                Up to 10%<br />
                off Voucher
              </h1>




              <h6 className='flex items-center mt-4 gap-1 md:mt-8'>
                <a href="#" className="text-white hover:underline text-xs font-medium md:text-base ">Shop Now</a>
                <img src={rightarrow} alt="arrowright" className=''/>
              </h6>
            </div>
            <div className="image max-w-[50%] text-right">
              <img src={hero} alt="iPhone 14" className="w-full h-auto object-contain hidden md:flex" />
            </div>
          </section>
          {/* categories section */}
          <section className="category py-12">
            <div className='mb-4'>
              <div className='flex items-center mb-4'>
                <div className='bg-[#DB4444] md:w-5 md:h-10 rounded w-4 h-8'></div>
                <h6 className='pl-4 md:font-semibold text-base text-[#DB4444]'>Categories</h6>
              </div>
              <h1 className="text-2xl sm:text-4xl text-black font-medium mt-2 leading-snug md:text-4xl mid-text-5xl">Browse By Category</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mid:grid-cols-4 xl5:grid-cols-6 gap-4">
              {categoriesData.map((category) => (
                <Card key={category.id} className="text-center p-4 border-1 border-[#0000004D] rounded-lg shadow-sm hover:shadow-md transition-shadow" >
                  <CardBody>
                    <img src={`${category.icon}`} alt={category.name} className="mx-auto mb-2 w-12 h-12"/>
                    <CardTitle tag="h5" className="text-base text-[#000] font-normal"> {category.name}</CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          </section>
          {/* product section */}
          <section className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.slice(0,8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <hr className='mt-12'/>
            <div className="text-center mt-8">
              <Link to="/Products">
                <button className="bg-[#DB4444] text-white py-3 px-12 text-base font-medium rounded">View All Products</button>
              </Link>
            </div>
          </section>
          {/* ServiceHighlights section */}
          <section className="service">
                <ServiceHighlights/>
          </section>
        </section>
      </section>
    </>
  )
}

export default Home;
