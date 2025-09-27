import { useTimeline } from '~/store'
import { Title } from './title'
import { AnimateCircle } from './animateCircle'

import styles from './timeline.module.scss'
import { useMemo, useState } from 'react'

export const TimelineData = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const buttons = useTimeline((state) => state.timelineData.map((item) => item.name))

    return (
        <div className={styles.wrapper}>
            <Title />
            <AnimateCircle selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} buttons={[]} />
            <Dates />
            <NavButtons />
            <Сarousel />
        </div>
    )
}
