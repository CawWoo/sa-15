
function filterItems(category) {
    const portfolioItems = document.querySelectorAll('.gallery-item');

    portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
}

const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-filter');
        filterItems(category);
    });
});
