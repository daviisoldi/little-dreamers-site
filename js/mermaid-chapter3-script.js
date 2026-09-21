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
            english: "Ariel was desperate to see the prince. Two eels told her about the evil sea witch, Ursula.",
            portuguese: "Ariel estava desesperada para ver o príncipe. Duas enguias lhe falaram sobre a malvada bruxa do mar, Úrsula."
        },
        {
            english: "Ariel went to Ursula's dark lair. The witch offered her a deal.",
            portuguese: "Ariel foi para o covil sombrio de Úrsula. A bruxa lhe ofereceu um acordo."
        },
        {
            english: "'I will give you legs for three days,' Ursula said. 'But you must give me your voice.'",
            portuguese: "'Eu lhe darei pernas por três dias,' disse Úrsula. 'Mas você deve me dar a sua voz.'"
        },
        {
            english: "'Before the sun sets on the third day, you must get a true love's kiss from the prince.'",
            portuguese: "'Antes do pôr do sol no terceiro dia, você deve conseguir um beijo de amor verdadeiro do príncipe.'"
        },
        {
            english: "'If you fail, you will belong to me forever!' Desperate, Ariel agreed and signed the contract.",
            portuguese: "'Se você falhar, pertencerá a mim para sempre!' Desesperada, Ariel concordou e assinou o contrato."
        },
        {
            english: "Her tail became legs, but she could no longer speak. Her friends helped her to the surface.",
            portuguese: "Sua cauda se tornou pernas, mas ela não podia mais falar. Seus amigos a ajudaram a ir para a superfície."
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
        localStorage.setItem('mermaid_chapter3_completed', 'true'); // Salva o Cap 3
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-mermaid.html';
    });
    
    // 3. Renderiza a página com o idioma correto
    renderPage();
});