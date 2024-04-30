window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled'); 
    }
});

window.addEventListener('load', function() {
    var facts = document.querySelectorAll('.fact');

    facts.forEach(function(fact, index) {
        if ((index + 1) % 4 !== 0 && (index + 1) % 4 !== 1) {
            fact.style.marginLeft = '12px';
            fact.style.marginRight = '12px';
        }
    });
});

