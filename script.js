document.addEventListener('DOMContentLoaded', () => {
    // Character-level glow effect (single char)
    document.querySelectorAll('.glow-text').forEach(el => {
        // Normalize whitespace: replace newlines and multiple spaces with a single space
        const text = el.textContent.replace(/\s+/g, ' ').trim();
        el.innerHTML = text.split('').map(char => {
            return char === ' ' ? ' ' : `<span>${char}</span>`;
        }).join('');
    });

    // Word-level glow effect
    document.querySelectorAll('.glow-text-word').forEach(el => {
        const text = el.textContent.trim();
        // Split by spaces
        const words = text.split(/\s+/);
        el.innerHTML = words.map(word => {
            return `<span>${word}</span>`;
        }).join(' '); // Join with space
    });
});
