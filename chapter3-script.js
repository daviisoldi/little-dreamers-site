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
            english: "The wolf arrived at the grandmother’s house before Little Red Riding Hood and knocked on the door. 'Who is it?' the grandmother asked.",
            portuguese: "O lobo chegou à casa da avó antes de Chapeuzinho Vermelho e bateu à porta. 'Quem está aí?' perguntou a avó."
        },
        {
            english: "'It’s me, Little Red Riding Hood,' the wolf replied, trying to imitate the girl’s voice. 'I’ve brought you sweets and medicine, Grandma.'",
            portuguese: "'Sou eu, Chapeuzinho Vermelho,' respondeu o lobo, tentando imitar a voz da neta. 'Trago doces e remédios para você, vovó.'"
        },
        {
            english: "The grandmother, who was bedridden due to illness, suspected nothing. She opened the door, and the wolf slipped in quietly.",
            portuguese: "A avó, que estava de cama devido à doença, não desconfiou de nada. Ela abriu a porta, e o lobo entrou sorrateiramente."
        },
        {
            english: "He approached the grandmother’s bed and locked her in the closet.",
            portuguese: "Ele se aproximou da cama da avó e e a prendeu no armário."
        },
        {
            english: "Meanwhile, Little Red Riding Hood continued her walk through the forest. She enjoyed the birds singing and the beauty of the nature around her.",
            portuguese: "Enquanto isso, Chapeuzinho Vermelho continuava sua caminhada pela floresta. Ela apreciava os pássaros cantando e a beleza da natureza ao seu redor."
        },
        {
            english: "The young girl was so distracted that she didn’t realize she had lost her way and was taking longer than expected to reach her grandmother’s house.",
            portuguese: "A jovem estava tão distraída que não percebeu que havia perdido seu caminho e estava demorando mais do que o esperado para chegar à casa da avó."
        },
        {
            english: "Finally, Little Red Riding Hood arrived at her grandmother’s house, and to her surprise, the door was open. She went inside and saw her grandmother lying in bed, with the hood pulled down over her face.",
            portuguese: "Finalmente, Chapeuzinho Vermelho chegou à casa da avó, e para sua surpresa, a porta estava aberta. Ela entrou e viu sua avó deitada na cama, com o capuz puxado para baixo sobre o rosto."
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
        localStorage.setItem('chapter3_completed', 'true');
        completionModal.classList.remove('hidden');
    });
    modalOkBtn.addEventListener('click', () => {
        window.location.href = 'game.html';
    });
    renderPage();
});