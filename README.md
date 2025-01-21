## change-keyboard-layout

A JavaScript library to convert keystrokes in HTML fields from one keyboard layout to another and, optionally, filter out unwanted characters.

This library is particularly useful when working with multiple HID devices, such as a keyboard and a barcode scanner, configured with different layouts. For example, the keyboard might be configured in the local language, while the barcode scanner uses the English keyboard layout.

### Usage
To replace all instances of '1' typed with '2':

```html
<!DOCTYPE html>
<html>
<body>
  <input type="text" id="inputField" placeholder="Type here...">
  <script src="change-keyboard-layout.js"></script>
  <script>
    const inputField = document.getElementById('inputField');
    changeKeyboardLayout(inputField, { '1': '2' });
  </script>
</body>
</html>
```

### API

#### `changeKeyboardLayout(elt, map [, mask])`

- **`elt`**: An HTML element where the keyboard layout conversion should be applied. This can be an `<input>`, `<textarea>`, or other editable element.
- **`map`**: An object defining the mapping between characters to be replaced and their replacements.
- **`mask`** *(optional)*: A regular expression to validate characters as they are entered. This can be used, for example, to constrain input to decimal strings.

### Example

Replace characters and enforce a decimal mask:

```javascript
const inputField = document.getElementById('inputField');
changeKeyboardLayout(inputField, { '1': '2', '.': ',' }, /^[0-9.,]*$/);
```

### Todo

- Ensure compatibility with all kinds of HTML elements (e.g., `<input>` of various types, `<textarea>`, and contenteditable elements).
- Add default configurations for common input formats, such as decimal and hexadecimal.
- Implement standard conversions between English and locale-specific keyboard layouts.


