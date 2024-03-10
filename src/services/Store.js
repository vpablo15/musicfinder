import { create } from 'zustand'
import { LocalStorage } from './Storage'

const db = LocalStorage.instance

export const useStore = create((set) => {
    return {
        favs: [],
        getAll:async () => {
            const data = await db.getAll()
            set((state) => ({...state,favs:data}))
        },
        addFav: async (fav) => {
            await db.saveFav(fav)
            set((state) => ({ favs: [...state.favs, fav]}))
        },
        removeFav: async (fav) => {
            await db.removeFav(fav)
            set((state) => ({ favs: state.favs.filter(f => f.trackId != fav.trackId) }))
        }
    }
})