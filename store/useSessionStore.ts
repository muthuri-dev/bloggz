import { create } from "zustand";
import { Session } from "next-auth";

interface ISessionStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

const useSessionStore = create<ISessionStore>((set) => ({
  session: null,
  setSession: (session: Session | null) => set((state) => ({ session })),
}));

export default useSessionStore;
