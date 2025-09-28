import { useSwiper } from 'swiper/react'
import { useEffect, useState } from 'react'

import swiperArrow from '~/assets/swiperArrow.svg'
import styles from './swiperNavigation.module.scss'

export const SwiperNavigation = () => {
    const swiper = useSwiper()
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    const updateState = () => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    useEffect(() => {
        updateState()
        swiper.on('slideChange', updateState)
        swiper.on('reachBeginning', updateState)
        swiper.on('reachEnd', updateState)
        return () => {
            swiper.off('slideChange', updateState)
            swiper.off('reachBeginning', updateState)
            swiper.off('reachEnd', updateState)
        }
    }, [swiper])

    return (
        <>
            <div className={styles.left}>
                <button disabled={isBeginning} onClick={() => swiper.slidePrev()}>
                    <img src={swiperArrow} />
                </button>
            </div>
            <div className={styles.right}>
                <button disabled={isEnd} onClick={() => swiper.slideNext()}>
                    <img src={swiperArrow} />
                </button>
            </div>
        </>
    )
}
