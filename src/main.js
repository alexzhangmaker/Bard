import './firebase-config.js';
import { StorageService } from './services/StorageService.js';
import { renderMemoList } from './components/MemoList.js';
import { EditorModal } from './components/EditorModal.js';
import { initBottomNav } from './components/BottomNav.js';
import { SyncManager } from './services/SyncManager.js';

// State
let memos = [];

// Elements
const listContainer = document.getElementById('memo-list');

// Initialize Components
const editor = new EditorModal('editor-modal', {
    onSave: (memoData) => {
        const savedMemo = SyncManager.saveMemo(memoData);
        refreshList();
    },
    onClose: () => {
        // Optional: clear selection or minor UI cleanup
    }
});

// Logic
function refreshList() {
    memos = StorageService.getMemos().filter(m => !m.isArchived);
    // Sort by createdAt desc for now, or use user preference
    memos.sort((a, b) => b.createdAt - a.createdAt);
    renderMemoList(memos, listContainer);

    // Re-attach listeners to cards
    document.querySelectorAll('.memo-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const id = card.dataset.id;

            // Handle Archive Button Click
            if (e.target.closest('.archive-btn')) {
                e.stopPropagation();
                if (confirm('Archive this memo?')) {
                    const memo = memos.find(m => m.id === id);
                    if (memo) {
                        memo.isArchived = true;
                        StorageService.saveMemo(memo);
                        refreshList();
                    }
                }
                return;
            }

            // Handle Delete Button Click
            if (e.target.closest('.delete-btn')) {
                e.stopPropagation();
                if (confirm('Delete this memo permanently?')) {
                    StorageService.deleteMemo(id);
                    refreshList();
                }
                return;
            }

            const memo = memos.find(m => m.id === id);
            if (memo) {
                editor.show(memo);
            }
        });
    });
}

function handleHome() {
    console.log('Home clicked');
    // Scroll to top? Refresh?
    refreshList();
}

function handleAdd() {
    console.log('Add clicked');
    editor.show();
}

function handleSettings() {
    console.log('Settings clicked');
    alert('Settings not implemented yet');
}

// Init
function init() {
    console.log('Initializing App...');
    memos = StorageService.getMemos();
    refreshList();

    // Initialize Sync
    SyncManager.init((updatedMemos) => {
        console.log('Synced with cloud');
        refreshList();
    });

    initBottomNav({
        onHome: handleHome,
        onAdd: handleAdd,
        onSettings: handleSettings
    });
}

// Start
init();
