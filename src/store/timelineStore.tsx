import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

type TimelineDataItem = {
    id: number
    year: number
    description: string
}

export type TimelineData = {
    id: number
    name: string
    data: TimelineDataItem[]
}[]

type State = {
    timelineData: TimelineData
}

type Action = {
    setTimelineData: (data: TimelineData) => void
}

const initialState: State = {
    timelineData: [],
}

export const useTimeline = create(
    devtools(
        immer<State & Action>((set, get) => ({
            ...initialState,

            setTimelineData: (data) => {
                set((state) => {
                    state.timelineData = data
                })
            },
        })),
    ),
)
