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


// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver
(revealSection, {
    root: null,
    threshold: 0.15
});

allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})