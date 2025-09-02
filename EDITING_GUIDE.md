# Portfolio Website Editing Guide

## 🎯 Quick Start - What You Can Edit

This guide shows you exactly how to update your portfolio information without needing to understand complex code.

## 📁 File Structure Overview

```
static-website/
├── index.html              # Main website file (contains all content)
├── assets/                  # Styling and functionality files
├── config.js               # Easy-to-edit configuration file (NEW!)
├── EDITING_GUIDE.md        # This guide
└── blog-post-example.html  # Sample blog post template
```

## 🔧 How to Edit Your Information

### Method 1: Using the Configuration File (EASIEST)

I've created a `config.js` file that contains all your personal information in one place. Simply edit this file and your changes will appear on the website.

**Location:** `static-website/config.js`

**What you can edit:**
- Personal information (name, email, location, phone)
- Social media links
- Skills and certifications
- Project details
- About section text

### Method 2: Editing HTML Directly

If you prefer to edit the main HTML file directly, here's what to look for:

## 📝 Specific Editing Instructions

### 1. Personal Information

**What to change:** Your name, email, location, phone number

**Where to find it:** Look for these sections in `index.html`:

```html
<!-- Navigation - Your Name -->
<div class="text-xl font-bold gradient-text">
    <svg>...</svg>
    Nevil Patel  <!-- CHANGE THIS -->
</div>

<!-- Contact Information -->
<div class="flex items-center space-x-3">
    <svg>...</svg>
    <span>nevilpatel6625@gmail.com</span>  <!-- CHANGE THIS -->
</div>

<div class="flex items-center space-x-3">
    <svg>...</svg>
    <span>Canada</span>  <!-- CHANGE THIS -->
</div>
```

### 2. Social Media Links

**What to change:** GitHub, LinkedIn, or other social profiles

**Where to find it:** Look for social media section:

```html
<!-- GitHub Link -->
<a href="https://github.com/nevil6625" target="_blank">  <!-- CHANGE URL -->
    <svg>...</svg>
</a>

<!-- LinkedIn Link -->
<a href="https://www.linkedin.com/in/nevil-patel-659a751ba/" target="_blank">  <!-- CHANGE URL -->
    <svg>...</svg>
</a>
```

### 3. Featured Projects

**What to change:** Project titles, descriptions, and technologies

**Where to find it:** Search for "Featured Projects" section:

```html
<!-- Project 1 -->
<div class="glass-effect rounded-xl overflow-hidden">
    <img src="..." alt="Project image">
    <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">
            Ensemble Defense System (EDS)  <!-- CHANGE TITLE -->
        </h3>
        <p class="text-slate-300 mb-4">
            Hybrid based IDS (Suricata, Zeek & Stratosphere Linux IPS)...  <!-- CHANGE DESCRIPTION -->
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <!-- Technology Tags - Add or Remove -->
            <span class="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded">Suricata</span>
            <span class="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded">Zeek</span>
            <!-- Add more tags as needed -->
        </div>
    </div>
</div>
```

### 4. Skills Section

**What to change:** Skill categories and individual skills

**Where to find it:** Search for "Technical Skills" section:

```html
<!-- Skill Category -->
<div class="glass-effect p-6 rounded-xl">
    <div class="text-cyber-green text-3xl mb-4">
        <svg>...</svg>  <!-- Icon -->
    </div>
    <h3 class="text-xl font-semibold mb-3">Penetration Testing</h3>  <!-- CHANGE CATEGORY NAME -->
    <ul class="text-slate-300 space-y-2">
        <li>• Metasploit Framework</li>  <!-- CHANGE SKILL -->
        <li>• Burp Suite Professional</li>  <!-- CHANGE SKILL -->
        <li>• Nmap & Nessus</li>  <!-- CHANGE SKILL -->
        <li>• OWASP Testing Guide</li>  <!-- CHANGE SKILL -->
    </ul>
</div>
```

### 5. Certifications

**What to change:** Certification names, organizations, and status

**Where to find it:** Search for "Certifications & Education" section:

```html
<!-- Certification Item -->
<div class="glass-effect p-6 rounded-xl text-center">
    <div class="text-cyber-green text-4xl mb-4">
        <svg>...</svg>  <!-- Icon -->
    </div>
    <h3 class="font-semibold mb-2">Security+</h3>  <!-- CHANGE CERTIFICATION NAME -->
    <p class="text-slate-400 text-sm">CompTIA</p>  <!-- CHANGE ORGANIZATION -->
    <p class="text-slate-400 text-sm">Completed</p>  <!-- CHANGE STATUS -->
</div>
```

### 6. About Section

**What to change:** Your personal description and statistics

**Where to find it:** Search for "About Me" section:

```html
<!-- About Description -->
<p class="text-slate-300 text-lg leading-relaxed">
    With a strong foundation in computer science...  <!-- CHANGE THIS TEXT -->
</p>

<!-- Statistics -->
<div class="glass-effect p-4 rounded-lg text-center">
    <div class="text-2xl font-bold text-cyber-green">50+</div>  <!-- CHANGE NUMBER -->
    <div class="text-slate-400">CTF Challenges</div>  <!-- CHANGE LABEL -->
</div>
```

### 7. Medium Blog Link

**What to change:** Your Medium profile URL

**Where to find it:** Search for "Visit My Medium Blog":

```html
<button onclick="window.open('https://medium.com/@nevilpatel6625', '_blank')">
    <!-- CHANGE THE URL ABOVE -->
    Visit My Medium Blog
</button>
```

## 🎨 Adding New Projects

To add a new project, copy this template and modify:

```html
<div class="glass-effect rounded-xl overflow-hidden hover:scale-105 transition-all duration-300">
    <img src="YOUR_PROJECT_IMAGE_URL" alt="Your project description" class="w-full h-48 object-cover">
    <div class="p-6">
        <h3 class="text-xl font-semibold mb-2">YOUR PROJECT TITLE</h3>
        <p class="text-slate-300 mb-4">
            YOUR PROJECT DESCRIPTION
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-sm">TECH 1</span>
            <span class="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-sm">TECH 2</span>
            <span class="bg-cyber-green/20 text-cyber-green px-2 py-1 rounded text-sm">TECH 3</span>
        </div>
        <a href="YOUR_PROJECT_LINK" class="text-cyber-accent hover:text-cyber-green transition-colors inline-flex items-center">
            View Project <svg>...</svg>
        </a>
    </div>
</div>
```

## 🎯 Adding New Skills

To add a new skill category, copy this template:

```html
<div class="glass-effect p-6 rounded-xl hover:glow-effect transition-all duration-300">
    <div class="text-cyber-green text-3xl mb-4">
        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- Choose an appropriate icon SVG -->
        </svg>
    </div>
    <h3 class="text-xl font-semibold mb-3">YOUR SKILL CATEGORY</h3>
    <ul class="text-slate-300 space-y-2">
        <li>• Skill 1</li>
        <li>• Skill 2</li>
        <li>• Skill 3</li>
        <li>• Skill 4</li>
    </ul>
</div>
```

## 🔍 Finding Sections Quickly

Use Ctrl+F (or Cmd+F on Mac) to search for these terms in `index.html`:

- **Navigation:** Search for "Nevil Patel"
- **Hero Section:** Search for "Cybersecurity Professional"
- **About:** Search for "About Me"
- **Skills:** Search for "Technical Skills"
- **Projects:** Search for "Featured Projects"
- **Certifications:** Search for "Certifications & Education"
- **Blog:** Search for "Latest Blog Posts"
- **Contact:** Search for "Get In Touch"

## 🎨 Styling Guidelines

### Colors Available
- `text-cyber-green` - Green accent color
- `text-cyber-accent` - Blue accent color
- `bg-cyber-dark` - Dark background
- `bg-cyber-slate` - Medium dark background
- `text-slate-300` - Light gray text
- `text-slate-400` - Medium gray text

### Common Classes
- `glass-effect` - Glassmorphism background effect
- `gradient-text` - Green-blue gradient text
- `glow-effect` - Green glow shadow
- `hover:scale-105` - Slight grow on hover
- `transition-all duration-300` - Smooth animations

## 📱 Testing Your Changes

1. **Save your file** after making changes
2. **Open index.html in a web browser** to preview
3. **Check on mobile** by resizing the browser window
4. **Test all links** to make sure they work

## 🚀 Deploying Updates

1. **Upload the entire static-website folder** to your GitHub repository
2. **GitHub Pages will automatically** update your live site
3. **Changes typically appear** within 5-10 minutes

## ⚠️ Important Notes

- **Always backup** your files before making major changes
- **Test locally first** before uploading to GitHub
- **Keep the HTML structure intact** - only change the content between tags
- **Don't modify the CSS/JS files** unless you know what you're doing

## 🆘 Common Issues

**Problem:** Changes don't appear on the live site
**Solution:** Wait 5-10 minutes for GitHub Pages to update, or check if you uploaded to the correct repository

**Problem:** Website looks broken
**Solution:** You might have accidentally deleted a closing tag. Compare with your backup or restore from GitHub

**Problem:** Links don't work
**Solution:** Check that URLs start with `https://` for external links

**Problem:** Images don't show
**Solution:** Use full URLs for images (starting with `https://`)

This guide should help you easily maintain and update your portfolio website!