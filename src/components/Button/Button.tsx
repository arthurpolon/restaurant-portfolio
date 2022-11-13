import { ReactNode } from 'react';

interface IButtonProps {
  children: ReactNode;
}

const Button = (props: IButtonProps) => {
  return (
    <div className="group px-14 py-4 bg-primary text-white rounded-full inline-block cursor-pointer hover:scale-105 hover:translate-x-2 transition-all duration-1000 relative">
      <div className="group-hover:scale-110 group-hover:-translate-x-1 transition-all duration-700">
        {props.children}
      </div>
    </div>
  );
};

export default Button;
