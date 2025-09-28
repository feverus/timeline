import titleBorder from '~/assets/titleBorder.svg'
import styles from './title.module.scss'

export const Title = () => {
    return (
        <div className={styles.wrapper}>
            <img src={titleBorder} /> <span>Исторические даты</span>
        </div>
    )
}
