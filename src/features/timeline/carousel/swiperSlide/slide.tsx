
import { SlideProps } from './slide.types'
import styles from './slide.module.scss'

export const Slide = ({ year, description }: SlideProps) => (
    <div className={styles.wrapper}>
        <span className={styles.year}>{year}</span>
        <span className={styles.description}>{description}</span>
    </div>
)
