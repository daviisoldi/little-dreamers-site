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
            english: "As she walked through the forest, a cunning wolf was watching her. He had heard about the delicious sweets Little Red Riding Hood was taking to her grandmother and was planning to have a tasty snack.",
            portuguese: "Enquanto ela caminhava pela floresta, um lobo astuto a observava. Ele tinha ouvido falar dos deliciosos doces que Chapeuzinho Vermelho estava levando para sua avó e planejava fazer um lanche saboroso."
        },
        {
            english: "The wolf decided to come up with a sly plan to reach the grandmother’s house before Little Red Riding Hood.",
            portuguese: "O lobo decidiu criar um plano ardiloso para chegar à casa da avó antes de Chapeuzinho Vermelho."
        },
        {
            english: "'Where are you going, my sweet girl?' the wolf asked, stepping out from behind a tree.",
            portuguese: "'Onde você está indo, minha doce menina?' o lobo perguntou, saindo de trás de uma árvore."
        },
        {
            english: "'I'm going to visit my sick grandmother on the other side of the forest and bring her some sweets and medicine,' Little Red Riding Hood replied with a smile.",
            portuguese: "'Estou indo visitar minha avó doente do outro lado da floresta e levar-lhe doces e remédios,' respondeu Chapeuzinho Vermelho com um sorriso."
        },
        {
            english: "Little Red Riding Hood, who was naïve, didn’t notice the wolf’s cunning and answered innocently:",
            portuguese: "Chapeuzinho Vermelho, que era ingênua, não percebeu a astúcia do lobo e respondeu inocentemente:"
        },
        {
            english: "'My grandmother lives near the big tree at the end of the path. You can't miss it.'",
            portuguese: "'Minha avó mora perto da grande árvore no final do caminho. Você não pode errar.'"
        },
        {
            english: "The wolf thanked her and, in a hurry, ran down the shortest path to the grandmother’s house, while Little Red Riding Hood continued along the trail.",
            portuguese: "O lobo agradeceu e, com pressa, correu pelo caminho mais curto para a casa da avó, enquanto Chapeuzinho Vermelho continuava seu caminho pela trilha."
        }
    ];

    let currentPageIndex = 0;
    let isTranslated = false;

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
    translateBtn.addEventListener('click', () => { isTranslated = !isTranslated; renderPage(); });
    completeBtn.addEventListener('click', () => {
        localStorage.setItem('chapter2_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game.html';
    });
    renderPage();
});