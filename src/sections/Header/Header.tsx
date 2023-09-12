import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BagIcon } from './images/bag-icon';
import { PersonIcon } from './images/person-icon';
import { SearchIcon } from './images/search-icon';

const Links = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Blog', href: '/blog' },
  { label: 'Pages', href: '/pages' },
  { label: 'About', href: '/about' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
];

interface IHeaderProps {
  transparentOnTop?: boolean;
}

const Header = ({ transparentOnTop = true, ...props }: IHeaderProps) => {
  const [isTransparent, setIsTransparent] = useState(transparentOnTop);

  const renderLinks = () =>
    Links.map((link) => (
      <Link href={link.href} key={link.href}>
        <div className="text-lg font-normal text-white hover:text-primary cursor-pointer transition-colors">
          {link.label}
        </div>
      </Link>
    ));

  const scrollCallback = () => {
    setIsTransparent(window.scrollY <= 0);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (transparentOnTop) {
      window.addEventListener('scroll', scrollCallback);
    }

    return () => {
      window.removeEventListener('scroll', scrollCallback);
    };
  }, []);

  return (
    <div
      className={`${
        isTransparent ? 'bg-transparent' : 'bg-black'
      } w-full fixed top-0 right-0 left-0 transition-colors z-50`}
    >
      <div className="section-content py-7 px-4 box-content flex justify-between">
        <Link href="/">
          <div className="text-gray-1 text-3xl font-bold cursor-pointer">
            <span className="text-primary">Food</span>
            <span className="text-white">tuck</span>
          </div>
        </Link>
        <div className="flex gap-8 items-center">{renderLinks()}</div>
        <div className="flex items-center gap-4">
          <button type="button">
            <SearchIcon />
          </button>
          <button type="button">
            <PersonIcon />
          </button>
          <button type="button">
            <BagIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
