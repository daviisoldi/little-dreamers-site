document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica de Leitura do Progresso (Príncipe) ---
    const chapter1Completed = localStorage.getItem('prince_chapter1_completed') === 'true';
    const chapter2Completed = localStorage.getItem('prince_chapter2_completed') === 'true';
    const chapter3Completed = localStorage.getItem('prince_chapter3_completed') === 'true';
    const chapter4Completed = localStorage.getItem('prince_chapter4_completed') === 'true';

    // --- 2. Lógica de Desbloqueio dos Nós e Ícones ---
    if (chapter1Completed) {
        const chapter2 = document.getElementById('chapter2');
        if (chapter2) {
            chapter2.classList.remove('locked');
            chapter2.classList.add('active');
            const icon = chapter2.querySelector('.fa-lock');
            // Ícone Cap 2 (Rosa - fan representa a proteção ou a flor)
            if (icon) icon.className = 'fas fa-fan'; 
        }
    }
    if (chapter2Completed) {
        const chapter3 = document.getElementById('chapter3');
        if (chapter3) {
            chapter3.classList.remove('locked');
            chapter3.classList.add('active');
            const icon = chapter3.querySelector('.fa-lock');
            // Ícone Cap 3 (Raposa - paw)
            if (icon) icon.className = 'fas fa-paw'; 
        }
    }
    if (chapter3Completed) {
        const chapter4 = document.getElementById('chapter4');
        if (chapter4) {
            chapter4.classList.remove('locked');
            chapter4.classList.add('active');
            const icon = chapter4.querySelector('.fa-lock');
            // Ícone Cap 4 (Estrela - star)
            if (icon) icon.className = 'fas fa-star'; 
        }
    }

    // --- 3. Lógica do Botão BÔNUS (Play Game) ---
    const bonusBtn = document.getElementById('bonus-game-btn');

    // Se terminou o Capítulo 4 do Príncipe, mostra o botão amarelo
    if (chapter4Completed && bonusBtn) {
        bonusBtn.classList.remove('hidden');
    }

    // --- 4. Modais e Eventos ---
    const chapterNodes = document.querySelectorAll('.chapter-node');
    const lockedChapterModal = document.getElementById('locked-chapter-modal');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    const storyCompleteModal = document.getElementById('story-complete-modal');
    const storyOkBtn = document.getElementById('story-ok-btn');

    const storyCompletionModalShown = localStorage.getItem('prince_story_completion_modal_shown') === 'true';

    if (chapter4Completed && !storyCompletionModalShown) {
        storyCompleteModal.classList.remove('hidden');
        localStorage.setItem('prince_story_completion_modal_shown', 'true');
    }

    chapterNodes.forEach(node => {
        node.addEventListener('click', () => {
            const chapterNumber = node.dataset.chapter;
            if (node.classList.contains('locked')) {
                lockedChapterModal.classList.remove('hidden');
            } else if (node.classList.contains('active')) {
                window.location.href = `prince-chapter${chapterNumber}.html`;
            }
        });
    });

    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', () => {
            lockedChapterModal.classList.add('hidden');
        });
    }

    // Importante: Apenas fecha o modal para mostrar o botão amarelo no mapa
    if (storyOkBtn) {
        storyOkBtn.addEventListener('click', () => {
            storyCompleteModal.classList.add('hidden');
        });
    }
});