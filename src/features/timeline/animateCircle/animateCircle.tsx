import { useState, useRef } from 'react'
import cn from 'classnames'

import { AnimateCircleProps } from './animateCircle.types'
import styles from './animateCircle.module.scss'

const CIRCLE_RADIUS = 265
const ANGLE_SHIFT = 20

export const AnimateCircle = ({ buttons, selectedIndex, setSelectedIndex }: AnimateCircleProps) => {
    const [rotation, setRotation] = useState(0)
    const buttonsCount = buttons.length

    const handleButtonClick = (index: number) => {
        if (index === selectedIndex) {
            return
        }

        // Вычисляем угол поворота для перемещения выбранной кнопки наверх
        const angleStep = 360 / buttonsCount
        const currentAngle = selectedIndex * angleStep
        const targetAngle = index * angleStep

        // Вычисляем разницу углов и корректируем для плавного вращения
        let angleDiff = targetAngle - currentAngle

        // Выбираем кратчайший путь вращения
        if (angleDiff > 180) {
            angleDiff -= 360
        }
        if (angleDiff < -180) {
            angleDiff += 360
        }

        setRotation(rotation - angleDiff)
        setSelectedIndex(index)
    }

    // Вычисляем позиции для каждой кнопки
    const getButtonPosition = (index: number, total: number) => {
        const angle = (360 / total) * index + ANGLE_SHIFT
        const radian = (angle * Math.PI) / 180

        return {
            x: CIRCLE_RADIUS * Math.sin(radian),
            y: -CIRCLE_RADIUS * Math.cos(radian),
        }
    }

    return (
        <div
            className={styles.wrapper}
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.5s ease',
            }}
        >
            {buttons.map((text, index) => {
                const position = getButtonPosition(index, buttonsCount)
                console.log(text, index, selectedIndex)
                return (
                    <button
                        key={index}
                        className={cn({ [styles.selected]: index === selectedIndex })}
                        style={{
                            transform: `translate(${position.x}px, ${position.y}px) rotate(${-rotation}deg)`,
                        }}
                        onClick={() => handleButtonClick(index)}
                        disabled={index === selectedIndex}
                    >
                        <div className={styles.circleButton}>{index}</div>
                        <div className={styles.text}>{text}</div>
                    </button>
                )
            })}
        </div>
    )
}
