import React, { useRef } from "react";
import { infoText } from "../components/data.ts";
import Button from "../components/Button";

interface InfoText {
  id: string;
  title: string;
  text: string;
}

const Info: React.FC = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  return (
    <div className="flex lg:flex-row flex-col items-start lg:justify-between lg:gap-0 gap-10 lg:section__padding py-[70px] px-4">
      <div className="flex flex-col lg:items-start items-center gap-6 lg:w-[50%] w-full">
        <h2 className="text-blue text-[32px] font-bold lg:text-left text-center lg:w-[380px] w-[300px]">
          What's different about Manage?
        </h2>
        <p className="small_text lg:w-[360px] lg:text-left text-center w-[295px]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      {/* Desktop Version */}
      <div className="lg:flex hidden flex-col items-start gap-6 lg:w-[50%] w-full">
        {infoText.map((item: InfoText) => (
          <div key={item.id} className="flex items-start gap-4">
            <Button text={item.id} color="primary" />
            <div className="flex flex-col items-start gap-6">
              <h3 className="title_text">{item.title}</h3>
              <p className="small_text w-[450px]">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile Version */}
      <div className="lg:hidden flex flex-col items-start gap-6 lg:w-[50%] w-full">
        {infoText.map((item: InfoText) => (
          <div key={item.id} className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 relative">
              <Button text={item.id} color="primary" />
              <h3 className="title_text">{item.title}</h3>
              <div className="absolute rounded-full px-8 py-4 bg-paleRed z-[-1] h-full min-w-[375px] overflow-hidden" />
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="small_text lg:w-[450px] w-full">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
