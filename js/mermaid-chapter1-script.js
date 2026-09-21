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
            english: "Deep under the sea, lived a young mermaid princess named Ariel.",
            portuguese: "Nas profundezas do mar, vivia uma jovem princesa sereia chamada Ariel."
        },
        {
            english: "She had a beautiful voice and a curious heart, and she loved to collect human objects.",
            portuguese: "Ela tinha uma bela voz e um coração curioso, e adorava colecionar objetos humanos."
        },
        {
            english: "Her father, King Triton, worried about her. 'The human world is dangerous, Ariel. You must stay away,' he commanded.",
            portuguese: "Seu pai, o Rei Tritão, se preocupava com ela. 'O mundo humano é perigoso, Ariel. Você deve ficar longe,' ele ordenou."
        },
        {
            english: "But Ariel dreamed of one day walking on land and being part of their world.",
            portuguese: "Mas Ariel sonhava em um dia andar na terra e ser parte do mundo deles."
        }
    ];

    let currentPageIndex = 0;
    
    // --- LÓGICA DO IDIOMA ---
    // 1. Lê a preferência do localStorage
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
    
    // 2. Salva a preferência no localStorage
    translateBtn.addEventListener('click', () => { 
        isTranslated = !isTranslated;
        localStorage.setItem('language_preference', isTranslated); 
        renderPage();
    });
    
    completeBtn.addEventListener('click', () => {
        localStorage.setItem('mermaid_chapter1_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = '../pages/game-mermaid.html';
    });
    
    // 3. Renderiza a página com o idioma correto
    renderPage();
});