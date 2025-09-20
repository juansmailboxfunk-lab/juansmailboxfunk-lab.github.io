# Website Customization Checklist (with Code)

This README gives you step-by-step guidance + snippets to customize your starter site.

---

## 1. Basic Identity

**index.html**
```html
<title>Your Name — Web Developer</title>

<h1>Hi, I'm Jane Doe</h1>

<p>&copy; 2025 Jane Doe</p>
```

---

## 2. Hero Section

**index.html**
```html
<header id="home">
  <h1>Hi, I'm Jane Doe</h1>
  <p>I build simple, fast websites for small businesses.</p>
  <button id="cta-btn">Work With Me</button>
</header>
```

**style.css**
```css
header {
  background: #333;
  color: white;
  text-align: center;
  padding: 80px 20px;
}
button {
  background: #2D6CDF;
  color: white;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 6px;
}
```

---

## 3. Services Section

**index.html**
```html
<section id="services">
  <h2>What I Do</h2>
  <div class="services">
    <div class="service">
      <h3>Landing Pages</h3>
      <p>High-converting one-page sites.</p>
    </div>
    <div class="service">
      <h3>Small Business Sites</h3>
      <p>Simple, mobile-friendly, easy to update.</p>
    </div>
    <div class="service">
      <h3>Custom Fixes</h3>
      <p>Speed, mobile, and design tweaks.</p>
    </div>
  </div>
</section>
```

**style.css**
```css
#services { padding: 60px 20px; text-align: center; }
.services {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.service {
  flex: 1 1 240px;
  border: 1px solid #e5e5e5;
  padding: 20px;
  border-radius: 8px;
  max-width: 320px;
}
```

---

## 4. Contact Form

**index.html**
```html
<section id="contact">
  <h2>Contact Me</h2>
  <form action="#" method="post">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit">Send</button>
  </form>
</section>
```

**style.css**
```css
#contact { padding: 60px 20px; text-align: center; }
form { max-width: 520px; margin: 0 auto; }
input, textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
}
```

---

## 5. Fonts (Google Fonts)

**index.html (in <head>)**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

**style.css**
```css
body { font-family: 'Inter', system-ui, -apple-system, Arial, sans-serif; }
```

---

## 6. Navigation + Smooth Scroll

**index.html**
```html
<nav>
  <a href="#home">Home</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>
```

**style.css**
```css
nav {
  position: sticky; top: 0;
  display: flex; gap: 16px;
  justify-content: center;
  background: white;
  border-bottom: 1px solid #eee;
  padding: 10px;
}
```

**script.js**
```js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## 7. Mobile Tweak

**style.css**
```css
@media (max-width: 600px) {
  header { padding: 56px 16px; }
  .services { gap: 12px; }
  .service { padding: 16px; }
}
```

---

## 8. CTA Button Scroll

**script.js**
```js
document.getElementById('cta-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
```

---

✅ Now you have everything in one folder: `index.html`, `style.css`, `script.js`, and this README.
