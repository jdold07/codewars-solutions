# 7 kyu - SantaClausable Interface

##### **ID**: [52b50a20fa0e77b304000103](https://www.codewars.com/kata/52b50a20fa0e77b304000103) | **Slug**: [santaclausable-interface](https://www.codewars.com/kata/52b50a20fa0e77b304000103) | **Category**: `REFERENCE` | **Rank**: <span style="color:white">7 kyu</span>

##### **First Published**: 2013-12-21 ***by*** [BattleRattle](https://www.codewars.com/users/BattleRattle) | **Approved**: 2013-12-24 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: javascript, coffeescript, ruby

##### **My Completed Languages**: javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-09-17

---

## Kata Description


You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" *interface*. We need to implement a method which checks for this *interface*.



## Rules



The SantaClausable interface is implemented, if all of the following methods are defined on an object:



* `sayHoHoHo()` / `say_ho_ho_ho`

* `distributeGifts()` / `distribute_gifts`

* `goDownTheChimney()` / `go_down_the_chimney`



## Example



```javascript

var santa = {

    sayHoHoHo: function() { console.log('Ho Ho Ho!') },

    distributeGifts: function() { console.log('Gifts for all!'); },

    goDownTheChimney: function() { console.log('*whoosh*'); }

};



var notSanta = {

    sayHoHoHo: function() { console.log('Oink Oink!') }

    // no distributeGifts() and no goDownTheChimney()

};



isSantaClausable(santa); // must return TRUE

isSantaClausable(notSanta); // must return FALSE

```



```coffeescript

santa =

  sayHoHoHo: ->

    console.log "Ho Ho Ho!"



  distributeGifts: ->

    console.log "Gifts for all!"



  goDownTheChimney: ->

    console.log "*whoosh*"



notSanta = sayHoHoHo: ->

  console.log "Oink Oink!"

  # no distributeGifts() and no goDownTheChimney()



isSantaClausable santa # must return TRUE

isSantaClausable notSanta # must return FALSE

```



```ruby

class SantaClaus

    def say_ho_ho_ho

        # Ho Ho Ho!

    end

    

    def distribute_gifts

        # Gifts for all!

    end

    

    def go_down_the_chimney

        # Whoosh!

    end

end

  

class NotSantaClaus

    def say_ho_ho_ho

    end

end



is_santa_clausable(SantaClaus.new) # must return TRUE

is_santa_clausable(NotSantaClaus.new) # must return FALSE

```

## Additional Information on this Topic



* [Duck Typing](http://en.wikipedia.org/wiki/Duck_typing) (Wikipedia)



---


🏷 `OBJECT-ORIENTED PROGRAMMING`


[View this Kata on Codewars.com](https://www.codewars.com/kata/52b50a20fa0e77b304000103)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
