# 5 kyu - The Hashtag Generator  [ ID: 52449b062fb80683ec000024  (the-hashtag-generator) ]
# URL: https://www.codewars.com/kata/52449b062fb80683ec000024
# Category: ALGORITHMS  |  Tags: STRINGS | ALGORITHMS
# ******************************************************************************
def generate_hashtag(s):
    s = f"#{''.join(s.title().split())}"
    return s if 1 < len(s) <= 140 else False
