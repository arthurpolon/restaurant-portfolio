import Image from 'next/image';
import { BurgerIcon } from './images/burger-icon';
import { CookieIcon } from './images/cookie-icon';
import { DrinkIcon } from './images/drink-icon';
import Image1Src from './images/image1.png';
import Image2Src from './images/image2.png';
import Image3Src from './images/image3.png';
import Image4Src from './images/image4.png';
import Image5Src from './images/image5.png';
import Image6Src from './images/image6.png';

const WhyChooseUs = () => {
  return (
    <div className="bg-black-1">
      <div className="section-content py-14 px-4 flex flex-col-reverse gap-10 justify-between md:flex-row">
        <div className="flex flex-col gap-5 max-w-md">
          <div className="flex gap-4">
            <div className="relative">
              <Image src={Image1Src} alt="prato de comida" />
            </div>
            <div className="relative flex items-end">
              <Image src={Image2Src} alt="prato de comida" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Image src={Image3Src} alt="prato de comida" />
            </div>
            <div className="relative flex items-start">
              <Image src={Image4Src} alt="prato de comida" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Image src={Image5Src} alt="prato de comida" />
              </div>
              <div className="relative">
                <Image src={Image6Src} alt="prato de comida" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-fancy text-primary text-3xl mb-2">
            Why Choose Us{' '}
          </h2>
          <h3 className="font-bold text-4xl text-white mb-8">
            <span className="text-primary">Ex</span>traordinary taste
            <br /> And Experienced
          </h3>
          <p className="text-base text-white max-w-lg mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div className="flex justify-between mb-6 min-w-[248px] max-w-xs xxs:min-w-[288px]">
            <div className="flex flex-col gap-3">
              <BurgerIcon className="w-20 h-20" />
              <p className="text-base text-white text-center">Fast Food</p>
            </div>
            <div className="flex flex-col gap-3">
              <CookieIcon className="w-20 h-20" />
              <p className="text-base text-white text-center">Lunch</p>
            </div>
            <div className="flex flex-col gap-3">
              <DrinkIcon className="w-20 h-20" />
              <p className="text-base text-white text-center">Dinner</p>
            </div>
          </div>
          <div className="bg-white border-l-8 rounded border-primary flex items-center justify-around p-3 min-w-[248px] max-w-xs xxs:min-w-[288px]">
            <h3 className="text-primary font-bold text-4xl">30+</h3>
            <p className="text-base">
              Years of <br /> <strong>Experience</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
