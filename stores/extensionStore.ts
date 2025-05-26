// stores/counterStore.ts
import { create } from "zustand";

interface Extension {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
}

interface ExtensionState {
  extensions: Extension[];
  filter: string;

  fetchExtensions: () => void;
  setActive: (name: string) => void;
  setFilter: (filter: string) => void;
  removeExtension: (name: string) => void;
}

const useExtensionStore = create<ExtensionState>((set) => ({
  extensions: [],
  filter: "All",
  fetchExtensions: async () => {
    try {
      const response = await fetch("/data.json");
      const data: Extension[] = await response.json();
      set({ extensions: data });
    } catch (error) {
      console.log(error);
    }
  },

  setActive: (name: string) =>
    set((state) => {
      const updatedExtension = [...state.extensions];
      const index = updatedExtension.findIndex((ext) => ext.name === name);
      if (index !== -1) {
        updatedExtension[index].isActive = !updatedExtension[index].isActive;
        return { extensions: updatedExtension };
      }
      return state;
    }),

  setFilter: (filter: string) =>
    set((state) => {
      return { filter: filter };
    }),

  removeExtension: (name: string) =>
    set((state) => {
      const updatedExtensions = state.extensions.filter(
        (extension) => extension.name !== name
      );
      return { extensions: updatedExtensions };
    }),
}));

export default useExtensionStore;
