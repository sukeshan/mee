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

    // --- Blog Logic ---

    const blogData = [
        {
            title: "Why Do We Need √D_k?",
            category: "NLP / Optimization",
            description: "Uncover the math behind the magic number. Why dividing by the square root of the dimension saves your gradients from vanishing.",
            url: "blog/sqrt-dk.html",
            date: "Nov 22 2025"
        },
        {
            title: "Smart Batching: Train Faster, Waste Less",
            category: "NLP / Optimization",
            description: "Skip the padding tax. Learn how dynamic batching and uniform length strategies can 2x your training speed without sacrificing accuracy.",
            url: "blog/smart-batching.html",
            date: "Feb 03 2025"
        },
        {
            title: "The Tokenizer Trap: Optimizing the Unseen",
            category: "NLP / Optimization",
            description: "Uncover the hidden trade-offs in tokenizer design. Learn how fertility, compression, and vocabulary size silently impact your model's performance.",
            url: "blog/tokenization.html",
            date: "Jan 02 2025"
        },
        {
            title: "Identifying Tablet Purpose",
            category: "Computer Vision",
            description: "Using spatial information and OCR to identify drug names and their purposes from images.",
            url: "blog/drug-identification.html",
            date: "Nov 23 2022"
        },
        {
            title: "Food Recipe Retrieval",
            category: "Retrieval",
            description: "Building a search engine to find recipes based on ingredients using embedding-based and graph-based techniques.",
            url: "blog/food-recipe.html",
            date: "Oct 30 2022"
        }
    ];

    // Group blogs by category
    const clusters = blogData.reduce((acc, blog) => {
        if (!acc[blog.category]) {
            acc[blog.category] = [];
        }
        acc[blog.category].push(blog);
        return acc;
    }, {});

    const clusterContainer = document.getElementById('cluster-container');
    const modal = document.getElementById('blog-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBlogList = document.getElementById('modal-blog-list');
    const closeModal = document.querySelector('.close-modal');

    // Render Clusters
    if (clusterContainer) {
        for (const [category, blogs] of Object.entries(clusters)) {
            const clusterCard = document.createElement('div');
            clusterCard.className = 'blog-card cluster-card reveal'; // Add reveal class
            clusterCard.innerHTML = `
                <span class="blog-meta">Cluster</span>
                <h3>${category}</h3>
                <p>${blogs.length} Post${blogs.length > 1 ? 's' : ''}</p>
            `;

            clusterCard.addEventListener('click', () => {
                openModal(category, blogs);
            });

            clusterContainer.appendChild(clusterCard);
        }
    }

    // Scroll Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Open Cluster Modal
    function openModal(category, blogs) {
        modalTitle.textContent = category;
        modalBlogList.innerHTML = '';

        blogs.forEach((blog, index) => {
            const blogItem = document.createElement('a'); // Changed to <a>
            blogItem.href = blog.url; // Set href
            blogItem.target = "_blank"; // Open in new tab
            blogItem.className = 'blog-card modal-blog-card stagger-item';
            blogItem.style.textDecoration = 'none'; // Ensure no underline
            blogItem.style.animationDelay = `${index * 100}ms`;

            blogItem.innerHTML = `
                <span class="blog-meta">${blog.date || ''}</span>
                <h3>${blog.title}</h3>
                <p>${blog.description}</p>
            `;

            modalBlogList.appendChild(blogItem);
        });

        modal.style.display = 'flex';
        void modal.offsetWidth;
        modal.classList.add('show');
    }

    // Close Cluster Modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            closeModalFunc(modal);
        });
    }

    // Generic Close Modal
    function closeModalFunc(modalElement) {
        modalElement.classList.remove('show');
        setTimeout(() => {
            modalElement.style.display = 'none';
        }, 300);
    }

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunc(modal);
        }
    });
});
