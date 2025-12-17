export function initBottomNav(callbacks) {
    const nav = document.getElementById('bottom-nav');

    const iconSize = 24 ;

    const items = [
        { id: 'nav-home', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 16 16"><path fill="#000000" d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"/><path fill="#000000" d="M8 4L2 8v7h5v-3h2v3h5V8z"/></svg>`, action: callbacks.onHome },
        { id: 'nav-add', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 16 16"><path fill="#000000" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/></svg>`, action: callbacks.onAdd, highlight: true },
        { id: 'nav-settings', icon: `<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24"><path fill="#000000" fill-rule="evenodd" d="M14.208 4.83q.68.21 1.3.54l1.833-1.1a1 1 0 0 1 1.221.15l1.018 1.018a1 1 0 0 1 .15 1.221l-1.1 1.833q.33.62.54 1.3l2.073.519a1 1 0 0 1 .757.97v1.438a1 1 0 0 1-.757.97l-2.073.519q-.21.68-.54 1.3l1.1 1.833a1 1 0 0 1-.15 1.221l-1.018 1.018a1 1 0 0 1-1.221.15l-1.833-1.1q-.62.33-1.3.54l-.519 2.073a1 1 0 0 1-.97.757h-1.438a1 1 0 0 1-.97-.757l-.519-2.073a7.5 7.5 0 0 1-1.3-.54l-1.833 1.1a1 1 0 0 1-1.221-.15L4.42 18.562a1 1 0 0 1-.15-1.221l1.1-1.833a7.5 7.5 0 0 1-.54-1.3l-2.073-.519A1 1 0 0 1 2 12.72v-1.438a1 1 0 0 1 .757-.97l2.073-.519q.21-.68.54-1.3L4.27 6.66a1 1 0 0 1 .15-1.221L5.438 4.42a1 1 0 0 1 1.221-.15l1.833 1.1q.62-.33 1.3-.54l.519-2.073A1 1 0 0 1 11.28 2h1.438a1 1 0 0 1 .97.757zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/></svg>`, action: callbacks.onSettings },
    ];

// BottomNav.js 中的 nav.innerHTML 部分
nav.innerHTML = items.map(item => `
    <button id="${item.id}" class="nav-btn ${item.highlight ? 'nav-btn-highlight' : ''}">
        ${item.icon}
    </button>
`).join('');

    items.forEach(item => {
        document.getElementById(item.id).addEventListener('click', (e) => {
            e.preventDefault();
            item.action();
        });
    });
}
