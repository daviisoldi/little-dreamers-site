document.addEventListener('DOMContentLoaded', () => {
    const storyTextElement = document.querySelector('.story-text');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const translateBtn = document.getElementById('translate-btn');
    const completeBtn = document.getElementById('complete-btn');
    const completionModal = document.getElementById('completion-modal');
    const modalOkBtn = document.getElementById('modal-ok-btn');

    const storyPages = [
        {
            english: "A pilot crashed his plane in the middle of the Sahara desert. He was all alone.",
            portuguese: "Um piloto caiu com seu avião no meio do deserto do Saara. Ele estava completamente sozinho."
        },
        {
            english: "Then, a small boy with golden hair appeared. 'Please,' he said, 'draw me a sheep!'",
            portuguese: "Então, um pequeno garoto de cabelos dourados apareceu. 'Por favor,' ele disse, 'desenhe-me um carneiro!'"
        },
        {
            english: "This was the Little Prince. He came from a tiny planet called Asteroid B-612.",
            portuguese: "Este era o Pequeno Príncipe. Ele veio de um planeta minúsculo chamado Asteroide B-612."
        },
        {
            english: "On his planet, there were three small volcanoes and one very special flower.",
            portuguese: "Em seu planeta, havia três pequenos vulcões e uma flor muito especial."
        }
    ];

    let currentPageIndex = 0;
    // Lógica do idioma
    let isTranslated = localStorage.getItem('language_preference') === 'true';

    function renderPage() {
        const currentPage = storyPages[currentPageIndex];
        if (isTranslated) {
            storyTextElement.textContent = currentPage.portuguese;
            translateBtn.textContent = "Back to English";
            completeBtn.textContent = "Concluir";
        } else {
            storyTextElement.textContent = currentPage.english;
            translateBtn.textContent = "Translate";
            completeBtn.textContent = "Complete";
        }
        prevBtn.disabled = (currentPageIndex === 0);
        nextBtn.disabled = (currentPageIndex === storyPages.length - 1);
        if (currentPageIndex === storyPages.length - 1) {
            completeBtn.classList.remove('hidden');
        } else {
            completeBtn.classList.add('hidden');
        }
    }

    nextBtn.addEventListener('click', () => { if (currentPageIndex < storyPages.length - 1) { currentPageIndex++; renderPage(); } });
    prevBtn.addEventListener('click', () => { if (currentPageIndex > 0) { currentPageIndex--; renderPage(); } });
    
    // Salva a lógica do idioma
    translateBtn.addEventListener('click', () => { 
        isTranslated = !isTranslated;
        localStorage.setItem('language_preference', isTranslated); 
        renderPage();
    });
    
    completeBtn.addEventListener('click', () => {
        localStorage.setItem('prince_chapter1_completed', 'true'); // Salva progresso do Príncipe
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-prince.html'; // Volta para o mapa do Príncipe
    });
    
    renderPage();
});