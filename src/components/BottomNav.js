export function initBottomNav(callbacks) {
    const nav = document.getElementById('bottom-nav');

    // Icons
    const createIcon = (d) => `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${d}"></path></svg>`;

    const items = [
        { id: 'nav-home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', action: callbacks.onHome },
        { id: 'nav-add', icon: 'M12 4v16m8-8H4', action: callbacks.onAdd, highlight: true },
        { id: 'nav-settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', action: callbacks.onSettings },
    ];

    nav.innerHTML = items.map(item => `
        <button id="${item.id}" class="p-2 rounded-full ${item.highlight ? 'bg-blue-500 text-white shadow-lg transform -translate-y-2' : 'text-gray-500 hover:text-blue-500'}">
            ${createIcon(item.icon)}
        </button>
    `).join('');

    items.forEach(item => {
        document.getElementById(item.id).addEventListener('click', (e) => {
            e.preventDefault();
            item.action();
        });
    });
}
