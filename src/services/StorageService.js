// Storage Service - LocalStorage Wrapper
const STORAGE_KEY = 'memo_pwa_data';

export const StorageService = {
    getMemos() {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    saveMemo(memo) {
        const memos = this.getMemos();
        const existingIndex = memos.findIndex(m => m.id === memo.id);

        if (existingIndex >= 0) {
            memos[existingIndex] = { ...memos[existingIndex], ...memo, updatedAt: Date.now() };
        } else {
            memos.unshift({
                ...memo,
                id: memo.id || Date.now().toString(),
                createdAt: Date.now(),
                updatedAt: Date.now()
            });
        }

        this.saveMemos(memos);
        return memo;
    },

    saveMemos(memos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
        // Trigger generic event for UI updates if needed, 
        // but explicit re-render might be better.
    },

    deleteMemo(id) {
        const memos = this.getMemos().filter(m => m.id !== id);
        this.saveMemos(memos);
    }
};
