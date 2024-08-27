import React from "react";

interface ButtonProps {
  text: string;
  color: string;
}
const Button: React.FC<ButtonProps> = ({ text, color }) => {
  return (
    <div
      className={`${
        color === "primary" ? "bg-primary text-white" : "bg-white text-primary"
      } rounded-full button lg:px-8 px-6 lg:py-4 py-3 text-[14px] select-none cursor-pointer font-bold outline-none shadow_box`}
    >
      {text}
    </div>
  );
};

export default Button;
