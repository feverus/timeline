import { useSwiper } from 'swiper/react'
import { useCallback, useEffect, useState } from 'react'

import swiperArrow from '~/assets/swiperArrow.svg'
import styles from './swiperNavigation.module.scss'

export const SwiperNavigation = () => {
    const swiper = useSwiper()
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning)
    const [isEnd, setIsEnd] = useState(swiper.isEnd)

    const updateState = useCallback(() => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }, [swiper])

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
    }, [swiper, updateState])

    return (
        <>
            <div className={styles.left}>
                <button disabled={isBeginning} onClick={() => swiper.slidePrev()}>
                    <img src={swiperArrow} alt="<" />
                </button>
            </div>
            <div className={styles.right}>
                <button disabled={isEnd} onClick={() => swiper.slideNext()}>
                    <img src={swiperArrow} alt=">" />
                </button>
            </div>
        </>
    )
}
