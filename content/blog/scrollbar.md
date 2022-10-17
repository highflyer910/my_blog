---
title: Create Custom Scrollbar using CSS
description: How to customize a scrollbar using CSS
date: 2022-10-17 
---
I was always interested in learning about how to make a custom scrollbar and finally, I managed to do it.

First, let me show the components of a scrollbar. A scrollbar contains the thumb and the track. The thumb is the draggable scrolling handle and the track is the progress bar, the entire scrollbar itself.


![Scrollbar components](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q9un0a4mfjwl6o53qf1n.png)

**The Scrollbar Width**

First, we define the width of the scrollbar (width for vertical scrollbars and height for horizontal ones) using the following pseudo element: ``::-webkit-scrollbar``

```css
::--webkit-scrollbar {
    width: .6em;
}
```

**The Scrollbar Track**

We can style the scrollbar by shadows, border-radius, background-colors and use the pseudo element: ``::-webkit-scrollbar-track``

```css
::--webkit-scrollbar-track {
    background-color: transparent;
}
```

**The Scrollbar Thumb**

The scrollbar thumb can be styled by background-colors, gradients, shadows, border-radius. We use the pseudo element ``::-webkit-scrollbar-thumb`` for it.

```css
::--webkit-scrollbar-thumb {
    background-color: #e1d3cf;
    border-radius: 5px;
    border: .2em solid #25649a;
}
```

Other pseudo elements:
``::-webkit-scrollbar-button`` -  the arrows pointing upwards and downwards.
``::-webkit-scrollbar-corner`` - the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.

Here you can see a codepen demo and play with it:

{% codepen https://codepen.io/HighFlyer/pen/mdLoGMa %}

Unfortunately, this way works on Webkit-based browsers only. For Mozilla Firefox we can use only two parameters: ``scrollbar-color`` and ``scrollbar-width`` and they should be applied to the ``<html>`` element, not the ``<body>``.

The ``scrollbar-width`` has following values: ``auto``, ``inherit``, ``initial``, ``none``, ``revert``, ``thin`` and ``unset``. We can’t define a specific number.

With the ``scrollbar-color`` we define a color for both the scrollbar track and thumb as pair values.

```css
html {
   scrollbar-color: #e1d3cf #25649a;
   scrollbar-width: thin;
}
```

In this case, we can't use shadows, gradients, or rounded edges to style it.

That's all folks! :tada: Thank you for reading. For further information, please, check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar#browser_compatibility) resource.