import { createMemoCard } from './MemoCard.js';

export function renderMemoList(memos, container) {
    container.innerHTML = '';
    if (memos.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-64 text-gray-400">
                <svg class="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                <p>No memos yet</p>
            </div>
        `;
        return;
    }

    memos.forEach(memo => {
        const card = createMemoCard(memo);
        container.appendChild(card);
    });
}
