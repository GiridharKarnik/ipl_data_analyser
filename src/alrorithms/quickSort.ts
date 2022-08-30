const partition = (array: Array<number>, left: number = 0, right: number = array.length - 1): number => {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }

        while (array[j] > pivot) {
            j--;
        }

        if (i <= j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return i;
}

export const quickSort = (array: Array<number>, left: number = 0, right: number = array.length - 1) => {
    let index;

    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }

        if (index < right) {
            quickSort(array, index, right);
        }
    }

    return array;
}

