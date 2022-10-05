# 6 kyu - Buying a car  [ ID: 554a44516729e4d80b000012  (buying-a-car) ]
# URL: https://www.codewars.com/kata/554a44516729e4d80b000012
# Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
# ******************************************************************************
test.assert_equals(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
test.assert_equals(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])
test.assert_equals(nbMonths(8000, 12000, 500, 1), [8, 597])
test.assert_equals(nbMonths(18000, 32000, 1500, 1.25), [8, 332])
test.assert_equals(nbMonths(7500, 32000, 300, 1.55), [25, 122])

def nbMonthsTest(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth):
    mth = 0
    priceOld = startPriceOld
    priceNew = startPriceNew
    available = startPriceOld
    while (available < priceNew):
        # at the end of this month
        mth += 1
        if (mth % 2 == 0):
            percentLossByMonth += 0.5
        priceOld = priceOld * (100 - percentLossByMonth)  / 100
        priceNew = priceNew * (100 - percentLossByMonth)  / 100
        available = mth * savingperMonth + priceOld
    return [mth, round(available - priceNew)]
    
from random import randint
def randomTests():
    stPrOld = [2100, 2110, 2100, 2200, 2260, 2310, 5320, 2490, 2500, 2570, 2620, 
               5630, 5265, 8266, 9282, 10290, 12297, 3000, 7304, 12311, 2312, 13314, 
               3325, 4340, 5341, 6346, 1358, 2362, 9369, 7378, 9381, 10386, 11394
              ]
    stPrNew = [2100, 12110, 12130, 2200, 12260, 9010, 15320, 12490, 15500, 15000, 12620, 
               15630, 15265, 18266, 19282, 20290, 22297, 23000, 27304, 22311, 12312, 23314, 
               3325, 14340, 15341, 26346, 11358, 22362, 39369, 18000, 19000, 15386, 21394
              ]
    stSavin = [1000] * 33
    stLoss  = [1.2, 1.3, 1.4, 1, 1, 2, 1.4, 1.25, 1.5, 1.5, 1.2, 
               1.2, 1.3, 1.4, 1, 1, 2, 1.4, 1.25, 1.5, 1.5, 1.2,  
               1.2, 1.3, 1.4, 1, 1, 2, 1.4, 1.25, 1.5, 1.5, 1.2, 
              ]
    for x in range(0, 20):
        rn = randint(0, 30)
        f1 = stPrOld[rn]
        f2 = stPrNew[rn]
        f3 = stSavin[rn]
        f4 = stLoss[rn]
        test.it("Random Test " + str(x+1))
        test.assert_equals(nbMonths(f1, f2, f3, f4), nbMonthsTest(f1, f2, f3, f4))

randomTests()

