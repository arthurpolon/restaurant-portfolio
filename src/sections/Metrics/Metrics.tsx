import Image from 'next/image';
import { ChefIcon } from './images/chef-icon';
import { CutleryIcon } from './images/cutlery-icon';
import { FoodsIcon } from './images/foods-icon';
import { PizzaIcon } from './images/pizza-icons';
import BackgroundImageSrc from './images/background-image.webp';

const Cards = [
  { icon: ChefIcon, label: 'Professional Chefs', value: 420 },
  { icon: FoodsIcon, label: 'Items of Food', value: 320 },
  { icon: CutleryIcon, label: 'Years of Experienced', value: '30+' },
  { icon: PizzaIcon, label: 'Happy Customers', value: 420 },
];

const Metrics = () => {
  return (
    <div className="bg-black-1 py-14">
      <div className="py-20 lg:py-28 relative">
        <div className="section-content flex flex-wrap flex-col lg:flex-row justify-between gap-8 z-10 relative px-4 box-content">
          {Cards.map((card, idx) => (
            <div className="flex flex-col justify-start items-center" key={idx}>
              <div className="w-28 mb-6">{card.icon}</div>
              <p className="text-xl font-bold text-white mb-4">{card.label}</p>
              <p className="text-3xl font-bold text-white">{card.value}</p>
            </div>
          ))}
        </div>
        <Image
          src={BackgroundImageSrc}
          alt="Prato de comida"
          fill
          className="z-0 opacity-20 object-cover"
        />
      </div>
    </div>
  );
};

export default Metrics;
