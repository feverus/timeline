import { AnimatedInteger } from './animatedInteger'
import { DatesProps } from './dates.types'
import styles from './dates.module.scss'

export const Dates = ({ begin, end }: DatesProps) => {
    return (
        <div className={styles.wrapper}>
            <AnimatedInteger value={begin} color="#5d5fef" />
            <AnimatedInteger value={end} color="#ef5da8" />
        </div>
    )
}
