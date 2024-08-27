import React, { useState } from "react";
import { testimonials } from "../components/data";
import Button from "../components/Button";

interface Testimonial {
  img: string;
  name: string;
  text: string;
}

const Testimonials: React.FC = () => {
  const [activeTest, setActiveTest] = useState(0);
  const handleTest = (index: number) => {
    setActiveTest(index);
  };
  return (
    <div className="py-20 flex flex-col items-center gap-24 w-full relative">
      <h2 className="text-blue text-[32px] font-bold">What they've said</h2>
      {/* Desktop Testimonials */}
      <div className="lg:flex hidden px-[128px] items-center gap-20 overflow-x-scroll testimonials w-full">
        {testimonials.map((item: Testimonial) => (
          <div key={item.name} className="flex flex-col items-center gap-5">
            <img src={item.img} alt={item.name} className="w-[100px]" />
            <h3 className="title_text">{item.name}</h3>
            <p className="small_text text-center w-[465px]">"{item.text}"</p>
          </div>
        ))}
      </div>
      {/* Pattern */}
      <svg
        className="lg:flex hidden absolute lg:top-[-260px] lg:left-[-500px]  z-[-1]"
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
      >
        <rect
          width="436"
          height="970"
          x="774"
          y="-62"
          fill="#FFF0EC"
          fill-rule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      {/* Mobile Testimonials */}
      <div className="lg:hidden flex flex-col items-center gap-10 w-full">
        <div className="flex px-[24px] items-center gap-20 overflow-x-hidden testimonials w-full">
          {testimonials.map((item: Testimonial, index: number) => (
            <div
              key={item.name}
              className={`flex-col items-center gap-5 w-full ${
                activeTest === index ? "flex" : "hidden"
              }`}
            >
              <img src={item.img} alt={item.name} className="w-[100px]" />
              <h3 className="title_text">{item.name}</h3>
              <p className="small_text text-center lg:w-[465px] w-full">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="mt-10 flex items-center gap-[6px] justify-center w-full">
          {testimonials.map((_, index: number) => (
            <div
              key={index}
              onClick={() => handleTest(index)}
              className={`cursor-pointer w-[10px] h-[10px] rounded-full ${
                activeTest === index ? "active_btn" : "inactive_btn"
              }`}
            />
          ))}
        </div>
      </div>

      <Button text="Get Started" color="primary" />
    </div>
  );
};

export default Testimonials;
