# null - Tunnel Digging  [ ID: 626466bdd13ea6923d0663ea  (tunnel-digging) ]
# URL: https://www.codewars.com/kata/626466bdd13ea6923d0663ea
# Category: NONE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from collections import Counter


def tunnel_digging(r):
    material = {"[": 30, "]": 30, "{": 25, "}": 25, "(": 20, ")": 20, "|": 15, ":": 10}
    tunnel = Counter("".join(r).replace(" ", ""))
    stops = (len(r) // 3) * 30
    return sum(tunnel[rock] * material[rock] for rock in tunnel) + stops
