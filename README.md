# Personal Website - Sukeshan R

A modern, responsive personal website showcasing your professional profile. Built with HTML, CSS, and JavaScript, ready to be hosted on GitHub Pages.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (works on all devices)
- ⚡ Fast loading and lightweight
- 🎯 SEO-friendly structure
- 🔗 LinkedIn integration
- ✨ Smooth scrolling navigation
- 🎭 Beautiful animations and transitions

## Sections

1. **Hero Section** - Introduction with your name and headline
2. **About** - Professional summary and background
3. **Experience** - Your work history (you can add your positions here)
4. **Education** - Your educational background
5. **Skills** - Technical and professional skills
6. **Contact** - Ways to get in touch

## How to Host on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - For example: If your username is `sukeshan`, name it `sukeshan.github.io`
5. Make it **Public** (required for free GitHub Pages)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click "uploading an existing file"
2. Drag and drop `index.html` and `styles.css` files
3. Add a commit message like "Initial commit"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your project folder
cd /path/to/your/website

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Website

Your website will be live at:
```
https://yourusername.github.io
```

It may take a few minutes for the site to be available. GitHub will show you the URL once it's ready.

## Customization

### Update Your Information

1. **Experience Section**: Edit the experience items in `index.html` (lines 62-91)
2. **Education Section**: Update your education details (lines 100-109)
3. **Contact Information**: Add your email and other contact details (lines 156-173)
4. **Skills**: Modify the skills in the skills section (lines 121-150)

### Change Colors

Edit the CSS variables in `styles.css` (lines 5-12):

```css
:root {
    --primary-color: #0077b5;    /* Main color */
    --secondary-color: #00a0dc;  /* Secondary color */
    /* ... other colors ... */
}
```

### Add More Sections

You can add new sections by copying the structure of existing sections and modifying the content.

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- Remember to update the email address in the contact section
- Add your actual work experience and education details
- You can add more social media links in the contact section
- The website is optimized for fast loading and SEO

## License

This project is open source and available for personal use.

---

**Need Help?** Feel free to reach out or check [GitHub Pages Documentation](https://docs.github.com/en/pages)

