
/*
  [
    ['X','O','X'],
    ['O','X','O'],
   ['X','','O'],
  ]
  
 */

  type CellValue = 'X' | 'O' | '' ;

  type GameBoard = [
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
    [CellValue,CellValue,CellValue],
  ]


  const gameBoard :GameBoard=[

    ['X','O','X'],
    ['O','X','O'],
   ['X','','O'],
  
  ]

  gameBoard[0][1]  = 'X';


   type RGB = readonly [number,number,number]

   const rgb : RGB = [1,1,1];