export const generateArrayOfRandomNumbers = (len: number): Array<number> => {
    return Array.from({length: len}, () => Math.floor(Math.random() * len));
}

export const generateArrayOfRandomUniqueNumbers = (len: number): Array<number> => {
    const array: Array<number> = [];

    for (let i = 0; i < len; i++) {
        array[i] = i;
    }

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
