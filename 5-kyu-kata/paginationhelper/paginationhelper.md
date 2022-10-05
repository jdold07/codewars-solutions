# 5 kyu - PaginationHelper

##### **ID**: [515bb423de843ea99400000a](https://www.codewars.com/kata/515bb423de843ea99400000a) | **Slug**: [paginationhelper](https://www.codewars.com/kata/515bb423de843ea99400000a) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">5 kyu</span>

##### **First Published**: 2013-04-11 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner) | **Approved**: 2013-12-12 ***by*** [jhoffner](https://www.codewars.com/users/jhoffner)

##### **Languages Available**: ruby, coffeescript, javascript, java, haskell, python, csharp, crystal, kotlin

##### **My Completed Languages**: python, javascript ***as at*** 2022-10-05 | **Originally completed**: 2022-05-03

---

## Kata Description


For this exercise you will be strengthening your page-fu mastery.  You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array. 



The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant. 



The following are some examples of how this class is used:



```javascript 

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

helper.pageCount(); //should == 2

helper.itemCount(); //should == 6

helper.pageItemCount(0); //should == 4

helper.pageItemCount(1); // last page - should == 2

helper.pageItemCount(2); // should == -1 since the page is invalid



// pageIndex takes an item index and returns the page that it belongs on

helper.pageIndex(5); //should == 1 (zero based index)

helper.pageIndex(2); //should == 0

helper.pageIndex(20); //should == -1

helper.pageIndex(-10); //should == -1

```



```crystal

helper = PaginationHelper(Char).new(['a','b','c','d','e','f'], 4);

helper.page_count() # should == 2

helper.item_count() # should == 6

helper.page_item_count(0) # should == 4

helper.page_item_count(1) # last page - should == 2

helper.page_item_count(2) # should == -1 since the page is invalid



# pageIndex takes an item index and returns the page that it belongs on

helper.page_index(5) # should == 1 (zero based index)

helper.page_index(2) # should == 0

helper.page_index(20) # should == -1

helper.page_index(-10) # should == -1

```



```java

PaginationHelper<Character> helper = new PaginationHelper(Arrays.asList('a', 'b', 'c', 'd', 'e', 'f'), 4);

helper.pageCount(); //should == 2

helper.itemCount(); //should == 6

helper.pageItemCount(0); //should == 4

helper.pageItemCount(1); // last page - should == 2

helper.pageItemCount(2); // should == -1 since the page is invalid



// pageIndex takes an item index and returns the page that it belongs on

helper.pageIndex(5); //should == 1 (zero based index)

helper.pageIndex(2); //should == 0

helper.pageIndex(20); //should == -1

helper.pageIndex(-10); //should == -1

```

```coffeescript

helper = new PaginationHelper(['a','b','c','d','e','f'], 4)

helper.pageCount() # should == 2

helper.itemCount() # should == 6

helper.pageItemCount(0)  # should == 4

helper.pageItemCount(1) # last page - should == 2

helper.pageItemCount(2) # should == -1 since the page is invalid



# pageIndex takes an item index and returns the page that it belongs on

helper.pageIndex(5) # should == 1 (zero based index)

helper.pageIndex(2) # should == 0

helper.pageIndex(20) # should == -1

helper.pageIndex(-10) # should == -1

```

```ruby

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)

helper.page_count() # should == 2

helper.item_count() # should == 6

helper.page_item_count(0)  # should == 4

helper.page_item_count(1) # last page - should == 2

helper.page_item_count(2) # should == -1 since the page is invalid



# page_index takes an item index and returns the page that it belongs on

helper.page_index(5) # should == 1 (zero based index)

helper.page_index(2) # should == 0

helper.page_index(20) # should == -1

helper.page_index(-10) # should == -1 because negative indexes are invalid

```

```haskell

collection   = ['a','b','c','d','e','f']

itemsPerPage = 4



pageCount collection itemsPerPage       `shouldBe` 2

itemCount collection itemsPerPage       `shouldBe` 6



pageItemCount collection itemsPerPage 0 `shouldBe` Just 4 -- four of six items

pageItemCount collection itemsPerPage 1 `shouldBe` Just 2 -- the last two items

pageItemCount collection itemsPerPage 3 `shouldBe` Nothing -- page doesn't exist



pageIndex collection itemsPerPage  0    `shouldBe` Just 0 -- zero based index

pageIndex collection itemsPerPage  5    `shouldBe` Just 1 

pageIndex collection itemsPerPage 20    `shouldBe` Nothing

pageIndex collection itemsPerPage (-20) `shouldBe` Nothing

```

```python

helper = PaginationHelper(['a','b','c','d','e','f'], 4)

helper.page_count() # should == 2

helper.item_count() # should == 6

helper.page_item_count(0)  # should == 4

helper.page_item_count(1) # last page - should == 2

helper.page_item_count(2) # should == -1 since the page is invalid



# page_index takes an item index and returns the page that it belongs on

helper.page_index(5) # should == 1 (zero based index)

helper.page_index(2) # should == 0

helper.page_index(20) # should == -1

helper.page_index(-10) # should == -1 because negative indexes are invalid

```

```csharp

var helper = new PaginationHelper<char>(new List<char>{'a', 'b', 'c', 'd', 'e', 'f'}, 4);

helper.PageCount(); //should == 2

helper.ItemCount(); //should == 6

helper.PageItemCount(0); //should == 4

helper.PageItemCount(1); // last page - should == 2

helper.PageItemCount(2); // should == -1 since the page is invalid



// pageIndex takes an item index and returns the page that it belongs on

helper.PageIndex(5); //should == 1 (zero based index)

helper.PageIndex(2); //should == 0

helper.PageIndex(20); //should == -1

helper.PageIndex(-10); //should == -1

```



```kotlin

val helper = PaginationHelper<Char>(listOf('a', 'b', 'c', 'd', 'e', 'f'), 4)

helper.pageCount //should == 2

helper.itemCount //should == 6

helper.pageItemCount(0) //should == 4

helper.pageItemCount(1) // last page - should == 2

helper.pageItemCount(2) // should == -1 since the page is invalid



// pageIndex takes an item index and returns the page that it belongs on

helper.pageIndex(5) //should == 1 (zero based index)

helper.pageIndex(2) //should == 0

helper.pageIndex(20) //should == -1

helper.pageIndex(-10) //should == -1

```

---


🏷 `OBJECT-ORIENTED PROGRAMMING | ARRAYS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/515bb423de843ea99400000a)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*