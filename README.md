jquery-autofocus
=======================

Finds the first input with the autofocus property and focuses it

```js
$('#myForm').autofocus();
```

Why - Some browsers only autofocus an element the first time it's displayed. In single page apps, the same element
may be hidden/displayed several times, and it should keep the autofocus behaviour.
