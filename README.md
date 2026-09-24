# RCMP-unifa

# Perspective Blog - Product Specification ## 1. Product Overview

Perspective is a modern, minimalist blog platform designed to share thoughtful insights on lifestyle, wellness, travel, and personal growth. With a focus on clean design and user experience, the blog provides visitors with a seamless reading experience across all devices. Built with Astro and Tailwind CSS for responsive styling (so make sure to use Atro components and not JSX). Perspective delivers optimal performance while maintaining a visually sophisticated aesthetic.

The blog features a content-focused layout with intuitive navigation, light/dark mode support, and richly formatted articles. Its minimalist design philosophy ensures content takes center stage while providing readers with an elegant, distraction-free experience. The platform is designed to be highly customizable while maintaining visual cohesion across different sections and page types.

## 2. Key Features & Requirements

### Introduction Section (Hero)

**Noir Portfolio Theme - Full-Screen Image Hero with Overlay**

Layout Structure:
Clean, grid-based layout showcasing featured and recent articles
Prominent introduction section explaining the blog's purpose with full viewport width and min height 324px and max-height 653px for header.
Large background portrait image (w-full h-full object-cover) Photo is of the author.
Dark gradient overlay for text legibility (bg-gradient-to-t from-black via-black/50 to-transparent)
Content container centered (flex flex-col items-center justify-center)
Newsletter subscription component integrated into the page flow
Load more functionality for pagination

Background Image:
Full cover background (bg-cover bg-center)
High contrast portrait photography
Grayscale or dramatic color treatment
Image as background with relative positioning

Text Overlay (Centered):
Subtitle text: text-sm md:text-base font-normal text-white tracking-wider uppercase mb-4
Hero title: text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tight leading-[0.9] font-['Bebas_Neue']
Supporting text: text-sm md:text-base font-light text-white tracking-wide mt-4
All text centered (text-center)
Z-index layering (relative z-10) above image

Gradient Overlay:
Dark gradient from bottom (from-black via-black/60 to-transparent)
Ensures text legibility
Applied as absolute layer (absolute inset-0)

Featured Images Section (Bottom):

Positioned at bottom of hero (absolute bottom-8 left-8 right-8)
Three images in horizontal row (grid grid-cols-3 gap-4)
Each image: aspect-[4/3] object-cover
No borders or rounded corners
Subtle drop shadow (shadow-lg)

Responsive Behavior:

Mobile: Subtitle text-xs, Hero title text-5xl, featured images grid-cols-1 gap-2
Tablet: Subtitle text-sm, Hero title text-6xl, featured images grid-cols-3 gap-3
Desktop: Full sizing as specified, featured images grid-cols-3 gap-4

Container:

Relative positioning (relative)
Full viewport (min-h-screen w-full)
Overflow hidden (overflow-hidden)

### Homepage Layout

Requirements:

Clean, grid-based layout showcasing featured and recent articles
Responsive design that adapts to mobile, tablet, and desktop viewports
Newsletter subscription component integrated into the page flow
Load more functionality for pagination
Mock Data:

Article Preview: "Finding Balance: How to Create a Sustainable Self-Care Routine" (March 19, 2025) - "Develop a personalized self-care practice that fits your lifestyle with these simple strategies for physical, mental, and emotional wellbeing."
Visual Requirements:

Article cards with consistent aspect ratio for featured images (4:3)
Clear visual indicators for featured or premium content
Subtle hover effects for interactive elements
Minimal spacing between content sections

### Navigation & Header

Requirements:
Sticky header on scroll for mobile devices
Expandable navigation menu on mobile with smooth transitions
Centered logo in header with appropriate sizing
Primary navigation with dropdown support for subcategories
Search functionality accessible from header
Account access and subscription buttons
Mock Data:

Primary Navigation: Wellness, Travel, Creativity, Growth
Secondary Navigation (Dropdown): About, Style Guide, Authors, Contact
User Actions: Sign in, Subscribe
Visual Requirements:

Smooth animation for mobile menu expansion/collapse
Proper contrast between navigation elements and background
Clear visual indicators for interactive elements
Consistent spacing and alignment across navigation components

### Article Cards

Requirements:

Consistent design for article previews on the homepage
Featured image with optimized loading performance
Publication date, title, and concise excerpt
Visual indicators for premium or featured content
Appropriate hover states for interactive feedback
Mock Data:

Article Examples:
"The Art of Slow Travel: Embracing Local Experiences" (March 15, 2025) - "Discover the benefits of unhurried exploration and how to create meaningful connections during your travels."
"Minimalist Living: Creating Space for What Matters Most" (March 10, 2025) - "Simplify your environment and mindset with practical approaches to minimalism that focus on value over quantity."
"Seasonal Skincare: Adapting Your Routine for Spring" (February 28, 2025) - "Refresh your skincare as the weather changes with gentle products and techniques that help your skin transition smoothly."
Visual Requirements:

Consistent image aspect ratio (4:3) for visual harmony
Text truncation for excerpts with appropriate ellipsis
Clean typography with proper hierarchy for dates, titles, and excerpts
Subtle animation on hover (scale: 1.02 or shadow change)

### Article Detail Page

Requirements:
Content-focused layout optimized for reading
Article header with title, subtitle, author info, and publication details
Full-width featured image with appropriate loading attributes
Well-formatted article content with support for headings, paragraphs, images, quotes
Social sharing functionality with copy link feature
Comments section with user authentication integration
Related articles section at the bottom of the page
Mock Data:

Article Header: "Seasonal Skincare: Adapting Your Routine for Spring"
Author Display: Author photo, name (Emma Thompson), publication date (February 28, 2025), estimated read time (5 min)
Article Content: Structured headings, paragraphs, images with captions, and styled blockquotes
Comments Section: User avatars, names, timestamps, and comment text with threading support
Visual Requirements:

Content width optimized for readability (max-width of 700px for text)
Proper spacing between paragraphs and sections (margin-bottom: 1.5rem)
Images with proper attribution and caption styling
Clear typographic hierarchy with distinct heading styles

### Dark Mode Support

Requirements:

Toggle between light and dark color schemes
Persistent preference storage in local storage
System preference detection by default
Appropriate color transitions between modes
Mock Data:

Light mode with white background (bg-white) and dark text (text-gray-900)
Dark mode with dark background (bg-gray-900) and light text (text-gray-100)
Accent colors that maintain proper contrast in both modes
Visual Requirements:

Smooth transition between modes (transition-duration: 300ms)
Appropriate contrast for all text elements (minimum 4.5:1 ratio)
Image adjustments for dark mode compatibility when needed
Consistent component styling across both modes

### Newsletter Subscription

Requirements:

Email collection form with validation
Clear value proposition for subscribing
Success and error state handling
Visually appealing background image or gradient
GDPR/privacy policy compliance
Mock Data:

Subscription Header: "Stay inspired."
Subscription Text: "Subscribe to receive our latest articles and insights directly in your inbox."
Form Field Placeholder: "Your email"
Button Text: "Subscribe"
Visual Requirements:

Background image with overlay for text legibility
Form with clean input field styling
Prominent, accessible subscribe button
Appropriate spacing and alignment of elements

### Comments System

Requirements:

Comment display with proper threading
User authentication integration
Basic text formatting capabilities
Comment count display
Moderation capabilities (for admin users)
Mock Data:

Avatar images for commenters
Username and timestamp for each comment
Varying length comments with replies
Reply forms with clear interaction patterns
Visual Requirements:

Clear visual hierarchy between comments and replies
Distinct styling for the comment author and commenters
Appropriate spacing between comment elements
Mobile-responsive layout adaptation

### Related Articles

Requirements:

Display 3 related articles at the end of each post
Similar design language to homepage article cards
Relevant suggestions based on tags or categories
Responsive grid layout that adjusts to screen width
Mock Data:

Three articles with titles, images, dates, and short descriptions
Relevant topical connections to the main article
Visual Requirements:

Clear section heading ("You might also like")
Consistent card styling with homepage articles
Proper spacing between related article cards
Responsive layout with appropriate breakpoints

## 3. Design System ### Color Palette

**Noir Portfolio Theme - Monochromatic Dark Design**

Primary Colors:

Background Main: #000000 (bg-black) - Deep black for primary background
Background Elevated: #18181b (bg-zinc-900) - Slightly lighter for cards and elevated sections
Background Subtle: #27272a (bg-zinc-800) - For hover states and subtle elevation

Text Colors:

Primary Text (Headings): #ffffff (text-white) - Pure white for maximum contrast on headings
Secondary Text (Body): #a1a1aa (text-zinc-400) - Medium gray for body text and descriptions
Tertiary Text (Meta): #71717a (text-zinc-500) - Darker gray for timestamps, labels, and metadata
Muted Text: #52525b (text-zinc-600) - Very subtle text for disabled states

Border & Divider Colors:

Primary Borders: #27272a (border-zinc-800) - Subtle dividers between sections
Secondary Borders: #18181b (border-zinc-900) - Very subtle borders, barely visible

Accent Colors:

No bright accent colors - Pure monochromatic scheme
Interactive elements use opacity changes (hover:opacity-80, hover:opacity-60)
Focus states use white borders (focus:border-white focus:ring-white)

Image Treatment:

High contrast black & white photography preferred
Grayscale filter on color images: filter grayscale or filter grayscale-[50]
Optional sepia/warm tone overlay: sepia-[20] for vintage aesthetic

Status Colors (Minimal use):

Success: #22c55e (text-green-500) - Sparingly used
Error: #ef4444 (text-red-500) - Sparingly used
Warning: #f59e0b (text-amber-500) - Sparingly used

### Typography

**Noir Portfolio Theme - Bold, High-Impact Typography**

Font Families:

Display Font: Bebas Neue (font-['Bebas_Neue']) - Condensed, bold sans-serif for hero titles
Body Font: Inter (font-sans) - Clean, readable for all other text

Font Sizes & Usage:

Hero Title: 6rem to 8rem (text-7xl lg:text-8xl) - Primary page title
Section Headers: 1.25rem to 1.5rem (text-xl lg:text-2xl) - Main section dividers
Card Labels: 0.75rem to 0.875rem (text-xs lg:text-sm) - Category tags and labels
Body Text: 0.875rem (text-sm) - Paragraphs and descriptions
Metadata: 0.75rem (text-xs) - Timestamps, auxiliary information

Font Weights:

Hero Title (Bebas Neue): 700 (font-bold)
Section Headers (Inter): 400 (font-normal)
Card Labels (Inter): 700 (font-bold)
Body Text (Inter): 300 (font-light)
Metadata (Inter): 300 (font-light)

Text Transformations:

Hero Title: UPPERCASE (uppercase)
Section Headers: Title Case (capitalize)
Card Labels: UPPERCASE (uppercase)
Body Text: Normal case

Letter Spacing:

Hero Title: -0.025em (tracking-tight)
Section Headers: 0.05em (tracking-wide)
Card Labels: 0.15em (tracking-[0.15em])
Body Text: 0.025em (tracking-wide)
Metadata: 0.05em (tracking-wide)

Line Heights:

Hero Title: 0.9 (leading-[0.9])
Section Headers: 1.2 (leading-tight)
Body Text: 1.7 (leading-relaxed)
Metadata: 1.5 (leading-normal)

### Core Components

Buttons:

Primary Button: bg-white text-black hover:bg-zinc-200 transition-colors duration-200 py-3 px-8 text-xs uppercase tracking-[0.15em] font-bold rounded-none
Secondary Button: bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 py-3 px-8 text-xs uppercase tracking-[0.15em] font-bold border border-zinc-800 rounded-none
Text Link: text-zinc-400 hover:text-white transition-colors duration-200 text-sm font-light tracking-wide underline-offset-4 hover:underline bg-transparent
Tag Button: bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all duration-200 py-1.5 px-4 text-xs uppercase tracking-wider font-bold rounded-sm
Cards:

Article Card: bg-black group cursor-pointer transition-opacity duration-300 hover:opacity-80 overflow-hidden
Article Card Image: bg-white aspect-[4/3] w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500
Article Card Label: absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm py-2 px-4 text-xs uppercase tracking-[0.15em] text-white font-bold
Article Card Title: text-white text-sm font-light mt-3 tracking-wide
Article Card Excerpt: text-zinc-400 text-sm font-light mt-2 tracking-wide leading-relaxed
Featured Card: bg-zinc-900 border border-zinc-800 overflow-hidden relative group hover:border-zinc-700 transition-colors duration-300 aspect-[16/9]
Author Card: flex items-center gap-x-3 text-zinc-400
Comment Card: bg-zinc-900 border-b border-zinc-800 pb-6 mb-6
Navigation:

Header: sticky top-0 bg-white dark:bg-gray-900 z-50
Mobile Menu: fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-y-auto
Dropdown: absolute top-full bg-white dark:bg-gray-800 shadow-md rounded-md py-2 min-w-[12rem]
Footer Links: flex flex-wrap justify-center gap-x-6 gap-y-2
Form Elements:

Input: w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent
Textarea: w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent
Checkbox: w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500
Label: block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1
Content Display:

Prose: prose prose-blue dark:prose-invert max-w-none
Heading Large: text-3xl md:text-4xl font-bold tracking-tight
Heading Medium: text-2xl font-bold tracking-tight
Heading Small: text-xl font-semibold

### Responsive Design Principles

Breakpoints:

Small (sm): 640px
Medium (md): 768px
Large (lg): 1024px
Extra Large (xl): 1280px
2XL (2xl): 1536px
Layout Containers:

Main container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Content container: max-w-prose mx-auto
Canvas (blog content): max-w-[700px] mx-auto
Canvas Wide: max-w-4xl mx-auto
Device-Specific Adaptations:

Mobile: Single column layout, collapsed navigation, stacked elements
Tablet: Two-column article grid, expanded navigation options
Desktop: Three-column article grid, full navigation display, enhanced spacing
Responsive Typography:

Base text: text-sm md:text-base
Headings: text-2xl md:text-3xl lg:text-4xl
Secondary text: text-xs md:text-sm
Aspect Ratios:

Article thumbnails: aspect-[4/3]
Featured banners: aspect-[16/9]
Author avatars: aspect-square rounded-full

### Animation & Transitions

Duration & Easing:

Fast: 150ms ease-in-out (hover states)
Medium: 300ms ease-in-out (menu animations)
Slow: 500ms ease-in-out (page transitions)
Interactive Elements:

Button hover: transition-colors duration-150
Card hover: transition-transform duration-200
Menu expansion: transition-all duration-300
Theme toggle: transition-colors duration-300
Loading States:

Spinner: Rotating animation for loading indicators
Skeleton: Pulsing animation for content placeholders
Fade In: Opacity transition for loaded content

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/018a2a3b-593f-4732-9729-1104e1a9f5d4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
