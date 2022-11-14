import Image from 'next/image';
import Image1Src from './images/image1.webp';
import Image2Src from './images/image2.webp';
import Image3Src from './images/image3.webp';
import Image4Src from './images/image4.webp';

const FoodCategory = () => {
  return (
    <div className="bg-black-1">
      <div className="section-content py-14 flex flex-col justify-start items-center px-4 box-content">
        <h2 className="font-fancy text-primary text-3xl mb-2">
          Food Category{' '}
        </h2>
        <h3 className="font-bold text-5xl text-white mb-14">
          <span className="text-primary">Ch</span>oose food item
        </h3>

        <div className="grid grid-rows-2 grid-cols-2 gap-4 lg:grid-rows-none lg:grid-cols-none lg:grid-flow-col lg:auto-cols-fr lg:gap-x-8">
          <Image
            src={Image1Src}
            className="object-cover object-center rounded-md overflow-hidden hover:scale-105 hover:shadow-light transition-all duration-700"
            alt="prato de comida"
          />
          <Image
            src={Image2Src}
            className="object-cover object-center rounded-md overflow-hidden hover:scale-105 hover:shadow-light transition-all duration-700"
            alt="prato de comida"
          />
          <Image
            src={Image3Src}
            className="object-cover object-center rounded-md overflow-hidden hover:scale-105 hover:shadow-light transition-all duration-700"
            alt="prato de comida"
          />
          <Image
            src={Image4Src}
            className="object-cover object-center rounded-md overflow-hidden hover:scale-105 hover:shadow-light transition-all duration-700"
            alt="prato de comida"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
