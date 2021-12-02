// get data from json
fetch('./faq.json')
    .then(res => res.json())
    .then(data => {
        // adding categories
        // for (var i = 0; i < Object.keys(data).length; i++) {
        //     var category = Object.keys(data)[i];
            
        //     var li = document.createElement('li');
        //     li.appendChild(document.createTextNode(category));
        //     li.classList.add("categories__item")
        //     li.setAttribute('data-category', i)
        //     categoriesContainer.appendChild(li);
        // }

        Object.entries(data).forEach(([category, content], index) => {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(category));
            li.classList.add("categories__item")
            li.setAttribute('data-category', index)
            categoriesContainer.appendChild(li);
            Object.entries(content).forEach(([question, answer], index) => {
                
            });
        });
    });

// DOMS
const categoriesContainer = document.querySelector('.categories__container');
const questionAnswerContainer = document.querySelector('.question-answer__container');

categoriesContainer.addEventListener('click', function(e) {
    // must put here because element gets loaded late
    const categoriesItems = document.querySelectorAll('.categories__item');

    const clicked = e.target.closest('.categories__item');

    // Guard Clause
    if (!clicked) return;

    categoriesItems.forEach(c => c.classList.remove('categories__item-active'));
    clicked.classList.add('categories__item-active');
})