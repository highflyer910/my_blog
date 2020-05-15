---
title: What is a Python docstring?
description: A brief introduction to Python docstrings
date: 2020-05-15
---

Code documentation is an integral part of Python development experience. Sometimes there may be more documentation in the source than code itself. It helps you understand what a function or class does, what arguments it accepts, and what it returns.

Python provides a handy way to add documentation. Documentation string or docstring is a string literal, and it is used in classes, modules, functions, or method definitions. The docstring is very similar to a comment but is represented with the triple-double quote (""") .

Docstrings are accessible by `__doc__` attribute of the objects and also with the built-in `help()` function. 

Docstring example:
![Alt Text](https://res.cloudinary.com/highflyer910/image/upload/v1589577574/1_1_httqnc.jpg)

In this example, we have defined a cat function that returns meow. We have declared a docstring that explains what the function does. To get the docstring of a function, we need to display the doc attribute (`print(cat.__doc__)`)

There are a couple of ways to write docstring, i.e., one-line docstring and multi-line docstring.

**One-line Docstrings**

Depending on the complexity of the function, method, or class, a one-line docstring may be perfectly appropriate. 

For example:
![Alt Text](https://res.cloudinary.com/highflyer910/image/upload/v1589577860/es_obzisw.png)

The closing quotes are on the same line as the opening quotes. You can use one of the quotes, i.e., triple single or triple-double quotes. There's no blank line either before or after the docstring. 

**Multi-line Docstrings**

In more complex cases, it is a better idea to give additional information about the code. Multi-line docstrings consist of a summary line like a one-line docstring, followed by a single blank line with the descriptive text. 

The general format for writing a multi-line docstring is:
![Alt Text](https://res.cloudinary.com/highflyer910/image/upload/v1589577629/carbon_1_1_fxkncg.png)

As you can see, docstring improves usability and code readability. It will be easy for a programmer who didn't write the code to understand what this or that function does. The most important thing to remember when working with docstrings is that you write the docstring for people who will use your code.

Yet, docstrings is a very vast topic, and If you would like to learn more, then check out the Python DocStrings [PEP257](https://www.python.org/dev/peps/pep-0257/).
