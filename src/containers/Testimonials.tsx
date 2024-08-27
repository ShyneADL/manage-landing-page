import React from "react";
import { testimonials } from "../components/data";
import Button from "../components/Button";

interface Testimonial {
  img: string;
  name: string;
  text: string;
}

const Testimonials: React.FC = () => {
  return (
    <div className="py-20 flex flex-col items-center gap-24">
      <h2 className="text-blue text-[32px] font-bold">What they've said</h2>
      <div className="flex px-[128px] items-center gap-20 overflow-x-scroll testimonials w-full">
        {testimonials.map((item: Testimonial) => (
          <div key={item.name} className="flex flex-col items-center gap-5">
            <img src={item.img} alt={item.name} className="w-[100px]" />
            <h3 className="title_text">{item.name}</h3>
            <p className="small_text text-center w-[465px]">"{item.text}"</p>
          </div>
        ))}
      </div>
      <Button text="Get Started" color="primary" />
    </div>
  );
};

export default Testimonials;
