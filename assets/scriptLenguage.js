// script.js
document.getElementById('btn-pt').addEventListener('click', function() {
    switchLanguage('pt');
});

document.getElementById('btn-en').addEventListener('click', function() {
    switchLanguage('en');
});

function switchLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}