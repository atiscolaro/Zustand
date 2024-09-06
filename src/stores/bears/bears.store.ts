import { create } from 'zustand'

interface Bear {
  id: number
  name: string
}

interface BearState {
  blackBears: number
  polarBears: number
  pandaBears: number

  bears: Bear[]

  increaseBlackBears: (by: number) => void
  increasePolarBears: (by: number) => void
  increasePandaBears: (by: number) => void

  doNothing: () => void
}

export const useBearsStore = create<BearState>()((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [{id: 1, name: 'Oso #1'}, {id: 2, name: 'Oso #2'}, {id: 3, name: 'Oso #3'}],

  increaseBlackBears: (by: number) => set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) => set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) => set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] }))
}))
