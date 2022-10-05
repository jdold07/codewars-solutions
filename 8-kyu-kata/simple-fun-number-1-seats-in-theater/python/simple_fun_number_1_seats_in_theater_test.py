# 8 kyu - Simple Fun #1: Seats in Theater  [ ID: 588417e576933b0ec9000045  (simple-fun-number-1-seats-in-theater) ]
# URL: https://www.codewars.com/kata/588417e576933b0ec9000045
# Category: GAMES  |  Tags: PUZZLES
# ******************************************************************************
@test.describe("Basic tests")
def fxd():
    @test.it('')
    def check():
        test.assert_equals(seats_in_theater(16,11,5,3) , 96)
        test.assert_equals(seats_in_theater(1,1,1,1) , 0)
        test.assert_equals(seats_in_theater(13,6,8,3) , 18)
        test.assert_equals(seats_in_theater(60,100,60,1) , 99)
        test.assert_equals(seats_in_theater(1000,1000,1000,1000) , 0)

@test.describe("Random tests")
def rndm():
    from random import randint
    sol=lambda a,b,c,d: (a-c+1)*(b-d)
    
    @test.it('')
    def f():
        for _ in range(40):
            a,b=randint(1,1000),randint(1,1000)
            c,d=randint(1,a),randint(1,b)
            test.assert_equals(seats_in_theater(a,b,c,d),sol(a,b,c,d),"It should work for random inputs too")
