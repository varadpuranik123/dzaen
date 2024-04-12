"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FollowCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX - 180;
      const y = event.clientY - 450;

      gsap.to(cursor, {
        x,
        y,
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="cursor z-[999]">Follow Cursor</div>;
};

export default FollowCursor;
