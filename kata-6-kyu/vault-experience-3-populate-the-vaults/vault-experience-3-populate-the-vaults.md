# 6 kyu - Vault experience (3): Populate the vaults

##### **ID**: [57adadd36b34faea6b00031b](https://www.codewars.com/kata/57adadd36b34faea6b00031b) | **Slug**: [vault-experience-3-populate-the-vaults](https://www.codewars.com/kata/57adadd36b34faea6b00031b) | **Category**: `REFERENCE` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2016-08-12 ***by*** [Bl4ckR00k](https://www.codewars.com/users/Bl4ckR00k) | **Approved**: 2017-11-11 ***by*** [myjinxin2015](https://www.codewars.com/users/myjinxin2015)

##### **Languages Available**: csharp, python

##### **My Completed Languages**: python ***as at*** 2022-10-08 | **Originally completed**: 2022-09-27

---

## Kata Description


**Dear Mr overseer,**



we are delighted that they have still managed to us in time. 



We have a big problem.



Mankind will be extinct in the near future. The cause!? - wars, diseases, natural disasters, aliens ... figure it out. But that’s not the point!



Vault-Tec has started to build vaults around the world. These are huge underground bunkers that allows us to survive. Your task is to select people and to populate with them these Vaults.

We give you a population capacity and expect you to return the number of people that you want to put in these vaults.



However, there are several conditions that must be adhered to:



- A male overseer must always be present unless the capacity is `0`

- If more than `50` dwellers move in, the overseer must have a wife (a "second overseer") 

- With an even number of dwellers, the total number of men and women should be equal 

- With an odd number of dwellers, the last free spot should be occupied by a woman



The mankind bets on you. 



Good Luck 



**Your Vault-Tec Company** 



_**Vault-Tec Brochure**_



## Examples



```

5 people   =>  1 Mr. Overseer, 3 female dwellers, 1 male dweller

51 people  =>  1 Mr. Overseer, 1 Mrs. Overseer, 25 female dwellers, 24 male dwellers

```



~~~if:csharp

Your solution should return a list of the `Dweller` class instances according to the following spec:



```

public enum Gender

{

    Mr,

    Mrs

}



public enum Position

{

    overseer,

    none

}



public class Dweller

{

    public Gender Sex { get; set; }

    public Position Work { get; set; }

    

    public Dweller() : this(Gender.Mr, Position.none) { }

    public Dweller(Gender sex) : this(sex, Position.none) { }

    public Dweller(Gender sex, Position work)

    {

        Sex = sex;

        Work = work;

    }

}

```

~~~ 



___ 



*Imagine further "Vault experience":*



- [Vault experience (1): Enough water for how many days?](https://www.codewars.com/kata/576d209bed916d2ea30000f7) 

- [Vault experience (2): Hack my terminal!](https://www.codewars.com/kata/57723e8010a0a66d1b0000a0) 

- Vault experience (3): Populate the vaults

---


🏷 `FUNDAMENTALS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/57adadd36b34faea6b00031b)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
