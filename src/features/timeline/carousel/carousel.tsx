import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { TimelineDataItem } from '~/store'
import { СarouselProps } from './carousel.types'
import styles from './carousel.module.scss'

export const Сarousel = ({ data }: СarouselProps) => {
    const getSlide = ({ year, description }: TimelineDataItem) => (
        <div className={styles.wrapper}>
            <span className={styles.year}>{year}</span>
            <span className={styles.description}>{description}</span>
        </div>
    )
    return (
        <Swiper>
            spaceBetween={50}
            slidesPerView={3}
            {data.map((item) => (
                <SwiperSlide>{getSlide(item)}</SwiperSlide>
            ))}
        </Swiper>
    )
}
