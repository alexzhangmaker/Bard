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
                <button class="icon-btn archive-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 472"><path fill="#000000" d="M469 3H43Q25 3 12.5 15.5T0 45v86q0 9 6 15t15 6h22v235q0 17 12.5 29.5T85 429h342q17 0 29.5-12.5T469 387V152h22q9 0 15-6t6-15V45q0-17-12.5-29.5T469 3zM85 387V152h342v235H85zm384-278H43V45h426v64zm-140 90q-32 24-73 24t-73-24q-6-5-15.5-3.5T154 203q-5 7-4 16.5t8 13.5q46 32 98 32t98-32q7-4 8-13.5t-4-16.5q-4-6-13.5-7.5T329 199z"/></svg></button>
                <button class="icon-btn delete-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#000000" d="m6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/></svg></button>
            </div>
        </div>
    `;
    return card;
}