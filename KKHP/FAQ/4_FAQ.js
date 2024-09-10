document.addEventListener('DOMContentLoaded', function() {
    var faqs = document.querySelectorAll('.faq h2');
    
    faqs.forEach(function(faq) {
        faq.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            var symbol = this.querySelector('.toggle-symbol');
            
            // 回答の表示・非表示を切り替える
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                symbol.textContent = '＋';
            } else {
                answer.style.display = 'block';
                symbol.textContent = '−';
            }
        });
    });
});
