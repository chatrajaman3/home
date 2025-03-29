document.addEventListener('DOMContentLoaded', function() {
    const textbooksLink = document.getElementById('textbooks-link');
    const textbooksContainer = document.getElementById('textbooks-container');

    if (textbooksLink && textbooksContainer) {
        textbooksLink.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            fetch(target)
                .then(response => response.text())
                .then(html => {
                    textbooksContainer.innerHTML = html;
                    //Reinitialize the scripts that are used in the textbooks.html
                    if(typeof initScripts === 'function'){
                        initScripts()
                    }
                })
                .catch(error => {
                    console.error('Error loading textbooks:', error);
                    textbooksContainer.innerHTML = '<p>Failed to load textbooks.</p>';
                });
        });
    }
});

function initScripts(){
    fetch('Textbooks/textbooks.json')
        .then(response => response.json())
        .then(data => {
            const textbooksList = document.getElementById('textbooks-list');
            let html = '';
            data.forEach(textbook => {
                html += `<div class="textbook-item col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
                            <a href="${textbook.downloadLink}" target="_blank" class="textbook-link">
                                <div class="overlay">
                                    <div class="portfolio-item-content">
                                        <h3>${textbook.title}</h3>
                                        <p>${textbook.authors}</p>
                                    </div>
                                </div>
                            </a>
                        </div>`;
            });
            textbooksList.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching textbooks:', error);
            document.getElementById('textbooks-list').innerHTML = '<p>Failed to load textbooks.</p>';
        });
}