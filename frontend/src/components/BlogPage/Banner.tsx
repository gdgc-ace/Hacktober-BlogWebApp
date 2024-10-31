import React, { useState } from 'react';
import Tooltip from "../Tooltip";

const Banner: React.FC = () => {
  const [tooltipText, setTooltipText] = useState<string>('');
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // Handle mouse enter and leave for specific text parts
  const handleMouseEnter = (text: string) => {
    setTooltipText(text);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <section className="Banner">
      <Tooltip text={tooltipText} showTooltip={showTooltip} />
      <div className="border-2 py-16 w-full flex flex-col justify-center h-auto py-8">
        <h1 className="sm:text-4xl font-['Anton'] text-center font-semibold">
          Explore, Learn & Innovate with GDGC
        </h1>
        <button
          className="bg-[#FEBB00] mx-[45%] mt-8 pt-4 py-4 text-lg rounded-md text-white"
          onMouseEnter={() => handleMouseEnter('connect with us')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="">JOIN COMMUNITY</a>
        </button>
      </div>
    </section>
  );
};

export default Banner;
