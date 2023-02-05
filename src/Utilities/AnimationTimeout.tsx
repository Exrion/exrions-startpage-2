export function AnimationTimeout(
    index: number,
    baseTime: number = 1200,
    increment: number = 400
) {
    return baseTime + index * increment;
}