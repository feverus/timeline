import { addZero } from '~/utils'
import { NavButtonsProps } from './navButtons.types'
import navArrow from '~/assets/navArrow.svg'
import styles from './navButtons.module.scss'

export const NavButtons = ({ selectedIndex, selectedCount, reduce, increase }: NavButtonsProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.status}>{`${addZero(selectedIndex + 1)}/${addZero(selectedCount)}`}</div>
            <div className={styles.buttons}>
                <button onClick={reduce} disabled={!reduce}>
                    <img src={navArrow} alt="<" />
                </button>
                <button onClick={increase} disabled={!increase}>
                    <img src={navArrow} alt=">" />
                </button>
            </div>
        </div>
    )
}
