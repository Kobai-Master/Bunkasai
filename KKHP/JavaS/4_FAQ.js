document.addEventListener('DOMContentLoaded', function() {
    var faqs = document.querySelectorAll('.faq h2');
    
    faqs.forEach(function(faq) {
        faq.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
