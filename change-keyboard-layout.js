function changeKeyboardLayout(elt, map, mask) {
    elt.addEventListener('keydown', (event) => {
        const key = event.key;
        if (map[key]) {
            event.preventDefault();
            const cursor = elt.selectionStart;
            elt.value = elt.value.substring(0, cursor) + map[key] + elt.value.substring(elt.selectionEnd);
            elt.selectionStart = elt.selectionEnd = cursor + 1;
        } else if (key.length === 1 && mask && !mask.test(key)) {
            event.preventDefault();
        }
    });
}
