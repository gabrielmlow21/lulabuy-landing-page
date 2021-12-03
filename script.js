// DOMS
const categoriesContainer = document.querySelector('.categories__container');

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