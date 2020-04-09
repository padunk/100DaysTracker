import React, { ReactElement, useEffect, useRef } from "react";

import { gsap } from "gsap";

function Loading(): ReactElement {
  let loadingElement: any = useRef(null);

  useEffect(() => {
    let animation = gsap.timeline();
    animation.to(loadingElement, {
      rotate: 1999,
      duration: 2,
      repeat: -1,
      repeatDelay: 0.3,
      ease: "back"
    });
  }, [loadingElement]);
  return (
    <div
      ref={el => (loadingElement = el)}
      className="loading w-16 h-16 mx-auto rounded-full border-double border-8 b-top-pink-500 b-r-white b-bottom-pink-500 b-l-white"
    ></div>
  );
}

export default Loading;
