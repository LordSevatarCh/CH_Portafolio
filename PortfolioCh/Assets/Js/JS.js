 // Menú hamburguesa para móviles
 const hamburger = document.querySelector('.hamburger');
 const menu = document.querySelector('.menu');

 hamburger.addEventListener('click', () => {
     menu.classList.toggle('active');
     hamburger.innerHTML = menu.classList.contains('active') ? 
         '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });

 // Cerrar menú al hacer click en un enlace
 document.querySelectorAll('.menu a').forEach(link => {
     link.addEventListener('click', () => {
         if (menu.classList.contains('active')) {
             menu.classList.remove('active');
             hamburger.innerHTML = '<i class="fas fa-bars"></i>';
         }
     });
 });

 // Scroll suave para los enlaces del menú
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         const targetElement = document.querySelector(targetId);
         
         window.scrollTo({
             top: targetElement.offsetTop - 80,
             behavior: 'smooth'
         });
     });
 });

 // Animación de las barras de habilidades al hacer scroll
 const skillBars = document.querySelectorAll('.skill-progress');
 
 function animateSkills() {
     skillBars.forEach(bar => {
         const width = bar.style.width;
         bar.style.width = '0';
         setTimeout(() => {
             bar.style.width = width;
         }, 100);
     });
 }

 // Observador para animar habilidades cuando están visibles
 const aboutSection = document.querySelector('#about');
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             animateSkills();
             observer.unobserve(entry.target);
         }
     });
 }, { threshold: 0.5 });

 observer.observe(aboutSection);

 // Función para mostrar alerta
 function showAlert(message, type = 'success') {
     const alertBox = document.getElementById('alert');
     alertBox.textContent = message;
     alertBox.style.background = type === 'success' ? '#4CAF50' : '#f44336';
     alertBox.classList.add('show');
     
     setTimeout(() => {
         alertBox.classList.remove('show');
     }, 3000);
 }

 // Efecto de aparición al hacer scroll
 const fadeElements = document.querySelectorAll('.fade-in');
 
 function checkFade() {
     fadeElements.forEach(element => {
         const elementTop = element.getBoundingClientRect().top;
         const windowHeight = window.innerHeight;
         
         if (elementTop < windowHeight - 100) {
             element.style.opacity = '1';
             element.style.transform = 'translateY(0)';
         }
     });
 }
 
 // Ejecutar al cargar y al hacer scroll
 window.addEventListener('load', checkFade);
 window.addEventListener('scroll', checkFade);



 