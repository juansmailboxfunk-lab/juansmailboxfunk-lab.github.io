document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
const cta = document.getElementById('cta-btn');
if (cta){
  cta.addEventListener('click', () => {
    const contact = document.getElementById('contact');
    if(contact){ contact.scrollIntoView({ behavior: 'smooth' }); }
  });
}
const form = document.querySelector('form');
if(form){
  form.addEventListener('submit', function(){
    setTimeout(()=> alert('Thanks! I’ll get back to you soon.'), 100);
  });
}
