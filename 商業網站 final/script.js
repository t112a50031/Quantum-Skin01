document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  // Close nav when a link is clicked (mobile)
  mainNav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> mainNav.classList.remove('open'));
  });

  // Smooth scrolling for anchor links (enhanced)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  });
  backToTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // Image gallery preview (modal)
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const modalClose = document.getElementById('modalClose');
  document.querySelectorAll('.gallery-grid .thumb, .scenarios-grid img').forEach(img=>{
    img.addEventListener('click', ()=>{
      const full = img.dataset.full || img.src;
      modalImg.src = full;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
    });
  });
  const closeModal = ()=>{
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    modalImg.src = '';
  };
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=>{ if(e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });

  // Simple contact form handler (no backend) — give a friendly message
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('已收到您的訊息，伊森實驗室會儘快與您聯絡。');
      contactForm.reset();
    });
  }

});
