#+ =====================================================================================================================
#+
#+ 4 kyu - Sudoku Solution Validator  [ ID: 529bf0e9bdf7657179000008 ] (sudoku-solution-validator)
#+ URL: https://www.codewars.com/kata/529bf0e9bdf7657179000008
#+ Category: ALGORITHMS  |  Tags: DATA STRUCTURES | ALGORITHMS
#+
#+ =====================================================================================================================

def valid_solution(board):
      """Validate Sudoku Board by call all 3 test functions"""
      for loop in range(9):
          if check_row(loop, board) == -1:
              return False
          if check_col(loop, board) == -1:
              return False
      if check_game(board) == -1:
          return False
      return True
  
  
  def check_row(row, board):
      """Perform checks on rows in board"""
      rows = board[row]
      if len(rows) != len(set(rows)) != 9:
          return -1
      if sum(rows) != 45:
          return -1
  
  
  def check_col(col, board):
      """Perform checks on columns in board"""
      cols = [rw[col] for rw in board]
      if len(cols) != len(set(cols)) != 9:
          return -1
      if sum(cols) != 45:
          return -1
  
  
  def check_game(board):
      """Perform checks on individual game squares"""
      for g_row in range(0, 9, 3):
          for g_col in range(0, 9, 3):
              game = []
              for gr in range(g_row, g_row + 3):
                  for gc in range(g_col, g_col + 3):
                      game.append(board[gr][gc])
              if len(game) != len(set(game)):
                  return -1
              if sum(game) != 45:
                  return -1
  
