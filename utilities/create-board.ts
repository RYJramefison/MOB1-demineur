export const createBoard = (size: number) => {
    const board = new Array(size).fill(0).map(() => new Array(size).fill(0));
    return board;
}