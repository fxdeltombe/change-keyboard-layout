# change-keyboard-layout

A JavaScript library to convert keystrokes in html fields from a keyboard layout to another and, optionally, filter out unwanted characters.

It may be useful when using several HID devices such as a keyboard and a barcode scanner, configured in different layouts (typically the keyboard is configured in local language and the barcode scanner is configured in english keyboard layout).

### Usage
To replace all '1' typed with '2' :
```
<html>
<body>
  <input type="text" id="inputField" placeholder="Type here...">
  <script src="change-keyboard-layout.js"></script>
  <script>
    const inputField = document.getElementById('inputField');
    switchKeyboardLayout(inputField, {'1': '2'});
  </script>
</body>
</html>
```

### API
#### changeKeyboardLayout(elt, map [, mask])
* elt: an html element
* map: an object linking characters to be replaced and characters to replace with
* mask (optional): a regex to check characters entered with, for example in order to constraint decimal strings

### Todo
* check with all kinds of html elements (input of various types, textarea, editable elements)
* make default configurations : decimal, hexadecimal
* make standard English/locale conversions
