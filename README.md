# Portfolio - Marcus Erlandsson

A professional portfolio website showcasing my development projects and work.

## Overview

This portfolio features:

- **Hero Section**: Grid layout displaying project GIFs/videos (similar to the reference image)
- **Projects Section**: Detailed cards for each project with descriptions, tags, and links
- **Skills Section**: Organized display of technologies and tools
- **About Section**: Personal introduction
- **Contact Section**: Ways to get in touch

## Structure

- `index.html` - Main portfolio page
- `styles.css` - Styling and responsive design
- `script.js` - Interactive features and smooth scrolling
- `img/` - Folder for project media (GIFs, videos, images)

## Adding New Projects

1. **Add media to `img/` folder**: Place your project GIF/video in the `img/` folder
2. **Update the hero grid** in `index.html`:
   ```html
   <div class="project-tile">
     <video class="tile-media" autoplay loop muted playsinline>
       <source src="img/your-project.mp4" type="video/mp4" />
     </video>
     <div class="tile-overlay">
       <h3 class="tile-title">Your Project Name</h3>
     </div>
   </div>
   ```
3. **Add a project card** in the projects section with full details

## Customization

- **Skills**: Update the skills section in `index.html` with your technologies
- **Colors**: Modify CSS variables in `styles.css` (`:root` section)
- **Content**: Edit the About section and other text content in `index.html`

## Deployment

This is a static site that can be deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

Simply upload the files or connect your repository to the hosting service.

## Contact

- Email: marcus.erlandsson99@gmail.com
- LinkedIn: [www.linkedin.com/in/marcus-erlandsson-805042228](https://www.linkedin.com/in/marcus-erlandsson-805042228)

## Projects

### Fluffy's Revenge Game

- [View on itch.io](https://anakode.itch.io/fluffys-revenge)
