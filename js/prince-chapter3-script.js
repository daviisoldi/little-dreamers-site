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
            english: "On Earth, the Little Prince met a fox. 'Will you play with me?' asked the prince. 'I am so lonely.'",
            portuguese: "Na Terra, o Pequeno Príncipe encontrou uma raposa. 'Você quer brincar comigo?' perguntou o príncipe. 'Estou tão sozinho.'"
        },
        {
            english: "'I cannot play with you,' said the fox. 'I am not tamed.' The fox asked the prince to 'tame' him.",
            portuguese: "'Eu não posso brincar com você,' disse a raposa. 'Eu não estou cativada.' A raposa pediu ao príncipe para 'cativá-la'."
        },
        {
            english: "To 'tame' means to build ties. The fox taught the prince about patience and responsibility.",
            portuguese: "'Cativar' significa criar laços. A raposa ensinou ao príncipe sobre paciência e responsabilidade."
        },
        {
            english: "The prince realized he had 'tamed' his rose, and that she was unique to him, even if there were many other roses.",
            portuguese: "O príncipe percebeu que ele havia 'cativado' sua rosa, e que ela era única para ele, mesmo que houvesse muitas outras rosas."
        },
        {
            english: "The fox told him a secret: 'It is only with the heart that one can see rightly; what is essential is invisible to the eye.'",
            portuguese: "A raposa lhe contou um segredo: 'Só se vê bem com o coração; o essencial é invisível aos olhos.'"
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
        localStorage.setItem('prince_chapter3_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game-prince.html';
    });
    
    renderPage();
});