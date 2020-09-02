---
title: Comprehensions in Python
description: Let's learn about comprehensions in Python
date: 2020-08-31
---

Python does not stop to surprise me. I am currently exploring comprehensions and decided to share some tips about it.
This is an exciting and powerful feature that allows us to write expressive code in a single line. Comprehension creates new sequences (lists, dictionaries, sets...) using sequences already defined.

**List Comprehension** can be used to replace for loops.

Suppose we want to create a list of squares of even numbers. The first thing that comes in mind would be using for loop, like the one below:

```Python
#Iterating over a list using for loop
new_list = []
for n in range(10):
      if n % 2 == 0:
         new_list.append(n**2)
print(new_list)

#output
[0, 4, 16, 36, 64]
```
Let’s see how to rewrite it in a single line of code

```Python
#Iterating over a list using list comprehension
new_list = [n ** 2 for n in range(10) if n % 2 == 0]
print(new_list)

#output
[0, 4, 16, 36, 64]
```
A basic form of List Comprehension is made as follows:
`new_list = [expression for item in list]`

In case of our example where we used conditional logic:
`new_list = [expression for item in list (if conditional)]`

**Dictionary Comprehension** is similar, but we need the key: value pairs to create a dictionary.

```Python
#Dictionary Comprehension
new_dict = {n: n ** 2 for n in range(10) if n % 2 == 0}
print(new_dict)

#output
{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}
```
Less popular is **Set Comprehension**, which works in a similar way. It returns a set, which means the elements inside cannot contain any duplicates.


```Python
#Set Comprehension
numbers = [10, 10, 20, 30, 12, -20]
new_set = {n**2 for n in numbers}
print(new_set)

#output
{100, 144, 400, 900}
```

List comprehension can help us to write elegant code, but sometimes it is not the right choice. We should avoid writing long list comprehensions in one line to ensure that our final code is readable. Otherwise, it’s better to choose an alternative approach.

You can learn more about Comprehensions <span style="background-color:white">[here](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)</span>
