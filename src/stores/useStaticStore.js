import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStaticStore = create(
  persist(
    (set) => ({
      data: null,
      setStaticData: (data) => set({ data }),
      removeStaticData: () => set({ data: null }),
      fetchStaticData: async () => {
         set({ data: [] });
      },
    }),
    {
      name: 'staticData',
    }
  )
);
