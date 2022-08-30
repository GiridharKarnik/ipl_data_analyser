export const fibSum = (num: number): number => {
    if (num <= 2) {
        return 1;
    }
    return fibSum(num - 2) + fibSum(num - 1);
}
