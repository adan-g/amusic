import { create } from "zustand";

export const usePlayerStore = create((set) => ({
    isPlaying: false,
    currentMusic: { song: null },
    playList: [],
    playListModified: false,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentMusic: (currentMusic) => set({ currentMusic }),
    setPlayList: (playList) => set({ playList }),
    setPlayListModified: (playListModified) => set({ playListModified }),
    volume: 1,
    setVolume: (volume) => set({ volume }),
    alertMsg: [],
    setAlertMsg: (alertMsg) => set({ alertMsg }), 
}))