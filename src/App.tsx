import { useEffect } from 'react'

import { getTimelineData } from '~/api'
import { useTimeline } from '~/store'
import { Demo, Timeline } from '~/features'

export const App = () => {
    const timelineData = useTimeline((state) => state.timelineData)

    const update = async () => {
        const data = await getTimelineData()
        useTimeline.getState().setTimelineData(data)
    }

    useEffect(() => {
        if (!timelineData.length) {
            update()
        }
    }, [timelineData])

    return (
        <Demo>
            <Timeline timelineData={timelineData} />
        </Demo>
    )
}
