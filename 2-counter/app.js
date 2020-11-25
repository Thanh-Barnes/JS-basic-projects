
// set initial count
let count = 0;

// set value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // e -> event
        const styles = e.currentTarget.classList;

        // increase or decrease counter
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        };

        // change color depending on count
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black'
        };

        // use textContent instead of innerHTML as it is faster and not parsed as HTML
        value.textContent = count;
    });
});



