const legalColors = ['Beige', 'Khaki', 'Brown', 'White', 'Black', 'Blue', 'Light Blue', 'Red', 'Burgundy', 'Purple', 'Pink', 'Fuchsia', 'Green', 'Orange', 'Yellow', 'Gold', 'Silver', 'Multicolor']

const facets = document.querySelectorAll('.filter-color .facets__item input')
facets.forEach(el => {
    if (!legalColors.includes(el.value.trim())) {
        el.parentElement.classList.add('hiddenColor')
    }
})


$(document).on('click', '.faq_articles__title', function() {
    console.log($(this))
    $(this).toggleClass('open')
    $(this).next().slideToggle('fast')
})