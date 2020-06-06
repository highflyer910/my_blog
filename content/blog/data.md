---
title: Python data structures (lists, tuples, dictionaries, sets)
description: Data strucutures in Python3 for beginners
date: 2020-06-05 
---
In this blog post, we are going to study a short overview of some data structures specific to Python3.

Python has four basic inbuilt data structures: Lists, Dictionary, Tuple, and Set. We will see how to use each of them and how they make life easier for us.

## **Python list**

Lists in Python are collections of elements. They can be as long as you want, and the individual elements can have the same type or not. The items in a list are separated by commas and enclosed in square brackets:

```python
some_list = [1, 2, 3, 4, 5]
some_list = ['a','b','c','d']
some_list = [7, 'hi', None, False, True, ['another', 'list']]
```

To access an element in a list, we use bracket notation and pass in the index. Lists in Python use a zero-based index:

```python
some_list = ['a', 1, False]
print(some_list[2]) #False
```
In addition, there are a number of inbuilt methods you can use. Here are some more ones:
 
append() - adds a value to the end of a list:
```python
some_list = [11,25,3]
some_list.append(10)
print(some_list) #[11,25,3,10]
```
clear() - removes all the values in a list:
```python
some_list = [1,2,3]
some_list.clear()
print(some_list) #[]
```
copy() - makes a shallow copy of a list:
```python
some_list = [2,3,4]
another_list = some_list.copy()
print(another_list) #[2, 3, 4]
```
count() - counts how many times an item appears in a list:
```python
some_list = [1,2,3,4,5,5,5,5]
some_list.count(1) #1
print(some_list.count(5)) #4
```
extend() - adds all elements of a list to some other list:
```python
some_list = [1,2,3]
some_list.extend([5,6,7])
print(some_list) #[1,2,3,5,6,7] 
```
index() - returns the index of an element. If the element is not found, index returns a ValueError:
```python
some_list = [4,8,6,4]
print(some_list.index(8)) #1
print(some_list.index(4)) #0 
- it only finds the index of the first matching element
print(some_list.index(12)) #ValueError
```
insert() - inserts an element to the list at the given index:
```python
some_list = [4,6,8]
some_list.insert(2,'awesome') #inserts 'awesome' at index 2
print(some_list) #[4,6,'awesome',8]
```
pop() - removes the last element from a list and returns the element removed:
```python
some_list = [3,4]
print(some_list.pop()) #4
print(some_list.pop()) #IndexError
```
pop() throws an error if you call it on an empty list.

remove() - removes the first occurrence of a value:
```python
some_list = [1,2,3,1]
some_list.remove(1)
print(some_list) #[2,3,1]
```
reverse() - reverses the order of all elements of the list:
```python
some_list = [1,2,3,4]
some_list.reverse()
print(some_list) #[4,3,2,1]
```
sort() - sorts all elements of a list in the ascending order:
```python
some_list = [1,4,3,2]
some_list.sort()
print(some_list) #[1,2,3,4]
```

## **Python Tuple**

Similar to a list, a tuple in Python is also a collection of items. The differences are that the tuples are immutable, which means we can not change the elements once assigned, and use parentheses, whereas lists use square brackets.
Because of immutability, operations on tuples are faster than on lists. 

```python
some_tuple = ('a', 'b', 'c', 'd')
```
To write a tuple containing a single value you have to include a comma, even though there is only one value:
```python
single_tuple = ('a',)
```

Following are some common methods used on tuples:

count() - returns the number of times a value appears in a tuple:
```python
some_tuple = (1,2,3,3,3)
print(some_tuple.count(1)) #1
print(some_tuple.count(3)) #3
```
index() - returns the index of the given element in the tuple:
```python
some_tuple = (1,2,3,3,3)
print(some_tuple.index(1)) #0
print(some_tuple.index(5)) #ValueError
```
## **Python Dictionary**

Dictionaries in Python are key value pairs. They are defined using curly braces, separating key value pairs with a comma, and placing a colon between the key and the value:

```python
weekdays = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
}
```
-keys in a dictionary must be unique (no two same keys)
-keys are immutable
-keys and values can be of any data type
-the keys() function returns a list of keys in a dictionary
-the values() function returns a list of values in a dictionary

Following are the common methods on dictionaries:

clear() - clears all the keys and values in a dictionary:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}
car.clear()
print(car) #{}
```
copy() - makes a copy of a dictionary:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.copy()
print(x) #{'brand': 'Maserati', 'model': 'Quattroporte'}
```
fromkeys() - creates key value pairs from comma separated values:
```python
keys = ('a', 'e', 'i', 'o', 'u')
value = 'vowel'

vowels = dict.fromkeys(keys, value) 
#{'a': 'vowel', 'u': 'vowel', 'o': 'vowel', 'e': 'vowel', 'i': 'vowel'}
```
get() - retrieves a  key in an object and returns None instead of a KeyError if the key does not exist:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.get('model')
print(x) #Quattroporte
```
items() - returns a list of tuples with each key-value pair:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.items()
print(x) #[('brand', 'Maserati'), ('model', 'Quattroporte')]
```
keys() - returns a dict_keys object containing all of the keys in an object:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.keys()
print(x) #(['brand', 'model'])
```
setdefault() - returns the value of the specified key:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.setdefault('model', 'Ghibli')
print(x) #Quattroporte 
```
update() - update keys and values in a dictionary with another set of key value:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}

x = car.update({'color': 'white'})
print(x) #{'brand': 'Maserati', 'model': 'Quattroporte', 'color': 'white'}
```
values() - returns a list of all the values in the dictionary:
```python
car = {
  'brand': 'Maserati',
  'model': 'Quattroporte'
}
x = car.values()
print(list(x)) #['Maserati', 'Quattroporte']
```
## **Python Set**

A set is an unordered collection of objects in Python. In addition to being iterable and mutable, sets do not have duplicate values. They can be useful if you need to keep track of a collection of elements, but don't care about ordering.
 
Here are some set methods:
 
add() - adds an element to a set. If the element is already in the set, the set doesn’t change:
```python
s = {1,2,3}
s.add(4)
print(s) #{1, 2, 3, 4}
s.add(4)
print(s) #{1,2,3,4}
```
clear() - removes all the items of the set:
```python
s = {1,2,3}
s.clear()
print(s) #set()
```
copy() - creates a copy of the set:
```python
s = {1,2,3}
another_s = s.copy()
print(another_s) #{1, 2, 3}
```
difference() - returns a new set with all the elements that are in the first set but not in the set passed to difference:
```python
set1 = {1,2,3}
set2 = {2,3,4}
x = set1.difference(set2) 
print(x) #{1}
y = set2.difference(set1) 
print(y) #{4}
```
intersection() - returns a new set containing all the elements that are in both sets: 
```python
set1 = {1,2,3}
set2 = {2,3,4}
x = set1.intersection(set2) 
print(x) #{2,3}
```
union - returns a union of two sets:
```python
set1 = {1,2,3}
set2 = {2,3,4}
x = set1.union(set2) 
print(x) #{1,2,3,4}
```
A good understanding of data structures is very important for developers. I hope this article will help you to understand data structures for your Python projects.