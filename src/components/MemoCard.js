// Memo Card Component
export function createMemoCard(memo) {
    const dateObj = new Date(memo.createdAt);
    const date = !isNaN(dateObj.getTime()) ? dateObj.toLocaleDateString() : 'Just now';
    const contentPreview = memo.content ? memo.content.substring(0, 100) : 'No content';

    const card = document.createElement('div');
    card.className = 'memo-card bg-orange-50 p-4 rounded-lg shadow-sm border border-orange-100 flex flex-col gap-2 transition-active active:scale-95 cursor-pointer';
    card.dataset.id = memo.id;

    // Tags generation
    const tagsHtml = (memo.tags || []).map(tag =>
        `<span class="bg-orange-100 text-orange-600 px-2 py-0.5 rounded text-xs">#${tag}</span>`
    ).join('');

    card.innerHTML = `
        <div class="flex justify-between items-start">
            <h3 class="font-bold text-gray-800 line-clamp-1">${memo.title || 'Untitled'}</h3>
            <span class="text-xs text-gray-400">${date}</span>
        </div>
        <div class="text-sm text-gray-600 line-clamp-3 prose prose-sm pointer-events-none mb-2">
            ${contentPreview}
        </div>
        <div class="flex justify-between items-center mt-auto border-t border-orange-100 pt-2">
            <div class="flex flex-wrap gap-1">
                ${tagsHtml}
            </div>
            <div class="flex items-center gap-2">
                <button class="archive-btn p-1 text-gray-400 hover:text-orange-500 rounded-full hover:bg-orange-100 transition-colors" title="Archive">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                </button>
                <button class="delete-btn p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-red-50 transition-colors" title="Delete">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    `;

    return card;
}
