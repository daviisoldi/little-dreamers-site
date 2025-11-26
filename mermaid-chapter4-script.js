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
            english: "Prince Eric found Ariel on the beach. He liked her, but was sad she could not speak.",
            portuguese: "O Príncipe Eric encontrou Ariel na praia. Ele gostou dela, mas ficou triste por ela não poder falar."
        },
        {
            english: "But Ursula had a plan. She transformed into a girl named Vanessa and used Ariel's voice to bewitch the prince.",
            portuguese: "Mas Úrsula tinha um plano. Ela se transformou em uma garota chamada Vanessa e usou a voz de Ariel para enfeitiçar o príncipe."
        },
        {
            english: "On the third day, Eric was going to marry Vanessa. Ariel's friends discovered the truth!",
            portuguese: "No terceiro dia, Eric ia se casar com Vanessa. Os amigos de Ariel descobriram a verdade!"
        },
        {
            english: "They broke the magic shell around Vanessa's neck, and Ariel's voice returned.",
            portuguese: "Eles quebraram a concha mágica no pescoço de Vanessa, e a voz de Ariel retornou."
        },
        {
            english: "'Eric, it was you!' Eric realized the truth, but the sun set. Ariel turned back into a mermaid.",
            portuguese: "'Eric, era você!' Eric percebeu a verdade, mas o sol se pôs. Ariel voltou a ser sereia."
        },
        {
            english: "Ursula became a giant monster, but Eric defeated her with a ship.",
            portuguese: "Úrsula tornou-se um monstro gigante, mas Eric a derrotou com um navio."
        },
        {
            english: "King Triton saw their love. He used his magic to give Ariel permanent legs.",
            portuguese: "O Rei Tritão viu o amor deles. Ele usou sua magia para dar pernas permanentes a Ariel."
        },
        {
            english: "Ariel and Eric got married and lived happily ever after, uniting the worlds of land and sea.",
            portuguese: "Ariel e Eric se casaram e viveram felizes para sempre, unindo os mundos da terra e do mar."
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
        localStorage.setItem('mermaid_chapter4_completed', 'true'); // Salva o Cap 4
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-mermaid.html';
    });
    
    // 3. Renderiza a página com o idioma correto
    renderPage();
});