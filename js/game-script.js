document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Lógica de Leitura do Progresso ---
    const chapter1Completed = localStorage.getItem('chapter1_completed') === 'true';
    const chapter2Completed = localStorage.getItem('chapter2_completed') === 'true';
    const chapter3Completed = localStorage.getItem('chapter3_completed') === 'true';
    const chapter4Completed = localStorage.getItem('chapter4_completed') === 'true';

    // --- 2. Lógica de Desbloqueio dos Nós ---
    
    // Se completou Cap 1 -> Desbloqueia Cap 2
    if (chapter1Completed) {
        const chapter2 = document.getElementById('chapter2');
        if (chapter2) {
            chapter2.classList.remove('locked');
            chapter2.classList.add('active');
            const icon = chapter2.querySelector('.fa-lock');
            if (icon) icon.className = 'fas fa-tree'; // Ícone Floresta
        }
    }

    // Se completou Cap 2 -> Desbloqueia Cap 3
    if (chapter2Completed) {
        const chapter3 = document.getElementById('chapter3');
        if (chapter3) {
            chapter3.classList.remove('locked');
            chapter3.classList.add('active');
            const icon = chapter3.querySelector('.fa-lock');
            if (icon) icon.className = 'fas fa-paw'; // Ícone Lobo/Pata
        }
    }

    // Se completou Cap 3 -> Desbloqueia Cap 4
    if (chapter3Completed) {
        const chapter4 = document.getElementById('chapter4');
        if (chapter4) {
            chapter4.classList.remove('locked');
            chapter4.classList.add('active');
            const icon = chapter4.querySelector('.fa-lock');
            if (icon) icon.className = 'fas fa-home'; // Ícone Casa da Vovó
        }
    }

    // --- 3. Lógica do Botão BÔNUS (Minigame) ---
    const bonusBtn = document.getElementById('bonus-game-btn');

    // Se o Capítulo 4 foi concluído, mostramos o botão amarelo no canto
    if (chapter4Completed && bonusBtn) {
        bonusBtn.classList.remove('hidden');
    }

    // --- 4. Elementos da Interface (Modais e Botões) ---
    const chapterNodes = document.querySelectorAll('.chapter-node');
    const lockedChapterModal = document.getElementById('locked-chapter-modal');
    const modalOkBtn = document.getElementById('modal-ok-btn');
    
    const storyCompleteModal = document.getElementById('story-complete-modal');
    const storyOkBtn = document.getElementById('story-ok-btn');

    // --- 5. Lógica do Modal de "Parabéns" ---
    const storyCompletionModalShown = localStorage.getItem('story_completion_modal_shown') === 'true';

    // Mostra o modal apenas se terminou o cap 4 E ainda não viu a mensagem antes
    if (chapter4Completed && !storyCompletionModalShown) {
        storyCompleteModal.classList.remove('hidden');
        localStorage.setItem('story_completion_modal_shown', 'true');
    }

    // --- 6. Eventos de Clique nos Capítulos ---
    chapterNodes.forEach(node => {
        node.addEventListener('click', () => {
            const chapterNumber = node.dataset.chapter;
            
            if (node.classList.contains('locked')) {
                // Se estiver bloqueado, mostra aviso
                lockedChapterModal.classList.remove('hidden');
            } else if (node.classList.contains('active')) {
                // Se estiver ativo, entra no capítulo
                window.location.href = `pages/chapter${chapterNumber}.html`;
            }
        });
    });

    // --- 7. Eventos dos Botões dos Modais ---
    
    // Botão OK do aviso de "Bloqueado"
    if (modalOkBtn) {
        modalOkBtn.addEventListener('click', () => {
            lockedChapterModal.classList.add('hidden');
        });
    }

    // Botão "Awesome!" do modal de Parabéns
    // Agora ele APENAS FECHA o modal, para a criança ver o botão do game no mapa
    if (storyOkBtn) {
        storyOkBtn.addEventListener('click', () => {
            storyCompleteModal.classList.add('hidden');
        });
    }
});