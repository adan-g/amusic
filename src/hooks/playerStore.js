import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { song: null },
    playList: { playList: null },
    playListModified: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setPlayList: (playList) => set({ playList }),
    setPlayListModified: (playListModified) => set({ playListModified }),
}))