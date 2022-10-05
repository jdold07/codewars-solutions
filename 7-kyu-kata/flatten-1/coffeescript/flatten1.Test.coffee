# 7 kyu - Flatten  [ ID: 5250a89b1625e5decd000413  (flatten-1) ]
# URL: https://www.codewars.com/kata/5250a89b1625e5decd000413
# Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | ARRAYS | FUNDAMENTALS
# ******************************************************************************
Test.assertSimilar flatten([]),[]
Test.assertSimilar flatten([1,2,3]),[1,2,3]
Test.assertSimilar flatten([[1,2,3],["a","b","c"],[1,2,3]]),[1,2,3,"a","b","c",1,2,3]
Test.assertSimilar flatten([[3,4,5],[[9,9,9]],["a,b,c"]]),[3,4,5,[9,9,9],"a,b,c"]
Test.assertSimilar flatten([[[3],[4],[5]],[9],[9],[8],[[1,2,3]]]),[[3],[4],[5],9,9,8,[1,2,3]]

deepeq = (x,y) -> JSON.stringify(x) == JSON.stringify(y)
Test.expect deepeq(flatten((j*j % i for j in [1..i]) for i in [15..10]),[1,4,9,1,10,6,4,4,6,10,1,9,4,1,0,1,4,9,2,11,8,7,8,11,2,9,4,1,0,1,4,9,3,12,10,10,12,3,9,4,1,0,1,4,9,4,1,0,1,4,9,4,1,0,1,4,9,5,3,3,5,9,4,1,0,1,4,9,6,5,6,9,4,1,0])
Test.expect deepeq(flatten(([j*j % i] for j in [1..i]) for i in [15..20]), [[1],[4],[9],[1],[10],[6],[4],[4],[6],[10],[1],[9],[4],[1],[0],[1],[4],[9],[0],[9],[4],[1],[0],[1],[4],[9],[0],[9],[4],[1],[0],[1],[4],[9],[16],[8],[2],[15],[13],[13],[15],[2],[8],[16],[9],[4],[1],[0],[1],[4],[9],[16],[7],[0],[13],[10],[9],[10],[13],[0],[7],[16],[9],[4],[1],[0],[1],[4],[9],[16],[6],[17],[11],[7],[5],[5],[7],[11],[17],[6],[16],[9],[4],[1],[0],[1],[4],[9],[16],[5],[16],[9],[4],[1],[0],[1],[4],[9],[16],[5],[16],[9],[4],[1],[0]])
Test.expect deepeq(flatten(([(k*i % j for k in [1..j])] for j in [1..i]) for i in [15..20]), [[[0]],[[1,0]],[[0,0,0]],[[3,2,1,0]],[[0,0,0,0,0]],[[3,0,3,0,3,0]],[[1,2,3,4,5,6,0]],[[7,6,5,4,3,2,1,0]],[[6,3,0,6,3,0,6,3,0]],[[5,0,5,0,5,0,5,0,5,0]],[[4,8,1,5,9,2,6,10,3,7,0]],[[3,6,9,0,3,6,9,0,3,6,9,0]],[[2,4,6,8,10,12,1,3,5,7,9,11,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0]],[[0,0]],[[1,2,0]],[[0,0,0,0]],[[1,2,3,4,0]],[[4,2,0,4,2,0]],[[2,4,6,1,3,5,0]],[[0,0,0,0,0,0,0,0]],[[7,5,3,1,8,6,4,2,0]],[[6,2,8,4,0,6,2,8,4,0]],[[5,10,4,9,3,8,2,7,1,6,0]],[[4,8,0,4,8,0,4,8,0,4,8,0]],[[3,6,9,12,2,5,8,11,1,4,7,10,0]],[[2,4,6,8,10,12,0,2,4,6,8,10,12,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0]],[[1,0]],[[2,1,0]],[[1,2,3,0]],[[2,4,1,3,0]],[[5,4,3,2,1,0]],[[3,6,2,5,1,4,0]],[[1,2,3,4,5,6,7,0]],[[8,7,6,5,4,3,2,1,0]],[[7,4,1,8,5,2,9,6,3,0]],[[6,1,7,2,8,3,9,4,10,5,0]],[[5,10,3,8,1,6,11,4,9,2,7,0]],[[4,8,12,3,7,11,2,6,10,1,5,9,0]],[[3,6,9,12,1,4,7,10,13,2,5,8,11,0]],[[2,4,6,8,10,12,14,1,3,5,7,9,11,13,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0]],[[0,0]],[[0,0,0]],[[2,0,2,0]],[[3,1,4,2,0]],[[0,0,0,0,0,0]],[[4,1,5,2,6,3,0]],[[2,4,6,0,2,4,6,0]],[[0,0,0,0,0,0,0,0,0]],[[8,6,4,2,0,8,6,4,2,0]],[[7,3,10,6,2,9,5,1,8,4,0]],[[6,0,6,0,6,0,6,0,6,0,6,0]],[[5,10,2,7,12,4,9,1,6,11,3,8,0]],[[4,8,12,2,6,10,0,4,8,12,2,6,10,0]],[[3,6,9,12,0,3,6,9,12,0,3,6,9,12,0]],[[2,4,6,8,10,12,14,0,2,4,6,8,10,12,14,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0]],[[1,0]],[[1,2,0]],[[3,2,1,0]],[[4,3,2,1,0]],[[1,2,3,4,5,0]],[[5,3,1,6,4,2,0]],[[3,6,1,4,7,2,5,0]],[[1,2,3,4,5,6,7,8,0]],[[9,8,7,6,5,4,3,2,1,0]],[[8,5,2,10,7,4,1,9,6,3,0]],[[7,2,9,4,11,6,1,8,3,10,5,0]],[[6,12,5,11,4,10,3,9,2,8,1,7,0]],[[5,10,1,6,11,2,7,12,3,8,13,4,9,0]],[[4,8,12,1,5,9,13,2,6,10,14,3,7,11,0]],[[3,6,9,12,15,2,5,8,11,14,1,4,7,10,13,0]],[[2,4,6,8,10,12,14,16,1,3,5,7,9,11,13,15,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0]],[[0,0]],[[2,1,0]],[[0,0,0,0]],[[0,0,0,0,0]],[[2,4,0,2,4,0]],[[6,5,4,3,2,1,0]],[[4,0,4,0,4,0,4,0]],[[2,4,6,8,1,3,5,7,0]],[[0,0,0,0,0,0,0,0,0,0]],[[9,7,5,3,1,10,8,6,4,2,0]],[[8,4,0,8,4,0,8,4,0,8,4,0]],[[7,1,8,2,9,3,10,4,11,5,12,6,0]],[[6,12,4,10,2,8,0,6,12,4,10,2,8,0]],[[5,10,0,5,10,0,5,10,0,5,10,0,5,10,0]],[[4,8,12,0,4,8,12,0,4,8,12,0,4,8,12,0]],[[3,6,9,12,15,1,4,7,10,13,16,2,5,8,11,14,0]],[[2,4,6,8,10,12,14,16,0,2,4,6,8,10,12,14,16,0]],[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]])
