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
            english: "One night, a terrible storm raged at the surface. A large ship was caught in the waves.",
            portuguese: "Uma noite, uma terrível tempestade atingiu a superfície. Um grande navio foi pego pelas ondas."
        },
        {
            english: "Ariel watched as the ship sank. She saw a handsome young man fall into the water. It was Prince Eric.",
            portuguese: "Ariel assistiu enquanto o navio afundava. Ela viu um belo jovem cair na água. Era o Príncipe Eric."
        },
        {
            english: "She bravely swam through the wreckage and rescued him, pulling him to the shore.",
            portuguese: "Ela bravamente nadou pelos destroços e o resgatou, levando-o para a praia."
        },
        {
            english: "Ariel sang to him. When he started to wake up, she quickly dove back into the sea.",
            portuguese: "Ariel cantou para ele. Quando ele começou a acordar, ela rapidamente mergulhou de volta no mar."
        },
        {
            english: "Prince Eric only remembered her beautiful voice. Ariel was now truly in love.",
            portuguese: "O Príncipe Eric apenas se lembrava da bela voz dela. Ariel estava agora verdadeiramente apaixonada."
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
        localStorage.setItem('mermaid_chapter2_completed', 'true'); // Salva o Cap 2
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-mermaid.html';
    });
    
    // 3. Renderiza a página com o idioma correto
    renderPage();
});