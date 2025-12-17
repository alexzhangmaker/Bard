import { createMemoCard } from './MemoCard.js';

export function renderMemoList(memos, container) {
    container.innerHTML = '';
    if (memos.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <svg width="64" height="64" ...></svg>
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
