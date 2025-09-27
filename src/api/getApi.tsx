import { sleep, getRandomInteger, shuffleArray } from '~/utils'
import { mock } from '~/api'

/**
 * Имитация получения данных для компонента TimelineData от внешнего сервиса.
 * Добавлена случайная задержка и случайная выборка элементов на верхнем уровне для демонстрации.
 */
export const getTimelineData = async (): Promise<any | string> => {
    //await sleep(getRandomInteger(100, 2000))
    return shuffleArray(mock)
}
