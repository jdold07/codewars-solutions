# 7 kyu - Kill The Monsters!  [ ID: 5b36137991c74600f200001b  (kill-the-monsters) ]
# URL: https://www.codewars.com/kata/5b36137991c74600f200001b
# Category: NONE  |  Tags: ARRAYS | FUNDAMENTALS | MATHEMATICS | STRINGS
# ******************************************************************************
def kill_monsters(h, m, d):
      hits = m // 3 if m % 3 != 0 else m // 3 - 1
      return ["hero died", f"hits: {hits}, damage: {d * hits}, health: {h - hits * d}"][h > hits * d]
