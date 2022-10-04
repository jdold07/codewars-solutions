# 7 kyu - Two fighters, one winner.  [ ID: 577bd8d4ae2807c64b00045b  (two-fighters-one-winner) ]
# URL: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
# Category: NONE  |  Tags: GAMES | ALGORITHMS | LOGIC | FUNDAMENTALS
# ******************************************************************************
def declare_winner(fighter1, fighter2, first_attacker):
      attack, defend = (fighter1, fighter2) if first_attacker == fighter1.name else (fighter2, fighter1)
      while attack.health > 0:
          defend.health -= attack.damage_per_attack
          attack, defend = defend, attack
      return defend.name
# ******************************************************************************
# ******************************************************************************
class Fighter(object):
      def __init__(self, name, health, damage_per_attack):
          self.name = name
          self.health = health
          self.damage_per_attack = damage_per_attack
  
      def __str__(self):
          return "Fighter({}, {}, {})".format(self.name, self.health, self.damage_per_attack)
  
  
  def declare_winner(fighter1, fighter2, first_attacker):
      if first_attacker == fighter1.name:
          player1, player2 = fighter1, fighter2
      else:
          player2, player1 = fighter1, fighter2
      while fighter1.health > 0 and fighter2.health > 0:
          player2.health -= player1.damage_per_attack
          if player2.health <= 0:
              break
          player1.health -= player2.damage_per_attack
      return player1.name if player2.health < 1 else player2.name

