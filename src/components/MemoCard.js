// MemoCard.js
export function createMemoCard(memo) {
    const card = document.createElement('div');
    card.className = 'memo-card';
    card.dataset.id = memo.id;

    const tagsHtml = (memo.tags || []).map(tag => `<span class="tag">#${tag}</span>`).join('');

    card.innerHTML = `
        <div class="memo-card-header">
            <h3 class="memo-card-title">${memo.title || 'Untitled'}</h3>
            <span class="memo-card-date">${new Date(memo.createdAt).toLocaleDateString()}</span>
        </div>
        <div class="memo-card-content">${memo.content ? memo.content.substring(0, 100) : ''}</div>
        <div class="memo-card-footer">
            <div style="display:flex; gap:4px;">${tagsHtml}</div>
            <div style="display:flex; gap:8px;">
                <button class="icon-btn archive-btn">...</button>
                <button class="icon-btn delete-btn">...</button>
            </div>
        </div>
    `;
    return card;
}