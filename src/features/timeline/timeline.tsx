import { useEffect, useMemo, useState } from 'react'

import { Loader } from '../components'
import { Title } from './title'
import { Dates } from './dates'
import { NavButtons } from './navButtons'
import { AnimateCircle } from './animateCircle'
import { TimelineProps } from './timeline.types'
import { Сarousel } from './carousel'
import { useResizeDetect } from '~/hooks'
import styles from './timeline.module.scss'

export const Timeline = ({ timelineData }: TimelineProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const selectedCount = useMemo(() => timelineData.length, [timelineData.length])
    const { data } = selectedIndex < selectedCount ? timelineData[selectedIndex] : { data: [] }
    const increase = selectedIndex < selectedCount - 1 ? () => setSelectedIndex(selectedIndex + 1) : undefined
    const reduce = selectedIndex > 0 ? () => setSelectedIndex(selectedIndex - 1) : undefined
    const { isMobile } = useResizeDetect(1280)

    useEffect(() => {
        setSelectedIndex(0)
    }, [timelineData])

    if (!data.length) {
        return <Loader />
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.verticalLine}></div>
            <div className={styles.horizontalLine}></div>
            <Title />
            {!isMobile && (
                <AnimateCircle
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    buttons={timelineData.map(({ name }) => name)}
                />
            )}
            <Dates begin={data[0].year} end={data[data.length - 1].year} />
            <NavButtons selectedIndex={selectedIndex} selectedCount={selectedCount} increase={increase} reduce={reduce} />
            <Сarousel data={data} />
        </div>
    )
}
