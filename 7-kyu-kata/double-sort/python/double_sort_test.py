# 7 kyu - Double Sort  [ ID: 57cc79ec484cf991c900018d  (double-sort) ]
# URL: https://www.codewars.com/kata/57cc79ec484cf991c900018d
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | SORTING
# ******************************************************************************
import codewars_test as test
from solution import db_sort

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(db_sort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6])
        test.assert_equals(db_sort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32])
        test.assert_equals(db_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
        test.assert_equals(db_sort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [0,2,2,"Apple","Banana","Mango","Orange"])
        test.assert_equals(db_sort(["C", "W", "W", "W", 1, 2, 0]), [0,1,2,"C","W","W","W"])
        test.assert_equals(db_sort(["Hackathon", "Katathon", "Code", "CodeWars", "Laptop", "Macbook", "JavaScript", 1, 5, 2]), [1,2,5,"Code","CodeWars","Hackathon","JavaScript","Katathon","Laptop","Macbook"])
        test.assert_equals(db_sort([66, 't', 101, 0, 1, 1]), [0,1,1,66,101,"t"])
        test.assert_equals(db_sort([78, 117, 110, 99, 104, 117, 107, 115, 4, 6, 5, 'west']), [4,5,6,78,99,104,107,110,115,117,117,"west"])
        test.assert_equals(db_sort([101, 45, 75, 105, 99, 107, 'y', 'no', 'yes', 1, 2, 4]), [1,2,4,45,75,99,101,105,107,"no","y","yes"])
        test.assert_equals(db_sort([80, 117, 115, 104, 45, 85, 112, 115, 6, 7, 2]), [2,6,7,45,80,85,104,112,115,115,117])
        test.assert_equals(db_sort([1, 1, 1, 1, 1, 2, '1', '2', 'three', 1, 2, 3]), [1,1,1,1,1,1,2,2,3,"1","2","three"])
        test.assert_equals(db_sort([78, 33, 22, 44, 88, 9, 6, 0, 5, 0]), [0,0,5,6,9,22,33,44,78,88])
        test.assert_equals(db_sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]), [1,1,2,2,3,3,4,5,6,7,8,9])
        test.assert_equals(db_sort([82, 18, 72, 1, 11, 12, 12, 12, 12, 115, 667, 12, 2, 8, 3]), [1,2,3,8,11,12,12,12,12,12,18,72,82,115,667])
        test.assert_equals(db_sort(['t', 'e', 's', 't', 3, 4, 1]),[1,3,4,"e","s","t","t"])
        test.assert_equals(db_sort(['what', 'a', 'great', 'kata', 1, 2, 2]), [1,2,2,"a","great","kata","what"])
        test.assert_equals(db_sort([66, 'codewars', 11, 'alex loves pushups', 2, 3, 0]), [0,2,3,11,66,"alex loves pushups","codewars"])
        test.assert_equals(db_sort(['come', 'on', 110, '2500', 10, '!', 7, 15, 5, 6, 6]), [5,6,6,7,10,15,110,"!","2500","come","on"])
        test.assert_equals(db_sort(['when\'s', 'the', 'next', 'Katathon?', 9, 7, 0, 1, 2]), [0,1,2,7,9,"Katathon?","next","the","when's"])
        test.assert_equals(db_sort([8, 7, 5, 'bored', 'of', 'writing', 'tests', 115, 6, 7, 0]), [0,5,6,7,7,8,115,"bored","of","tests","writing"])
        test.assert_equals(db_sort(['anyone', 'want', 'to', 'hire', 'me?', 2, 4, 1]), [1,2,4,"anyone","hire","me?","to","want"])
        test.assert_equals(db_sort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]), [46, 78, 574, '287', '3', '423', '69', 'Apple', 'Grape', 'Peach'] )

@test.describe("Random Tests")        
def randnu():
    
    from random import randrange as ran,sample
    from string import ascii_lowercase as abc,digits

    def ref_ort(arr): 
        return sorted(arr, key=lambda x: (isinstance(x,str),x))
    
    @test.it("Testing for random tests")
    def _():
        for _ in range(0,100):
            size, xs = ran(5,30),[]
            for j in range(10):
                x = ran(3,8)
                if ran(0,3) == 1: xs.append((''.join(sample(abc,x)).capitalize()))
                else:
                    y = sample(digits,1)[0]
                    if ran(0,2) == 0: xs.append(int(y))
                    else:  xs.append(y)
                if ran(0,10) < 3: xs.append('!')
            exp = ref_ort(xs)            
            test.assert_equals(db_sort(xs),exp)
    

