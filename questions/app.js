//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    
    const button = question.querySelector('.question-btn');
    
    button.addEventListener('click', () => {

        // question and item are the same, just use item here to differentiate for readability
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-text')
            };
        });
        question.classList.toggle('show-text')
    });
});


// traversing the dom

// const btns = document.querySelectorAll('.question-btn');
// const question = document.querySelector('.question');

// btns.forEach((btn) => {

//     btn.addEventListener('click', (event) => {
//         const question = event.currentTarget.parentElement.parentElement;

//         question.classList.toggle('show-text');
//     });
// }); 







