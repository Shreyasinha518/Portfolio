// import "react-crud-icons/dist/react-crud-icons.css";

import { useGSAP } from "@gsap/react";
import { usePortalStore, useThemeStore } from "@stores";
import gsap from "gsap";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";

const ThemeSwitcher = () => {
  const themeSwitcherRef = useRef<HTMLDivElement>(null);
  const { nextTheme, theme } = useThemeStore();
  const isActive = usePortalStore((state) => state.activePortalId);
  const [positionClass, setPositionClass] = useState<string>('');
  const toggleTheme = () => nextTheme();

  useGSAP(() => {
    gsap.to(themeSwitcherRef.current, {
      opacity: isActive ? 0 : 1,
      duration: 1,
      delay: isActive ? 0 : 1,
    });
  }, [isActive]);

  useEffect(() => {
    setPositionClass(isMobile ? 'top-2 right-2' : 'top-6 right-6');
  }, [isMobile]);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')

    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme.color);
    }
  }, [theme.color]);

  return (
    <div className={`fixed ${positionClass}`} ref={themeSwitcherRef} style={{ opacity: 0, zIndex: 2 }}>
      <button
        className="theme-switcher"
        type="button"
        onClick={toggleTheme}
        aria-label="Change background theme"
        title="Change background theme"
      >
        <Image src="icons/night-mode.svg" width={19} height={19} alt="" aria-hidden="true" priority />
      </button>
    </div>
  );
};

export default ThemeSwitcher;