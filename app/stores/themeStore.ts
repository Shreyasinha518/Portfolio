import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Theme {
  type: string;
  color: string;
}

const AvailableThemes: Theme[] = [{
  type: 'dark',
  color: '#111820'
}, {
  type: 'dusk',
  color: '#1c2931'
}];

interface ThemeStore {
  themes: Theme[];
  theme: Theme;
  nextTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      themes: [...AvailableThemes],
      theme: AvailableThemes[0],
      nextTheme: () => {
        const themes = get().themes;
        const activeThemeIndex = themes.findIndex(theme => theme.type === get().theme.type);
        const nextThemeIndex = (activeThemeIndex + 1) % themes.length;
        set(() => ({ theme: themes[nextThemeIndex] }));
      },
    }),
    {
      name: "theme-storage",
      version: 1,
      partialize: (state) => ({ theme: state.theme }),
      migrate: (persistedState: unknown) => {
        if (!persistedState || typeof persistedState !== "object") {
          return { theme: AvailableThemes[0] };
        }

        const savedTheme = (persistedState as { theme?: Theme }).theme;
        const theme = AvailableThemes.find((availableTheme) => availableTheme.type === savedTheme?.type);

        return { theme: theme ?? AvailableThemes[0] };
      },
    }
  )
);