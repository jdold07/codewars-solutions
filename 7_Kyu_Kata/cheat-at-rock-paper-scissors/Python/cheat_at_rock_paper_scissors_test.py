# [object Object] - Cheat at rock paper scissors!  [ ID: 57e141ad8a8b8d4d150004f6  (cheat-at-rock-paper-scissors) ]
# URL: https://www.codewars.com/kata/57e141ad8a8b8d4d150004f6
# Category: REFERENCE  |  Tags: FUNDAMENTALS | PROBABILITY
# ******************************************************************************
import random
REPETITIONS, MARGIN = 10000, 0.02

def ans(input, output):
    if input == output: return 0
    if (input, output) in (('rock', 'paper'), ('paper', 'scissors'), ('scissors', 'rock')):
        return -1
    else:
        return 1

wins, draws, losses = 0, 0, 0
for i in xrange(REPETITIONS):
    c = random.choice(['rock', 'paper', 'scissors'])
    result = ans(r_p_s_cheat(c), c)
    if result == 1:
        wins += 1
    elif result == -1:
        losses += 1
    else:
        draws += 1

print('{} wins, {} draws, {} losses'.format(wins, draws, losses))

test.assert_equals(draws, 0, "There shouldn't be any draw")
test.expect(abs(0.9 * REPETITIONS - wins) <= MARGIN * REPETITIONS, "You should win more often")
test.expect(abs(0.1 * REPETITIONS - losses) <= MARGIN * REPETITIONS, "You should win less often")
