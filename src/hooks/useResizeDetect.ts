import { useCallback, useEffect, useState } from 'react'

/**
 * Отслеживает изменение размеров окна и при прохождении границы в breakpoint меняет флаг isMobile
 */
export const useResizeDetect = (breakpoint: number) => {
    const [isMobile, setIsMobile] = useState(document.body.clientWidth < breakpoint)

    const checkBodySize = useCallback(() => {
        setIsMobile(document.body.clientWidth < breakpoint)
    }, [breakpoint])

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => checkBodySize())
        resizeObserver.observe(document.body)
        return () => {
            resizeObserver.unobserve(document.body)
        }
    }, [checkBodySize])

    return { isMobile }
}
