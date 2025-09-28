import { useState, useEffect, useRef } from 'react'

type UseTransitionProps<T> = {
    data: T
    duration?: number
}

/**
 * Хук добавления анимации исчезновения компонента при изменении данных
 */
export const useTransition = <T>({ data, duration = 500 }: UseTransitionProps<T>) => {
    const [currentData, setCurrentData] = useState<T>(data)
    const [isVisible, setIsVisible] = useState(true)
    const previousData = useRef<T>(data)
    const timeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        if (data === previousData.current) {
            return
        }

        timeoutRef.current && clearTimeout(timeoutRef.current)
        setIsVisible(false)
        timeoutRef.current = setTimeout(() => {
            setCurrentData(data)
            previousData.current = data
            setIsVisible(true)
        }, duration)

        return () => {
            timeoutRef.current && clearTimeout(timeoutRef.current)
        }
    }, [data, duration])

    const transitionStyle = {
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
    }

    return {
        currentData,
        transitionStyle,
    }
}
