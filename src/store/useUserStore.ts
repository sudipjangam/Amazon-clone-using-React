import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserProfile, Order, Address } from '../types';

interface UserStore {
  profile: UserProfile;
  orders: Order[];
  updateProfile: (profile: Partial<UserProfile>) => void;
  addOrder: (order: Order) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      profile: {
        username: 'John Doe',
        email: 'john@example.com',
        mobile: '+1234567890',
      },
      orders: [],
      updateProfile: (newProfile) =>
        set((state) => ({
          profile: { ...state.profile, ...newProfile },
        })),
      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),
    }),
    {
      name: 'user-storage',
    }
  )
);