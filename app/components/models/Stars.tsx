
import { useThemeStore } from "@/app/stores";
import { Stars } from "@react-three/drei";

const StarsContainer = () => {
  const isDarkTheme = useThemeStore((state) => state.theme.type === 'dark');

  if (!isDarkTheme) return null;

  return (
    <Stars radius={200} depth={100} count={2200} factor={3} saturation={0} fade={true} speed={0.2} />
  );
};

export default StarsContainer;