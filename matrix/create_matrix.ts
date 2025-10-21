// type TShape = number[][]

// const Shapes: Record<string, TShape> = {
//   A: [[1]],
//   B: [[1, 1, 1]],
//   C: [
//     [1, 1],
//     [1, 1],
//   ],
//   D: [[1, 0], [1, 1], [1, 0]],
//   E: [
//     [0, 1, 0],
//     [1, 1, 1],
//   ],
// }

// const createMatrixGrid = (n: number, m: number): number[][] =>
//   Array.from({ length: n }, () => Array(m).fill(0))

// const placeNumber = (
//   matrixGrid: TShape,
//   figure: string,
//   startRow: number,
//   startColumn: number
// ): TShape => {
//   const shape = Shapes[figure]

//   for (let r = 0; r < shape.length; r++) {
//     for (let c = 0; c < shape[0].length; c++) {
//       if (shape[r][c] === 1) {
//         matrixGrid[r + startRow][c + startColumn] = 1
//       }
//     }
//   }
//   return matrixGrid
// }

// const handleMatrixGrid = (n: number, m: number, figures: string[]): TShape => {
//   const grid = createMatrixGrid(n, m)
//   let currentRow = 0

//   figures.forEach((figure, index) => {
//     const shape = Shapes[figure]
//     if (currentRow + shape.length <= n) {
//       placeNumber(grid, figure, currentRow, 0)
//       currentRow += shape.length + 1
//     }
//   })
//   return grid
// }

// console.log(handleMatrixGrid(8, 14, ['E', 'C', 'A', 'B', 'D']))


type Grid = number[][];
type Shape = number[][];

// Define each figure's 2D pattern
const SHAPES: Record<string, Shape> = {
  A: [[1]],
  B: [[1, 1, 1]],
  C: [[1, 1], [1, 1]],
  D: [[1, 0], [1, 1], [1, 0]],   // “T” shape
  E: [[0, 1, 0], [1, 1, 1]],     // “T” flipped horizontally
};

/**
 * Place figures row-wise, filling left to right and wrapping to next row.
 * @param n   total rows in grid
 * @param m   total columns in grid
 * @param figures list of letters representing shapes to draw
 * @returns    filled grid of integers
 */



// function drawFiguresClean(n: number, m: number, figures: string[]): number[][] {
//   const grid = Array.from({ length: n }, () => Array(m).fill(0));
//   let row = 0;
//   let col = 0;
//   let currentRowHeight = 0; // tallest shape in current row

//   for (let i = 0; i < figures.length; i++) {
//     const shape = SHAPES[figures[i]];
//     const h = shape.length;
//     const w = shape[0].length;

//     // wrap if width won't fit
//     if (col + w > m) {
//       row += currentRowHeight;      // move down by tallest shape height
//       col = 0;
//       currentRowHeight = 0;
//     }

//     // stop if no vertical space left
//     if (row + h > n) break;

//     // place shape
//     for (let r = 0; r < h; r++) {
//       for (let c = 0; c < w; c++) {
//         if (shape[r][c] === 1) {
//           grid[row + r][col + c] = i + 1;
//         }
//       }
//     }

//     // advance
//     col += w;
//     currentRowHeight = Math.max(currentRowHeight, h);
//   }

//   return grid;
// }


// // Example usage:
// const n = 6, m = 10;
// const figures = ["E", "C", "B", "A", "D", "C", "E"];
// const result = drawFiguresClean(n, m, figures);
// console.table(result);




// type Grid = number[][];
// type Shape = number[][];

// const SHAPES: Record<string, Shape> = {
//   A: [[1]],
//   B: [[1, 1, 1]],
//   C: [[1, 1], [1, 1]],
//   D: [[1, 0], [1, 1], [1, 0]],   // T shape
//   E: [[0, 1, 0], [1, 1, 1]]      // flipped T
// };

// function drawFiguresOrdered(
//   n: number,
//   m: number,
//   figures: string[]
// ): Grid {
//   const grid: Grid = Array.from({ length: n }, () => Array(m).fill(0));

//   let curRow = 0;        // top of the current “shelf”
//   let curCol = 0;        // next free column inside the shelf
//   let shelfHeight = 0;   // tallest shape in the current shelf

//   for (let i = 0; i < figures.length; i++) {
//     const shape = SHAPES[figures[i]];
//     const h = shape.length;
//     const w = shape[0].length;

//     // If shape won't fit horizontally, start a new shelf
//     if (curCol + w > m) {
//       curRow += shelfHeight;
//       curCol = 0;
//       shelfHeight = 0;
//     }

//     // Stop if we’ve run out of vertical space
//     if (curRow + h > n) break;

//     // Place shape on the grid
//     for (let r = 0; r < h; r++) {
//       for (let c = 0; c < w; c++) {
//         if (shape[r][c] === 1) {
//           grid[curRow + r][curCol + c] = i + 1; // figure index
//         }
//       }
//     }

//     // Update shelf info
//     curCol += w;
//     shelfHeight = Math.max(shelfHeight, h);
//   }

//   return grid;
// }

// // Example:
// const n = 6, m = 10;
// const figures = ["E", "C", "B", "A", "D", "C", "E"];
// const ordered = drawFiguresOrdered(n, m, figures);
// console.table(ordered);



const fixMatrix = (n: number, m: number, figures: string[]): Grid => {
  const matrixGrid = Array.from({length: n}, () => Array(m).fill(0))
  let currentRow = 0
  let currentColumn = 0
  let rowHeight = 0
  let columnHeight = 0
  let rowCount = 1
  let columnCount = 1

  for(let i=0; i<figures.length; i++) {
    const shape = SHAPES[figures[i]]
    let width = shape[0].length
    let height = shape.length
    rowHeight += height + 1


    if(currentColumn + width > m) {
      currentRow = rowHeight
      currentColumn = 0
      rowHeight = 0
    }

    if(currentRow + height > n) {
      currentRow = 0
      currentColumn = columnHeight + 1
      rowHeight = height
    }

    for(let r=0; r<height; r++) {
      for(let c=0; c<width; c++) {
        if(shape[r][c] === 1) {
          matrixGrid[r + currentRow][c + currentColumn] = 1 + i
        }
      }
    }

    // currentColumn += width
    rowHeight = Math.max(height, rowHeight)
    columnHeight = Math.max(width, columnHeight)
    rowCount += 1
    columnCount += 1
    currentRow = rowHeight
  }

  return matrixGrid
}

console.table(fixMatrix(8, 14,["E", "C", "B", "A", "D", "C"] ))

class CustomFieldError extends Error {
  private fieldName?: string

  constructor(fieldName: string, message: string) {
    super(message)
    this.name = 'CustomErrorField'
    this.fieldName = fieldName
  }
}

class Singleton {
    private static _instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static getter that controls access to the singleton instance.
     *
     * This implementation allows you to extend the Singleton class while
     * keeping just one instance of each subclass around.
     */
    public static get instance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }

        return Singleton._instance;
    }

    /**
     * Finally, any singleton can define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}
