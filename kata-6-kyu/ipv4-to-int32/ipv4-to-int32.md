# 6 kyu - IPv4 to int32

##### **ID**: [52ea928a1ef5cfec800003ee](https://www.codewars.com/kata/52ea928a1ef5cfec800003ee) | **Slug**: [ipv4-to-int32](https://www.codewars.com/kata/52ea928a1ef5cfec800003ee) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-01-30 ***by*** [sahglie](https://www.codewars.com/users/sahglie) | **Approved**: 2014-02-20 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, javascript, python, c, cpp

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-10

---

## Kata Description


Take the following IPv4 address:  128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).



* 1st octet 128 has the binary representation: 10000000

* 2nd octet 32 has the binary representation: 00100000

* 3rd octet 10 has the binary representation: 00001010

* 4th octet 1 has the binary representation: 00000001



So 128.32.10.1 == 10000000.00100000.00001010.00000001



Because the above IP address has 32 bits, we can represent it as the 32

bit number: 2149583361.



Write a function ip_to_int32(ip) ( **JS**: `ipToInt32(ip)` ) that takes an IPv4 address and returns

a 32 bit number.



```ruby

  ip_to_int32("128.32.10.1") => 2149583361

```

```python

  ip_to_int32("128.32.10.1") => 2149583361

```

```javascript

  ipToInt32("128.32.10.1") => 2149583361

```





---


🏷 `NETWORKS | ALGORITHMS | BITS | BINARY | FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52ea928a1ef5cfec800003ee)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
