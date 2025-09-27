import { addZero } from '~/utils'
import { NavButtonsProps } from './navButtons.types'
import styles from './navButtons.module.scss'

export const NavButtons = ({ selectedIndex, selectedCount, reduce, increase }: NavButtonsProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.status}>{`${addZero(selectedIndex + 1)}/${addZero(selectedCount)}`}</div>
            <div className={styles.buttons}>
                <button onClick={reduce} disabled={!reduce}>
                    {'<'}
                </button>
                <button onClick={increase} disabled={!increase}>
                    {'>'}
                </button>
            </div>
        </div>
    )
}
