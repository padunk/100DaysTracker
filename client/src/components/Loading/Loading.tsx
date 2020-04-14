import React, { ReactElement, useEffect, useRef } from "react";

import { gsap } from "gsap";

function Loading(): ReactElement {
  let loadingElement: any = useRef(null);

  useEffect(() => {
    let animation = gsap.timeline();
    animation.to(loadingElement, {
      rotate: 730,
      duration: 1.6,
      repeat: -1,
      repeatDelay: 0.1,
      ease: "power1.out"
    });
  }, [loadingElement]);
  return (
    <div
      ref={el => (loadingElement = el)}
      className="loading w-16 h-16 mx-auto rounded-full border-15 border-loading"
    ></div>
  );
}

export default Loading;
