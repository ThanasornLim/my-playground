export function getTargetPercentage<T extends unknown>(
    arr: T[],
    percentage: number
) {
    if (
        !Array.isArray(arr) ||
        arr.length === 0 ||
        percentage < 0 ||
        percentage > 100
    ) {
        return null; // Handle invalid inputs gracefully
    }

    const index = Math.floor((percentage / 100) * (arr.length - 1));
    return index;
}
