# 6 kyu - Coding 3min : Waiting for a Bus

##### **ID**: [57070eff924f343280000015](https://www.codewars.com/kata/57070eff924f343280000015) | **Slug**: [coding-3min-waiting-for-a-bus](https://www.codewars.com/kata/57070eff924f343280000015) | **Category**: `GAMES` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-04-08 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015) | **Approved**: 2018-10-21 ***by*** [Voile](https://www.codewars.com/users/Voile)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-04 | **Originally completed**: 2022-09-08

---

## Kata Description




This is the simple version of Shortest Code series. If you need some challenges, please try the [challenge version](http://www.codewars.com/kata/5705da6ccb7293991300055f)



## Task



John is Waiting for a Bus. 



The Bus Station first bus starting at 06:00, Every 15 minutes a bus departure, the last bus departure time is 20:00. the bus average speed is 30 km/h.



You are given two arguments: 



- ```time```:a string, the time when John start waiting. time format: ```hh:mm```(24 hour time format)



- ```km```: a integer number, the distance between the location of John and the bus station



Please calculate when John can get on the bus. return a string with time format: ```hh:mm```



### Example

```

time='06:00',km=1    sc('06:00',1)='06:02'

John start waiting at 06:00, a Bus start at 06:00

Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02



time='06:00',km=10   sc('06:00',10)='06:20'

John start waiting at 06:00, a Bus start at 06:00

Bus travel 10 km with 20 minutes, so John take on the Bus at 06:20



time='07:00',km=10   sc('07:00',10)='07:05'

John start waiting at 07:00, a Bus start at 06:45

Bus travel 10 km with 20 minutes, so John take on the Bus at 07:05



time='10:00',km=100  sc('10:00',100)='10:05'

John start waiting at 10:00, a Bus start at 06:45

Bus travel 100 km with 3 hours 20 minutes, so John take on the Bus at 10:05



time='09:00',km=100  sc('09:00',100)='09:20'

John start waiting at 10:00, a Bus start at 06:00

Bus travel 100 km with 3 hours 20 minutes, so John take on the Bus at 09:20



some edge case:



time='05:00',km=1    sc('05:00',1)='06:02'

John start waiting at 05:00, a Bus start at 06:00

(John gets up too early, so he should waiting a long times)

Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02



time='20:00',km=1    sc('20:00',1)='20:02'

John start waiting at 20:00, a Bus start at 20:00

(John caught up with the last bus)

Bus travel 1 km with 2 minutes, so John take on the Bus at 20:02



time='20:10',km=1    sc('20:10'，1)='06:02'

John start waiting at 20:00, a Bus start at next day 06:00

(John didn't catch the last bus, he should waiting to next day)

Bus travel 1 km with 2 minutes, so John take on the Bus at 06:02

```

       

    

### Series:

 - [Bug in Apple](http://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9)

 - [Father and Son](http://www.codewars.com/kata/56fe9a0c11086cd842000008)

 - [Jumping Dutch act](http://www.codewars.com/kata/570bcd9715944a2c8e000009)

 - [Planting Trees](http://www.codewars.com/kata/5710443187a36a9cee0005a1)

 - [Give me the equation](http://www.codewars.com/kata/56fe9b65cc08cafbc5000de3)

 - [Find the murderer](http://www.codewars.com/kata/570f3fc5b29c702c5500043e)

 - [Reading a Book](http://www.codewars.com/kata/570ca6a520c69f39dd0016d4)

 - [Eat watermelon](http://www.codewars.com/kata/570df12ce6e9282a7d000947)

 - [Special factor](http://www.codewars.com/kata/570e5d0b93214b1a950015b1)

 - [Guess the Hat](http://www.codewars.com/kata/570ef7a834e61306da00035b)

 - [Symmetric Sort](http://www.codewars.com/kata/5705aeb041e5befba20010ba)

 - [Are they symmetrical?](http://www.codewars.com/kata/5705cc3161944b10fd0004ba)

 - [Max Value](http://www.codewars.com/kata/570771871df89cf59b000742)

 - [Trypophobia](http://www.codewars.com/kata/56fe9ffbc25bf33fff000f7c)

 - [Virus in Apple](http://www.codewars.com/kata/5700af83d1acef83fd000048)

 - [Balance Attraction](http://www.codewars.com/kata/57033601e55d30d3e0000633)

 - [Remove screws I](http://www.codewars.com/kata/5710a50d336aed828100055a)

 - [Remove screws II](http://www.codewars.com/kata/5710a8fd336aed00d9000594)

 - [Regular expression compression](http://www.codewars.com/kata/570bae4b0237999e940016e9)

 - [Collatz Array(Split or merge)](http://www.codewars.com/kata/56fe9d579b7bb6b027000001)

 - [Tidy up the room](http://www.codewars.com/kata/5703ace6e55d30d3e0001029)

 - [Waiting for a Bus](http://www.codewars.com/kata/57070eff924f343280000015)

---


🏷 `PUZZLES | GAMES`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57070eff924f343280000015)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
