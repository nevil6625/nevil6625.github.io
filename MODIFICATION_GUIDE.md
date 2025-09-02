# Portfolio Website Modification Guide

## 📁 File Structure

Your static website contains:
```
static-website/
├── index.html          # Main page with all sections
├── assets/
│   ├── index-BO3jftJ7.css    # All styling
│   └── index-D2-OVkhq.js     # All functionality
└── MODIFICATION_GUIDE.md     # This guide
```

## 🔧 Basic Modifications

### Changing Personal Information

Open `index.html` and search for these sections:

**1. Page Title & Description (Lines 7-8)**
```html
<title>Nevil Patel - Cybersecurity Portfolio</title>
<meta name="description" content="Your new description here" />
```

**2. Your Name (Navigation)**
Look for: `Nevil Patel` and replace with your name

**3. Contact Information**
Search for:
- `nevilpatel6625@gmail.com` - Replace with your email
- `Canada` - Replace with your location
- Phone numbers and social links

### Updating Skills & Projects

The content is built into the JavaScript file. To modify:

1. **Skills Section**: Look for text like "Penetration Testing", "Network Security", "Blue Teaming"
2. **Projects Section**: Find project titles and descriptions
3. **Certifications**: Update certification names and status

## 📝 Adding New Blog Pages

### Method 1: Simple Blog Pages (Recommended)

**Step 1: Create Individual Blog Pages**

Create new HTML files for each blog post:

```html
<!-- blog-post-1.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SQL Injection Deep Dive - Nevil Patel</title>
    <link rel="stylesheet" href="./assets/index-BO3jftJ7.css">
</head>
<body class="bg-cyber-dark text-slate-100 font-inter">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 glass-effect">
        <div class="max-w-7xl mx-auto px-4 py-4">
            <div class="flex justify-between items-center">
                <a href="index.html" class="text-xl font-bold gradient-text">
                    ← Back to Portfolio
                </a>
            </div>
        </div>
    </nav>
    
    <!-- Blog Content -->
    <main class="pt-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <article class="py-12">
                <header class="mb-8">
                    <h1 class="text-4xl font-bold gradient-text mb-4">
                        OWASP Top 10: SQL Injection Deep Dive
                    </h1>
                    <div class="text-slate-400">
                        <time>March 15, 2024</time> • By Nevil Patel
                    </div>
                </header>
                
                <div class="prose prose-lg prose-invert">
                    <p>Your blog content goes here...</p>
                    
                    <h2>What is SQL Injection?</h2>
                    <p>SQL injection is a code injection technique...</p>
                    
                    <h2>Prevention Techniques</h2>
                    <p>To prevent SQL injection attacks...</p>
                    
                    <!-- Add more content -->
                </div>
            </article>
        </div>
    </main>
</body>
</html>
```

**Step 2: Update Blog Links in Main Page**

In `index.html`, find the blog section and update the links:

1. Look for `href="#"` in the blog section
2. Replace with `href="blog-post-1.html"`, `href="blog-post-2.html"`, etc.

### Method 2: Dynamic Blog Section

**Step 1: Create a Blog Directory**

```
static-website/
├── blog/
│   ├── sql-injection-guide.html
│   ├── home-security-lab.html
│   └── ctf-writeup-hackthebox.html
```

**Step 2: Update Main Page Links**

Change blog links to point to your new pages:
```html
<!-- Find this in index.html -->
<a href="blog/sql-injection-guide.html" class="text-cyber-accent hover:text-cyber-green">
    Read More
</a>
```

## 🎨 Styling Your Blog Pages

### Using Existing Styles

Your blog pages can use the same CSS classes:

```html
<!-- Cyber-themed elements -->
<div class="glass-effect p-6 rounded-xl">Content</div>
<h2 class="gradient-text">Heading</h2>
<div class="bg-cyber-slate p-4">Code block</div>
```

### Common CSS Classes Available:

- `glass-effect` - Glassmorphism background
- `gradient-text` - Green-blue gradient text
- `glow-effect` - Green glow shadow
- `bg-cyber-dark` - Dark background
- `bg-cyber-slate` - Slate background
- `text-cyber-green` - Green accent text
- `text-cyber-accent` - Blue accent text

## 🔗 Making Links Functional

### Navigation Links

**Back to Home Button:**
```html
<a href="index.html" class="text-cyber-accent hover:text-cyber-green">
    ← Back to Portfolio
</a>
```

**Section Links (within same page):**
```html
<a href="index.html#about">About Section</a>
<a href="index.html#skills">Skills Section</a>
<a href="index.html#projects">Projects Section</a>
```

### External Links

**Social Media & External Sites:**
```html
<a href="https://github.com/yourusername" target="_blank" rel="noopener">
    GitHub Profile
</a>
```

## 📱 Adding New Sections

### Creating a New Page Section

**Step 1: Create the HTML Structure**
```html
<section id="new-section" class="py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                New Section Title
            </h2>
            <p class="text-slate-300 text-lg">
                Section description
            </p>
        </div>
        
        <!-- Your content here -->
        <div class="grid md:grid-cols-2 gap-8">
            <div class="glass-effect p-6 rounded-xl">
                <!-- Content -->
            </div>
        </div>
    </div>
</section>
```

**Step 2: Add Navigation Link**
```html
<!-- In the navigation section -->
<a href="#new-section" class="hover:text-cyber-green transition-colors">
    New Section
</a>
```

## 🛠️ Advanced Modifications

### Adding Images

**Step 1: Create Images Folder**
```
static-website/
├── images/
│   ├── profile.jpg
│   ├── project1.png
│   └── blog-thumbnails/
```

**Step 2: Use in HTML**
```html
<img src="./images/profile.jpg" alt="Description" class="rounded-xl w-full">
```

### Adding Contact Forms

**Simple Contact Form (no backend needed):**
```html
<form action="mailto:your@email.com" method="post" enctype="text/plain">
    <div class="space-y-4">
        <input type="text" name="name" placeholder="Your Name" 
               class="w-full bg-cyber-blue/50 border border-slate-600 p-3 rounded">
        <textarea name="message" placeholder="Your Message" rows="4"
                  class="w-full bg-cyber-blue/50 border border-slate-600 p-3 rounded">
        </textarea>
        <button type="submit" class="bg-cyber-green px-6 py-3 rounded text-white">
            Send Message
        </button>
    </div>
</form>
```

## 📦 Deployment After Changes

1. **Upload all files** to your GitHub repository
2. **Maintain the folder structure**
3. **GitHub Pages automatically serves** your updated site
4. **Changes appear within minutes**

## 🔍 Tips for Editing

### Finding Content to Modify

1. **Use browser developer tools** (F12) to inspect elements
2. **Search for specific text** in the HTML file
3. **The main content is in index.html** - JavaScript handles the interactions

### Common Modifications

**Colors:** Search for color values like `cyber-green`, `cyber-accent` in CSS
**Text:** Most text content is directly in the HTML
**Layout:** Grid classes control responsive design (`grid md:grid-cols-2`)

### Testing Changes

1. **Open index.html in browser** to preview
2. **Test all links** work correctly
3. **Check mobile responsiveness** by resizing browser
4. **Verify all pages load** without errors

## 🐛 Troubleshooting

**Links not working?**
- Check file paths are correct (`./blog/post.html`)
- Ensure files exist in the right folders

**Styling not applied?**
- Verify CSS file path: `./assets/index-BO3jftJ7.css`
- Check CSS class names match existing ones

**Images not showing?**
- Use relative paths: `./images/photo.jpg`
- Ensure image files are uploaded to GitHub

## 📞 Need Help?

For complex modifications, consider:
1. Learning basic HTML/CSS
2. Using online HTML editors for testing
3. Consulting web development resources

Your portfolio is now fully customizable and ready for any modifications you need!