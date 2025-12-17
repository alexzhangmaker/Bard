// Sync Manager
import { StorageService } from './StorageService.js';
import { FirebaseService } from './FirebaseService.js';

export const SyncManager = {
    init(onUpdate) {
        // 1. Listen to Firebase changes
        FirebaseService.syncMemos((cloudMemos) => {
            // Simple sync strategy: Cloud wins for now, or merge?
            // Requirement: "Local data operation preferred, sync cloud".
            // Implementation: Merge cloud data into local, updating local storage.

            const localMemos = StorageService.getMemos();
            const merged = this.mergeData(localMemos, cloudMemos);

            StorageService.saveMemos(merged);
            onUpdate(merged);
        });
    },

    saveMemo(memo) {
        // Save locally first
        const saved = StorageService.saveMemo(memo);
        // Then push to cloud
        FirebaseService.saveMemo(saved);
        return saved;
    },

    mergeData(local, cloud) {
        // Map by ID
        const map = new Map();
        local.forEach(m => map.set(m.id, m));

        // Cloud overwrite local if newer? Or always add missing?
        cloud.forEach(m => {
            if (map.has(m.id)) {
                // Conflict resolution: latest update wins
                const localMemo = map.get(m.id);
                if (m.updatedAt > localMemo.updatedAt) {
                    map.set(m.id, m);
                }
            } else {
                map.set(m.id, m);
            }
        });

        return Array.from(map.values());
    }
};
