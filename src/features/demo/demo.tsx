import { getTimelineData } from '~/api'
import { useTimeline } from '~/store'
import { DemoProps } from './demo.types'
import styles from './demo.module.scss'

export const Demo = ({ children }: DemoProps) => {
    const update = async () => {
        useTimeline.getState().setTimelineData([])
        const data = await getTimelineData()
        useTimeline.getState().setTimelineData(data)
    }
    return (
        <>
            <button onClick={update} className={styles.updateButton}>
                Обновить
            </button>
            {children}
        </>
    )
}
