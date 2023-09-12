import Button from 'components/Button/Button';
import Image1Src from './images/image-1.webp';
import Image2Src from './images/image-2.webp';
import Image3Src from './images/image-3.webp';
import { CheckIcon } from './images/check-icon';
import Image from 'next/image';

const Bullets = [
  'Lacus nisi, et ac dapibus sit eu velit in consequat',
  'Quisque diam pellentesque bibendum non dui volutpat fringilla',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

const AboutUs = () => {
  const renderBullets = () =>
    Bullets.map((bullet, idx) => (
      <div key={idx} className="flex gap-2 items-center justify-start">
        <CheckIcon />
        {bullet}
      </div>
    ));

  return (
    <div className="bg-black-1">
      <div className="section-content flex justify-center lg:justify-between py-14 px-4 box-content">
        <div>
          <h2 className="font-fancy text-primary text-3xl mb-2">About Us </h2>
          <h3 className="font-bold text-4xl text-white mb-8">
            <span className="text-primary">We</span> Create the best <br />{' '}
            foody product
          </h3>
          <p className="text-base text-white max-w-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <div className="text-white text-lg flex flex-col gap-6 mb-6">
            {renderBullets()}
          </div>
          <Button>Read More</Button>
        </div>
        <div className="w-1/2 hidden lg:flex flex-col gap-4">
          <Image
            src={Image1Src}
            alt="prato de comida"
            className="object-cover h-1/2 rounded-md overflow-hidden"
          />
          <div className="flex gap-4 h-1/2">
            <div className="relative h-full basis-1/2 rounded-md overflow-hidden">
              <Image
                src={Image2Src}
                alt="prato de comida"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-full basis-1/2 rounded-md overflow-hidden">
              <Image
                src={Image3Src}
                alt="prato de comida"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
