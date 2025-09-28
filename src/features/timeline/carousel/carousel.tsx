import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import { useTransition } from '~/hooks'
import { SwiperNavigation } from './swiperNavigation'
import { Slide } from './swiperSlide'
import { СarouselProps } from './carousel.types'
import styles from './carousel.module.scss'

export const Сarousel = ({ data }: СarouselProps) => {
    const { currentData, transitionStyle } = useTransition({ data })
    return (
        <>
            <Swiper className={styles.wrapper} spaceBetween={50} slidesPerView={3} modules={[Navigation]} style={transitionStyle}>
                {currentData.map(({ id, year, description }) => (
                    <SwiperSlide key={id}>
                        <Slide year={year} description={description} />
                    </SwiperSlide>
                ))}
                <SwiperNavigation key={currentData.length} />
            </Swiper>
        </>
    )
}
