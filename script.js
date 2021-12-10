// DOMS
const categoriesContainer = document.querySelector('.categories__container');
const questionsAnswersContainer = document.querySelector('.question-answer');

// Select category questions and answers
categoriesContainer.addEventListener('click', function(e) {
    // must put here because element gets loaded late
    const categoriesItems = document.querySelectorAll('.categories__item');

    const clicked = e.target.closest('.categories__item');

    // Guard Clause
    if (!clicked) return;

    // Make selected category bold
    categoriesItems.forEach(c => c.classList.remove('categories__item-active'));
    clicked.classList.add('categories__item-active');

    // Display questions and answer related to said category
    document.querySelectorAll('.question-answer__container').forEach(c => c.classList.remove('question-answer__container-active'));
    document.querySelectorAll(`.question-answer__container-${clicked.dataset.category}`).forEach(c => c.classList.add('question-answer__container-active'));
})


// Reveal sections
// const allSections = document.querySelectorAll('.section');

// const revealSection = function(entries, observer) {
//     const [entry] = entries;
//     console.log(entry);
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove('section--hidden');
//     observer.unobserve(entry.target);
// };

// const sectionObserver = new IntersectionObserver
// (revealSection, {
//     root: null,
//     threshold: 0.15
// });

// allSections.forEach(function (section) {
//     sectionObserver.observe(section);
//     section.classList.add('section--hidden');
// })


// Display / Hide Questions and Answers
questionsAnswersContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.question-answer__question');
    // Guard Clause
    if (!clicked) return;

    const selectedAnswer = document.querySelector(`.question-answer__answer-${clicked.dataset.question}`);
    selectedAnswer.classList.add('question-answer__answer-active');
    // Make selected category bold
    // categoriesItems.forEach(c => c.classList.remove('categories__item-active'));
    // clicked.classList.add('categories__item-active');

    // // Display questions and answer related to said category
    // document.querySelectorAll('.question-answer__container').forEach(c => c.classList.remove('question-answer__container-active'));
    // document.querySelectorAll(`.question-answer__container-${clicked.dataset.category}`).forEach(c => c.classList.add('question-answer__container-active'));
})
