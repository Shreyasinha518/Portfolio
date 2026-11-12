import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

import { usePortalStore, useScrollStore } from "@stores";

export const ScrollHint = () => {
  const [hintText, setHintText] = useState('');
  const [showScrollHint, setShowScrollHint] = useState(false);
  const portal = usePortalStore((state) => state.activePortalId);
  const scrollProgress = useScrollStore((state) => state.scrollProgress);

  useEffect(() => {
    if (!portal) {
      setHintText('SCROLL / SWIPE TO EXPLORE');
      setShowScrollHint(scrollProgress < 1);
    } else if (portal === 'work') {
      setHintText('SCROLL / SWIPE TO READ');
      setShowScrollHint(scrollProgress < 1);
    } else {
      setHintText(isMobile ? 'DRAG TO LOOK AROUND' : 'MOVE TO LOOK AROUND');
      setShowScrollHint(true);
    }
  }, [portal, scrollProgress]);

  useEffect(() => {
    if (showScrollHint) {
      gsap.to('.scroll-hint', {
        opacity: 1,
        duration: 1.5,
        delay: 1.5,
      });
    } else {
      gsap.killTweensOf('.scroll-hint');
      gsap.to('.scroll-hint', {
        opacity: 0,
        duration: 0.5,
      });
    }
  }, [showScrollHint]);

  const isLookingAround = portal === 'projects';
  const svgSrc = isLookingAround ? 'icons/chevrons-left-right.svg' : 'icons/chevrons-up-down.svg';

  return (
    <div className="fixed w-full bottom-5 scroll-hint" style={{ opacity: 0 }} role="status" aria-live="polite" aria-hidden={!showScrollHint}>
      <div className="scroll-hint-content">
        <Image src={svgSrc} width={18} height={18} alt="" aria-hidden="true" />
        <span>{hintText}</span>
      </div>
    </div>
  );
}