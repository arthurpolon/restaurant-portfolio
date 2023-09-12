import Button from 'components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import BannerImage from './images/banner-image.webp';
import { FacebookIcon } from './images/facebook-icon';
import { PinterestIcon } from './images/pinterest-icon';
import { TwitterIcon } from './images/twitter-icon';
import BackgroundImageSrc from './images/background-image.webp';

const SocialLinks = [
  { icon: <FacebookIcon />, href: 'https://www.facebook.com/' },
  { icon: <TwitterIcon />, href: 'https://twitter.com/' },
  { icon: <PinterestIcon />, href: 'https://br.pinterest.com/' },
];

const Banner = () => {
  const renderSocialLinks = () =>
    SocialLinks.map((social, idx) => (
      <Link href={social.href} key={social.href} target="_blank">
        <div
          className={`cursor-pointer text-white hover:scale-110 hover:text-primary transition-all duration-300 ${
            idx % 2 === 0 ? 'hover:-rotate-12' : 'hover:rotate-12'
          }`}
        >
          {social.icon}
        </div>
      </Link>
    ));

  return (
    <div className="flex flex-col lg:flex-row items-center xl:items-start justify-center relative gap-16 pt-24 pb-14 lg:pt-48 bg-black-1">
      <div className="flex pl-1 flex-row gap-11 shrink-0 z-10">
        <div className="h-full flex flex-col gap-11 items-center">
          <div className="w-[1px] h-[158px] bg-white"></div>
          <div className="flex flex-col gap-7">{renderSocialLinks()}</div>
          <div className="w-[1px] h-[158px] bg-white"></div>
        </div>

        <div className="pt-24 pb-8">
          <h3 className="font-fancy text-3xl leading-10 text-primary mb-2">
            Its Quick & Amusing!
          </h3>
          <h2 className="leading-[60px] text-6xl font-bold text-white mb-8">
            <span className="text-primary">Th</span>e Art of speed <br /> food
            Quality
          </h2>
          <p className="text-base text-white mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </p>
          <Link href="/menu">
            <Button>See Menu</Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full max-w-4xl aspect-[13/10] hidden lg:block z-10">
        <Image src={BannerImage} fill priority alt="Pratos de comidas" />
      </div>

      <Image
        src={BackgroundImageSrc}
        fill
        alt="Pessoa pegando macarrão com pauzinhos chineses"
        className="z-0 opacity-10 object-cover"
      />
    </div>
  );
};

export default Banner;
