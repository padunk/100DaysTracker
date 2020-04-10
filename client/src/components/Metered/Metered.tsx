import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  progress: number;
}

const Metered = (props: Props) => {
  let meterElement: any = useRef(null);
  useEffect(() => {
    gsap.from(meterElement, {
      width: "100%",
      delay: 2,
      duration: 2,
      ease: "bounce.out"
    });
  });

  return (
    <div className="px-4 h-8 flex flex-wrap items-center">
      <div
        style={{ background: "linear-gradient(to right, #f687b3, chartreuse)" }}
        className="rounded-full w-1/2 border border-gray-600 overflow-hidden h-2 relative"
      >
        <div
          ref={el => (meterElement = el)}
          style={{
            width: `${100 - props.progress}%`
          }}
          className="h-2 bg-purple-100 absolute right-0 top-0"
        />
      </div>
      <span className="text-gray-800 opacity-75 text-sm pl-2">
        {props.progress}/100
      </span>
    </div>
  );
};

export default Metered;
