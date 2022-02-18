export function randomBetweenRangeAndMultiple(min, max, multiple = 1) {
    return Math.floor(
        Math.random() * (max - min) + min
    ) * multiple
}
