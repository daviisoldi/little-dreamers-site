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
            english: "The Little Prince loved his flower. She was a beautiful, proud rose.",
            portuguese: "O Pequeno Príncipe amava sua flor. Ela era uma rosa linda e orgulhosa."
        },
        {
            english: "She was also very vain and demanding. 'I need a screen to protect me from the wind,' she would say.",
            portuguese: "Ela também era muito vaidosa e exigente. 'Preciso de um biombo para me proteger do vento,' ela dizia."
        },
        {
            english: "The prince took good care of her, but he felt she was ungrateful. He decided to leave his planet.",
            portuguese: "O príncipe cuidava bem dela, mas sentia que ela era ingrata. Ele decidiu deixar seu planeta."
        },
        {
            english: "He visited many other small planets, meeting a King, a vain man, and a geographer.",
            portuguese: "Ele visitou muitos outros pequenos planetas, conhecendo um Rei, um homem vaidoso e um geógrafo."
        },
        {
            english: "Finally, the geographer told him to visit the planet Earth.",
            portuguese: "Finalmente, o geógrafo disse a ele para visitar o planeta Terra."
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
        localStorage.setItem('prince_chapter2_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-prince.html';
    });
    
    renderPage();
});