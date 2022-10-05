# [object Object] - Tunnel Digging  [ ID: 626466bdd13ea6923d0663ea  (tunnel-digging) ]
# URL: https://www.codewars.com/kata/626466bdd13ea6923d0663ea
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
from solution import tunnel_digging
import codewars_test as test
import random
a1= ["[","{","(","|",":"," "]
a2= ["]","}",")","|",":"," "]
def _solution(r):
    a1 = {"[": 30,"{":25,"(":20,"|":15,":":10," ":0}
    b1 = {"]": 30,"}":25,")":20,"|":15,":":10," ":0}
    mins = 0
    for i in range(len(r)):
        if len(r[i]) >= 1:
            mins+=a1[r[i][0]]
        if len(r[i]) > 1:
            mins+=b1[r[i][1]]
    mins+=(len(r) // 3)*30
    return mins
@test.describe("tunnel_digging")
def tests():
    @test.it("Basic Tests")
    def test_second_oldest_first():
        test.assert_equals(tunnel_digging([': ', '[:', '{ ', '{|', '{|', '{]', '( ', ':)', '(|', '|}', '[ ', '{:', '[)', '[}', '| ', '  ', '|}', ':|', ': ', ': ', '  ', '  ', ': ', '[ ']),885)
        test.assert_equals(tunnel_digging(['| ', '  ', '  ', ':)', '{)', '| ', '{}', '{ ', ' }', '{}', '{:', '  ', ' ]', '[]', '{ ', '  ', '[)', '  ', '()', '|}', ' :', '  ']),755)
        test.assert_equals(tunnel_digging(['( ', '{ ', ' ]', '| ', '{]', '( ', ' :', '{]', '  ', '  ', '|]', '(:', '(:', '{]', '  ', '{)', ' :', ': ', '[|', ':|']),705)
        test.assert_equals(tunnel_digging(['| ', '::', '{)', '{:', '  ', '|}', ' )', '  ', '|)', ':)', '{ ', '(]']),435)
        test.assert_equals(tunnel_digging(['  ', ': ', '  ', '|]', '{ ', '[ ', '  ', ': ', '  ', '{}', '{}', '  ', '[]', '  ', '|)', ':]']),505)
        test.assert_equals(tunnel_digging(['[ ', ':|', '  ', '::', '  ', ':}', '(]', '|}', '  ', '{)', ':|', '  ', '{|', ':}', ': ', '  ', '[}', '  ']),590)
        test.assert_equals(tunnel_digging(['{ ', '|)', ' }', '{|', '|]', '[:', '|}', '::', '{}', '{:', '[ ', ' ]', '{|', '{:', ': ']),650)
        test.assert_equals(tunnel_digging(['{)', '|:', ' |', '{ ', '( ', ' |', ' }', '||', '[}', '[]', '{ ', ' :', '{ ', '|}']),535)
        test.assert_equals(tunnel_digging([' |', '|)', '(|', '  ', '| ', '||', '|)', '[}', '  ', '| ', ' )', '[ ', '  ', '|)', '(:', '( ', ': ', '( ', '| ', '::']),615)
        test.assert_equals(tunnel_digging(['  ', '( ', '( ', '[)', ' )', '[ ', '| ']),215)
        test.assert_equals(tunnel_digging([': ', ':}', '  ', '  ', ' |', '{:', '{:', '  ', ':}', '{ ', '  ', '{:', '|]', '{}', ' )', '[)', '  ', '[}', '  ', '{|', '( ', '  ', '  ', '[ ', '| ']),790)
        test.assert_equals(tunnel_digging([': ', ':|', '(|', '  ', '[ ', '| ', '||', '(]', ' )', '(}', '||']),380)
        test.assert_equals(tunnel_digging(['  ', '[ ', '||', '[|', ':]', '(|', '( ', ':)', '[}', '[|', '::', '{}', ':}', ' |', '[|', '(]', '(|', '(]', '  ', ':|']),835)
        test.assert_equals(tunnel_digging([' :', '||', ':)', '  ', ': ', '  ', ' }', ' )', '()', '  ', '|)', '::', '| ', '(|']),390)
        test.assert_equals(tunnel_digging(['|]', '{}', '  ', ' }', '[]', ' :', '{)', '|:', '|]', '( ', '{}', '(|', '[ ', '[:']),600)
        test.assert_equals(tunnel_digging([' |', '{|', '(}', '[ ', '[}', '|)', '()', ' ]', '  ', ' }', '[:', '[]', '  ', '(}', '( ', '{|', '{]', '| ', '  ', ':)', '[:']),870)
        test.assert_equals(tunnel_digging(['[ ', ' :', '{|', ' |', '[|', ':)']),230)
        test.assert_equals(tunnel_digging(['[|', '|}', '  ', '|]', ':]', '(:', '|}', '[}', ':}', '|:', '(:', '(|', ':]', '{:', ' :', ' )', ' |']),690)
        test.assert_equals(tunnel_digging(['  ', '  ', ':}', ':]', ':)', '  ', ': ', '  ', '[ ', '{)', '  ', '  ', ' |', '(]', '{]', '|]', '{)', '(]', '(|', '{)', '{ ', '|]', '(]', '||', '[:']),960)
        test.assert_equals(tunnel_digging(['|)', '{ ', '{ ', '|]', '{ ', ' }']),240)
        test.assert_equals(tunnel_digging(['{:', '{|', '[)', '  ', '|)', '{ ', ':]', ': ', '{}', '( ', '|]']),440)
        test.assert_equals(tunnel_digging(['()', '  ', '  ', ': ', '{ ', '[ ', '[)', '(}', '  ', ' ]', ':}', '(}', '  ']),430)
        test.assert_equals(tunnel_digging([': ', ' ]', '  ', '{]', ' :', '  ', '|]', ' :', '  ', ':|', '(:', ' ]', '[:', '[]', '|}', ' ]', '[ ', '  ', ' )', '||']),675)
        test.assert_equals(tunnel_digging(['  ', '||', '|]', '(|', '|:', ' ]', '{ ', '[|', '( ', '::', ' |', '(]', '  ', '{|', '{]', '{ ', '[ ', ':}', '|}', '{)', ':)', ': ', ' ]', '  ', '  ']),920)
        test.assert_equals(tunnel_digging([':]', ' :', '  ', '(:', '( ', '[)', '[ ', '  ', '(}', '|:']),340)
        test.assert_equals(tunnel_digging(['( ', '()', '(}', '[]', '{ ', '{ ']),275)
        test.assert_equals(tunnel_digging(['[|', '[)', '{|', '  ', '  ', '| ', '  ', '(]', '()', '[ ', '[|', ':]', '(}', '  ', '( ', '| ', ': ', '{|', '|}', '{ ', ' |']),775)
        test.assert_equals(tunnel_digging([':)', '|)', ':)', '{:', '( ', '{ ', '(|', ' |', '  ', '{)']),360)
        test.assert_equals(tunnel_digging(['  ', '|}', '  ', '(]', '(|', '()', '  ', '(]']),275)
        test.assert_equals(tunnel_digging(['::', '|}', '| ', '::', '  ']),125)
        test.assert_equals(tunnel_digging([':]', '  ', '|:', '[ ', '[)', '  ', ' |', '[}', ': ', '::', '{]', '  ', '|]', '  ', '[|', '(]', '||', ': ', ' |', ':}', '  ', ':}']),775)
        test.assert_equals(tunnel_digging(['::', '|]', '[ ', '( ', '[}', '  ', '  ', '{:', ' )', '{:', '{}', ' }', '|:', '{:', '[|', ' ]']),620)
        test.assert_equals(tunnel_digging(['  ', '{ ', '[ ', '[)', '[}']),190)
        test.assert_equals(tunnel_digging([' :', '{)', ' :', '( ', '{)', ':}', ': ', ': ', '[]', ' }', '::']),380)
        test.assert_equals(tunnel_digging(['| ', '(}', '(}', '{:', '|)', '{ ', '( ']),280)
        test.assert_equals(tunnel_digging(['| ', ' ]', '(}', '{|', '||', '  ', '||', '[)', '[:', ':|', ' }', '|]', '  ', '  ', '{}', '  ', '{}', '[|', '{)', ':}', '( ', ' ]', '( ', '::']),930)
        test.assert_equals(tunnel_digging(['( ', '  ', ' |', '[)', '  ', '|}', '|:', ': ', '| ', '{}', '[|', '  ', '| ', ' :', '|]', '[|', '  ']),535)
        test.assert_equals(tunnel_digging(['{ ', ' }', '[}', ': ', '[ ', ':|']),230)
        test.assert_equals(tunnel_digging([':]', '  ', '  ', '|)', '|]', '[ ', '  ', '::', '  ', '::', '[ ', ':}']),375)
        test.assert_equals(tunnel_digging([' }', '(:', '[)', '  ', '{}', '  ', '{ ']),240)
        test.assert_equals(tunnel_digging(['  ', '| ', '|]', '[ ', '[|', '{]', '{}', '[ ', '(]', ': ', '( ', '{:']),505)
        test.assert_equals(tunnel_digging(['{]', '[]', '|)', '(}', '(|', '{}', '||', '( ', '()', '[}', '  ', '()']),585)
        test.assert_equals(tunnel_digging(['[ ', '| ', ': ', '::', ':)', ' |', ' :', '{]', '[|', '{]', '  ', '[ ', '[)', '  ', '{]', '|}', ':}', ' }', ':]', '[}', ':}', '{)', '(]', ': ', '||']),1025)
        test.assert_equals(tunnel_digging(['  ', '[|', '  ', ':}', '(|', '(:', '{|', ' :', '[ ', '( ', ': ', '{)', '( ']),440)
        test.assert_equals(tunnel_digging(['( ', '(|', '[ ', '[|', ':|', '|:']),240)
        test.assert_equals(tunnel_digging(['| ', '{ ', '|:', ' ]', ' |', '|:', '[ ', '[}', ' }', '[]', ':)', '(}', '(}', ' }', '[}', '{ ', '( ', '[]', '|}', '{)', '|]', '|}']),990)
        test.assert_equals(tunnel_digging(['[]', '()', '| ', '{ ', '[ ', '{|', '  ', '  ', '(:', '{:', '()', '{ ', '{ ', '||', '{:', '[ ', '()', '()', '( ', '[|', ' )', '|)', ':]', '  ']),940)
        test.assert_equals(tunnel_digging(['{]', ':)', '| ', ':)', '{:', '[]', '  ', '(}', ' :', ' ]', '{]']),455)
        test.assert_equals(tunnel_digging(['[|', '|]', ' |', '|]', '(]', '(]', ':}']),345)
        test.assert_equals(tunnel_digging(['  ', '|]', ': ', '{]', '|]', '{|', '(:', '(}', '  ', ':]', ': ', '[:', '{}', '|:', '  ', '||', '  ', ' ]', '{}', '( ', '  ', ' }', ':)', '{ ']),885)
        test.assert_equals(tunnel_digging(['[}', '  ', '{]', ': ', '|}', '(}', '  ', '{ ', '|]']),365)
        test.assert_equals(tunnel_digging(['{ ', '[:', '{|', '(|', '{:', '{:', '| ']),285)
        test.assert_equals(tunnel_digging(['  ', '::', '|}', '[]', '  ', ':)', '{}', ':)', '{)', ':}', ' |', '|)', ':}', '  ', '  ', ':]', '  ', '|:', ':)', ' :']),680)
        test.assert_equals(tunnel_digging([' |', '|)', '  ', '(:', '|]']),155)
    @test.it("Special Cases")
    def test_tunnel_digging():
        test.assert_equals(tunnel_digging(['  ', '[ ', '  ', '||', '  ', '[)', ': ', '  ', '{ ', ':|', '  ', '  ']),290)
        test.assert_equals(tunnel_digging([':]', '|)', ': ', '  ', '{ ', '[:', '  ']),210)
        test.assert_equals(tunnel_digging([]),0)
        test.assert_equals(tunnel_digging(['  ', '{}', '[ ', '| ', '(]', '  ', '  ', '  ', '( ', ': ', '| ', '| ', '  ', '  ', '( ', '{:']),410)
        test.assert_equals(tunnel_digging(['( ', '  ', '  ', '  ']),50)
        test.assert_equals(tunnel_digging(['  ', '::', '[ ', '| ', '  ', '| ', '  ', '  ', '[)', '( ', '  ', '  ', '  ']),270)
    @test.it("Random Tests")
    def test_tunnel_digging():
        for i in range(54):
            rocks = []
            for i in range(random.randint(0,25)):
                e = random.randint(1,8)
                p1 = " "
                p2 = " "
                if (e>=1 and e <=6):
                    p1 = random.choice(a1)
                    p2 = random.choice(a2)
                if (e == 7):
                    p1 = random.choice(a1)
                if (e == 8):
                    p1 = " "
                rocks.append(p1 + p2)
            s=_solution(rocks)
            test.assert_equals(tunnel_digging(rocks),s)
