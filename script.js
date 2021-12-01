// get data from json
fetch('./faq.json')
    .then(res => res.json())
    .then(data => {
        const categoriesEl = document.querySelector('.categories');
        // adding categories
        for (var i = 0; i < Object.keys(data).length; i++) {
            var category = Object.keys(data)[i];
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(category));
            li.classList.add("categories__item")
            categoriesEl.appendChild(li);
        }
    });

// DOMS
