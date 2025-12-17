export class EditorModal {
    constructor(elementId, options = {}) {
        this.modal = document.getElementById(elementId);
        this.editor = document.getElementById('editor-content');
        this.saveBtn = document.getElementById('save-memo-btn');
        this.closeBtn = document.getElementById('close-modal-btn');
        this.onSave = options.onSave || (() => { });
        this.onClose = options.onClose || (() => { });

        this.currentMemoId = null;

        this.initEvents();
    }

    initEvents() {
        this.closeBtn.addEventListener('click', () => this.hide());
        this.saveBtn.addEventListener('click', () => this.handleSave());
    }

    // EditorModal.js
show(memo = null) {
    // 之前是 classList.add('h-[50vh]')
    this.modal.style.height = '60%'; 
    if (memo) {
        this.currentMemoId = memo.id;
        this.editor.innerText = memo.content || '';
    } else {
        this.currentMemoId = null;
        this.editor.innerText = '';
    }
    this.editor.focus();
}

hide() {
    this.modal.style.height = '0';
    this.editor.blur();
    this.onClose();
}
    handleSave() {
        const content = this.editor.innerText;
        const title = content.split('\n')[0].substring(0, 50) || 'Untitled'; // Basic title extraction

        const memoData = {
            id: this.currentMemoId,
            content: content,
            title: title
        };

        this.onSave(memoData);
        this.hide();
    }
}
