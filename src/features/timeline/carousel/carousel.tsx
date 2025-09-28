import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useResizeDetect, useTransition } from '~/hooks'
import { SwiperNavigation } from './swiperNavigation'
import { Slide } from './swiperSlide'
import { СarouselProps } from './carousel.types'
import styles from './carousel.module.scss'

export const Сarousel = ({ data }: СarouselProps) => {
    const { currentData, transitionStyle } = useTransition({ data })
    const { isMobile } = useResizeDetect(1280)
    const modules = isMobile ? [Navigation, Pagination] : [Navigation]

    return (
        <>
            <Swiper
                className={styles.wrapper}
                spaceBetween={isMobile ? 25 : 50}
                slidesPerView={isMobile ? 1.4 : 3}
                modules={modules}
                style={transitionStyle}
                pagination={{
                    dynamicBullets: true,
                }}
            >
                {currentData.map(({ id, year, description }) => (
                    <SwiperSlide key={id}>
                        <Slide year={year} description={description} />
                    </SwiperSlide>
                ))}
                {!isMobile && <SwiperNavigation key={currentData.length} />}
            </Swiper>
        </>
    )
}
