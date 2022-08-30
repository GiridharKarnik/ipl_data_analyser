export const bubbleSort = (unsorted: Array<number>): Array<number> => {
    const sorted = unsorted.splice(1);
    const len = sorted.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (sorted[j] > sorted[j + 1]) {
                [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
            }
        }
    }

    return sorted;
}
