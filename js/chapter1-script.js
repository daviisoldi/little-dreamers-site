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
            english: "Once upon a time, there was a young girl named Little Red Riding Hood, so called because of the red hood her grandmother had given her.",
            portuguese: "Havia uma vez uma jovem chamada Chapeuzinho Vermelho, assim chamada devido ao seu capuz vermelho que sua avó lhe dera."
        },
        {
            english: "She lived in a small house at the edge of the forest, and everyone knew her by her lovely red hood.",
            portuguese: "Ela vivia em uma pequena casa na beira da floresta, e todos a conheciam por seu adorável capuz vermelho."
        },
        {
            english: "Little Red Riding Hood was a curious and brave girl, always eager for adventures.",
            portuguese: "Chapeuzinho Vermelho era uma menina curiosa e corajosa, sempre ansiosa por aventuras."
        },
        {
            english: "On a bright sunny morning, her mother called her and said: 'Little Red Riding Hood, your grandmother is sick and lives on the other side of the forest.'",
            portuguese: "Em uma manhã de sol brilhante, sua mãe chamou-a e disse: 'Chapeuzinho Vermelho, sua avó está doente e mora do outro lado da floresta.'"
        },
        {
            english: "'I’d like you to take this basket of sweets and some medicine to her.'",
            portuguese: "'Gostaria que você levasse este cesto de doces e um pouco de remédio para ela.'"
        },
        {
            english: "Little Red Riding Hood promptly agreed, excited by the idea of making this special visit to her beloved grandmother.",
            portuguese: "Chapeuzinho Vermelho prontamente concordou, empolgada com a ideia de fazer essa visita especial à sua querida avó."
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
        localStorage.setItem('chapter1_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    modalOkBtn.addEventListener('click', () => {
        window.location.href = '../game.html';
    });
    renderPage();
});