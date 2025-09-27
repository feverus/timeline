import React, { useState, useEffect, useRef } from 'react'

import { AnimatedIntegerProps } from './animatedInteger.types'

export const AnimatedInteger = ({ value, duration = 1000, maxSteps = 100 }: AnimatedIntegerProps) => {
    console.log("🚀 ~ AnimatedInteger ~ value:", value)
    const [displayValue, setDisplayValue] = useState(value)
    const previousValueRef = useRef(value)
    const animationRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if (value === previousValueRef.current) {
            return
        }

        const difference = value - previousValueRef.current
        // Ограничиваем количество шагов
        const steps = Math.min(difference, maxSteps)
        const stepTime = duration / steps
        const stepValue = Math.abs(difference / steps)
        let currentStep = 0

        previousValueRef.current = value
        // Очищаем предыдущую анимацию
        if (animationRef.current) {
            clearInterval(animationRef.current)
        }
        // Запускаем новую анимацию
        animationRef.current = setInterval(() => {
            currentStep++
            console.log('🚀 ~ AnimatedInteger ~ currentStep:', currentStep)

            if (currentStep <= steps) {
                setDisplayValue((prev) => prev + stepValue)
            } else {
                // Убеждаемся, что установлено точное значение
                setDisplayValue(value)
                animationRef.current && clearInterval(animationRef.current)
                animationRef.current = null
            }
        }, stepTime)

        return () => {
            animationRef.current && clearInterval(animationRef.current)
        }
    }, [value, duration, maxSteps])

    return <span>{displayValue}</span>
}
