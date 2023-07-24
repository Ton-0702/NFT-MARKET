import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

let settingsStore = (set) => ({
  light: false,
  toggleDarkMode: () => {
    set((state) => ({light: !state.light}));
  },
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, {name: 'darkMode'});

export const useSettingsStore = create(settingsStore);
