const CACHE_NAME = 'memo-pwa-v2';

const ASSETS = [
    './',
    './index.html',
    './dist/output.css',
    './src/main.js',
    './src/services/StorageService.js',
    './src/services/FirebaseService.js',
    './src/services/SyncManager.js',
    './src/components/MemoList.js',
    './src/components/MemoCard.js',
    './src/components/EditorModal.js',
    './src/components/BottomNav.js',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});

