#+ =====================================================================================================================
#+
#+ 7 kyu - Cheat at rock paper scissors!  [ ID: 57e141ad8a8b8d4d150004f6 ] (cheat-at-rock-paper-scissors)
#+ URL: https://www.codewars.com/kata/57e141ad8a8b8d4d150004f6
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS | PROBABILITY
#+
#+ =====================================================================================================================

from random import choices
  
  
  def r_p_s_cheat(choice):
      dict = {"scissors":["paper", "rock"], "paper":["rock", "scissors"], "rock":["scissors", "paper"]}
      return choices(dict[choice], weights=(100,900), k=1)[0]
