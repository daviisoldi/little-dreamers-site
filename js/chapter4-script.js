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
            english: "'Grandmother, what big eyes you have!' Little Red Riding Hood exclaimed as she approached the bed.",
            portuguese: "'Vovó, que olhos grandes você tem!' Chapeuzinho Vermelho exclamou quando se aproximou da cama."
        },
        {
            english: "'It’s to see you better, my dear,' the wolf replied, trying to imitate the grandmother’s voice.",
            portuguese: "'É para ver você melhor, minha querida,' respondeu o lobo, tentando imitar a voz da avó."
        },
        {
            english: "'Grandmother, what big ears you have!' Little Red Riding Hood noticed. 'It’s to hear you better, my dear,' the wolf answered again.",
            portuguese: "'Vovó, que orelhas grandes você tem!' Chapeuzinho Vermelho notou. 'E para ouvir você melhor, minha querida,' o lobo respondeu novamente."
        },
        {
            english: "Little Red Riding Hood began to grow suspicious. 'Grandmother, what a big mouth you have!'",
            portuguese: "Chapeuzinho Vermelho começou a desconfiar. 'Vovó, que boca grande você tem!'"
        },
        {
            english: "At that moment, the wolf jumped out of the bed and revealed his true identity. 'All the better to eat you with!' he roared, lunging toward Little Red Riding Hood.",
            portuguese: "Nesse momento, o lobo saltou da cama e revelou sua verdadeira identidade. 'Toda a melhor para te devorar!' ele rugiu, avançando em direção a Chapeuzinho Vermelho."
        },
        {
            english: "Frightened, Little Red Riding Hood ran outside and cried for help. Luckily, a hunter who was passing through the forest heard her screams and rushed to help.",
            portuguese: "Assustada, Chapeuzinho Vermelho correu para fora da casa e gritou por socorro. Por sorte, um caçador que passava pela floresta ouviu seus gritos e correu para ajudar."
        },
        {
            english: "The hunter quickly confronted the wolf, who tried to escape, but the hunter captured him. With the hunter’s help, Little Red Riding Hood was safe.",
            portuguese: "O caçador rapidamente confrontou o lobo, que tentou escapar, mas o caçador o capturou. Com a ajuda do caçador, Chapeuzinho Vermelho estava segura."
        },
        {
            english: "The wolf was taken back to the village and never threatened anyone’s life again.",
            portuguese: "O lobo foi levado de volta para a vila e nunca mais ameaçou a vida de ninguém."
        },
        {
            english: "Little Red Riding Hood thanked the hunter for his bravery and promised to be more careful in her future adventures.",
            portuguese: "Chapeuzinho Vermelho agradeceu ao caçador por sua coragem e prometeu ser mais cuidadosa em suas futuras aventuras."
        },
        {
            english: "She finally delivered the sweets and medicine to her grandmother, who was relieved to be safe.",
            portuguese: "Ela finalmente entregou os doces e o remédio para sua avó, que estava aliviada por estar a salvo."
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
        localStorage.setItem('chapter4_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game.html';
    });
    renderPage();
});