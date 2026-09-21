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
            english: "The Little Prince missed his rose and decided it was time to return to his planet.",
            portuguese: "O Pequeno Príncipe sentiu falta de sua rosa e decidiu que era hora de retornar ao seu planeta."
        },
        {
            english: "His body was too heavy to travel back. He found a yellow snake in the desert.",
            portuguese: "Seu corpo era muito pesado para viajar de volta. Ele encontrou uma cobra amarela no deserto."
        },
        {
            english: "The prince was not afraid. 'You will look at the stars,' he told the pilot. 'My star will be one of them.'",
            portuguese: "O príncipe não estava com medo. 'Você olhará para as estrelas,' ele disse ao piloto. 'Minha estrela será uma delas.'"
        },
        {
            english: "The snake bit him, and his body fell to the sand. But his spirit was free to return to Asteroid B-612.",
            portuguese: "A cobra o picou, e seu corpo caiu na areia. Mas seu espírito estava livre para retornar ao Asteroide B-612."
        },
        {
            english: "The pilot fixed his plane. When he looks at the stars, he remembers his friend, the Little Prince.",
            portuguese: "O piloto consertou seu avião. Quando ele olha para as estrelas, ele se lembra de seu amigo, o Pequeno Príncipe."
        }
    ];

    let currentPageIndex = 0;
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
    
    translateBtn.addEventListener('click', () => { 
        isTranslated = !isTranslated;
        localStorage.setItem('language_preference', isTranslated); 
        renderPage();
    });
    
    completeBtn.addEventListener('click', () => {
        localStorage.setItem('prince_chapter4_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = '../pages/game-prince.html';
    });
    
    renderPage();
});