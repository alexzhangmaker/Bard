// Memo Card Component
export function createMemoCard(memo) {
    const date = new Date(memo.createdAt).toLocaleDateString();
    const contentPreview = memo.content ? memo.content.substring(0, 100) : 'No content';

    const card = document.createElement('div');
    card.className = 'memo-card bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-100 flex flex-col gap-2 transition-active active:scale-95 cursor-pointer';
    card.dataset.id = memo.id;

    card.innerHTML = `
        <div class="flex justify-between items-start">
            <h3 class="font-bold text-gray-800 line-clamp-1">${memo.title || 'Untitled'}</h3>
            <span class="text-xs text-gray-400">${date}</span>
        </div>
        <div class="text-sm text-gray-600 line-clamp-3 prose prose-sm pointer-events-none">
            ${contentPreview}
        </div>
    `;

    return card;
}
