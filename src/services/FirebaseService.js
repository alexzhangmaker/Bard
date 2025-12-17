// Firebase Service
import { db } from '../firebase-config.js';
import { ref, set, onValue, push, remove } from "firebase/database";

const DB_PATH = 'memos';

export const FirebaseService = {
    // Listen for changes
    syncMemos(callback) {
        const memosRef = ref(db, DB_PATH);
        onValue(memosRef, (snapshot) => {
            const data = snapshot.val();
            const memos = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [];
            callback(memos);
        });
    },

    saveMemo(memo) {
        // If no ID, create one. If ID exists, update.
        // For firebase, we might want to use their push IDs or our own GUIDs.
        // User requested "local first", so let's stick to consistent IDs.

        if (!memo.id) {
            // New memo
            const newRef = push(ref(db, DB_PATH));
            memo.id = newRef.key;
        }

        const memoRef = ref(db, `${DB_PATH}/${memo.id}`);
        return set(memoRef, memo);
    },

    deleteMemo(id) {
        const memoRef = ref(db, `${DB_PATH}/${id}`);
        return remove(memoRef);
    }
};
