// utilities/create-board.ts
export interface Cell {
    revealed: boolean;
    bomb: boolean;
    adjacent: number;
  }
  
  /**
   * Create an empty board (size x size) with exactly `bombCount` bombs placed randomly.
   */
  export const createBoard = (size: number, bombCount: number): Cell[][] => {
    // create empty cells
    const board: Cell[][] = new Array(size).fill(null).map(() =>
      new Array(size).fill(null).map(() => ({ revealed: false, bomb: false, adjacent: 0 }))
    );
  
    // place bombs randomly
    let placed = 0;
    const total = size * size;
    const used = new Set<number>();
    while (placed < bombCount) {
      const idx = Math.floor(Math.random() * total);
      if (used.has(idx)) continue;
      used.add(idx);
      const i = Math.floor(idx / size);
      const j = idx % size;
      board[i][j].bomb = true;
      placed++;
    }
  
    // compute adjacent counts
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board[i][j].bomb) {
          board[i][j].adjacent = 0;
          continue;
        }
        board[i][j].adjacent = countAdjacents(board, i, j);
      }
    }
  
    return board;
  };
  
  export const createNewBoard = (size: number, bombCount: number) => createBoard(size, bombCount);
  
  /**
   * Count bombs around (i,j)
   */
  const countAdjacents = (board: Cell[][], i: number, j: number) => {
    const dirs = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    let c = 0;
    for (const [dx, dy] of dirs) {
      const x = i + dx;
      const y = j + dy;
      if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && board[x][y].bomb) c++;
    }
    return c;
  };
  
  /**
   * Reveal cell at (i,j).
   * - If bomb -> reveal all and exploded = true
   * - If adjacent > 0 -> reveal that cell
   * - If adjacent == 0 -> flood reveal neighbors
   *
   * Returns { newBoard, exploded }
   */
  export const revealCellAt = (boardInput: Cell[][], i: number, j: number): { newBoard: Cell[][]; exploded: boolean } => {
    // deep copy board (cells are small objects)
    const board = boardInput.map(row => row.map(cell => ({ ...cell })));
    const size = board.length;
  
    // If already revealed do nothing
    if (board[i][j].revealed) return { newBoard: board, exploded: false };
  
    // If bomb -> reveal all
    if (board[i][j].bomb) {
      for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
          board[x][y].revealed = true;
        }
      }
      return { newBoard: board, exploded: true };
    }
  
    // BFS / flood fill revealing zeros and their border numbers
    const queue: [number, number][] = [];
    queue.push([i, j]);
    while (queue.length > 0) {
      const [cx, cy] = queue.shift()!;
      if (board[cx][cy].revealed) continue;
      board[cx][cy].revealed = true;
  
      // if this cell has 0 adjacent bombs, add neighbors
      if (board[cx][cy].adjacent === 0) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx === 0 && dy === 0) continue;
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx >= 0 && nx < size && ny >= 0 && ny < size && !board[nx][ny].revealed && !board[nx][ny].bomb) {
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  
    return { newBoard: board, exploded: false };
  };
  