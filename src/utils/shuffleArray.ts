import { getRandomInteger } from './getRandomInteger'

export const shuffleArray = <T>(array: T[]) => {
    if (array.length < 2) {
        return array
    }

    const countToSelect = getRandomInteger(2, array.length)
    const indexes = []
    const result = []
    for (let index = 0; index < countToSelect; index++) {
        indexes.push(index)
    }
    for (let i = 0; i < indexes.length - 1; i++) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indexes[i], indexes[j]] = [indexes[j], indexes[i]]
    }
    for (let index = 0; index < countToSelect; index++) {
        result.push(array[indexes[index]])
    }

    return result
}
