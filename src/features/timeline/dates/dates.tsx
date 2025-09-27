import { AnimatedInteger } from '../animatedInteger'
import { DatesProps } from './dates.types'
import styles from './dates.module.scss'

export const Dates = ({ begin, end }: DatesProps) => {
    return (
        <div className={styles.wrapper}>
            <AnimatedInteger value={begin} />
            <AnimatedInteger value={end} />
        </div>
    )
}
