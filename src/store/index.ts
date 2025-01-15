import { create } from 'zustand'

const INITIAL_TASK = {
  id: 0,
  title: '',
} as const

type EditedTask = {
  id: number
  title: string
}

type State = {
  editedTask: EditedTask
  updateEditedTask: (payload: EditedTask) => void
  resetEditedTask: () => void
}

const useStore = create<State>((set) => ({
  editedTask: INITIAL_TASK,
  updateEditedTask: (payload) =>
    set({
      editedTask: payload,
    }),
  resetEditedTask: () => set({ editedTask: INITIAL_TASK }),
}))

export default useStore
