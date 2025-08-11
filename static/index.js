document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('#nav_bar a');
  const currentPage = window.location.pathname.split('/').pop();
  const currentPageFlask = window.location.pathname; 
    

  links.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPage|| linkPath==currentPageFlask) {
        link.classList.add('active');
    }
  });
 });

const page = document.body.dataset.page;

if (page === "home") {
 const header = document.querySelector('#title');

 function debounce(fn, delay) {
   let timeoutId;
   return function(...args) {
     if (timeoutId) clearTimeout(timeoutId);
     timeoutId = setTimeout(() => fn.apply(this, args), delay);
   };
 }

 function checkScrollPosition() {
   const viewportHeight = window.innerHeight;
   const triggerPoint = viewportHeight * 0.50; // 60% of viewport height
   const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

   if (scrollY > triggerPoint) {
     header.classList.add('scrolled');
   } else {
     header.classList.remove('scrolled');
   }
 }

// Wrap the function with debounce (100ms delay)
 const debouncedCheck = debounce(checkScrollPosition, 100);

 window.addEventListener('scroll', debouncedCheck);
 window.addEventListener('resize', debouncedCheck);


// Run once on load
 checkScrollPosition();

// LANDINGHOME HEIGHT DETERMINER 

  window.addEventListener("DOMContentLoaded", () => {
  const homeheader = document.getElementById("title");
  const homemain = document.getElementById("main");
  const landinghome = document.getElementById("landinghome");

  function adjustMargin() {
    homemain.style.marginTop = homeheader.offsetHeight + "px";
   }

   function landingheight() {
    const windowheight = window.innerHeight;
    landinghome.style.height = (windowheight - homeheader.offsetHeight) + "px";
   }

  // Run once on load
   adjustMargin();
   landingheight();

   const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

   if (!isTouchDevice) {
    // Only add resize listener on non-touch devices
     window.addEventListener("resize", () => {
       adjustMargin();
       landingheight();
     });
   }
 });


 // SECOND PART OF THE HOME //
 const matwrap = document.querySelector('.matwrap');
 const mattathil = document.getElementById('mattathil');

 const mattamobserver = new IntersectionObserver(
   (entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         mattathil.classList.add('slide_right');
       } else {
         mattathil.classList.remove('slide_right');
       }
     });
   },
    {
     root: null,
     threshold: 0.8 
   }
 );
 mattamobserver.observe(matwrap);
 
 const joswrap = document.querySelector('.joswrap')
 mattathil.addEventListener('transitionend', () => {
   const jose = document.getElementById('jose');
   const joseobserver = new IntersectionObserver((entries) => {
     entries.forEach(entry=>{
       if (entry.isIntersecting){
         jose.classList.add('slide_left');
       }
       else{
         jose.classList.remove('slide_left');
       }
     });
   },{threshold:0.9});
   joseobserver.observe(joswrap);
  });
  const famwrap = document.querySelector('.famwrap')
  jose.addEventListener('transitionend',() => {
    console.log("is animating");
    const family = document.getElementById('family');
    const famwrapobserver = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          family.classList.add('slide_right');
        }
        else{
          family.classList.remove('slide_right');
        }
      });
   },{threshold:0.8});
   famwrapobserver.observe(famwrap);
  });
  
}












// FOR SHOWING THE HIGHLIGHT IN THE ACTIVE LINKS FLASK AND LIVESERVER
 const popupImages = {
  molekudiyil: '/static/images/background/MOLEKUDIYIL.webp',
  paul: '/static/images/background/Chachai and kunjamma.webp',
  shijo: '/static/images/background/SHMATTAM.webp',
  joshy: '/static/images/background/',
  vettam: '/static/images/background/Vettam.webp',
  kochani: '/static/images/background/Kochanichuvattil.webp'
};

const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');

  // Add click listeners to polygons
  document.querySelectorAll('.hover-shape').forEach(polygon => {
  polygon.addEventListener('click', () => {
    const classList = polygon.classList;
      // Find which class matches the keys in popupImages
    const clickedKey = Object.keys(popupImages).find(key => classList.contains(key));
    if (clickedKey) {
      popupImg.src = popupImages[clickedKey];
      popup.classList.add('active');
    }
  });
 });
 popup.addEventListener('click', (e) => {
   if (e.target === popup) {
     popup.classList.remove('active');
     popupImg.src = '';
   }
 });


// GALLERY PAGE SETTINGS 

const gallerypage = document.body.dataset.page;

if (gallerypage === "gallery") {
  const galleryheader = document.getElementById('title')
  const gallerymain = document.getElementById('gallery-main')
  const galleryheaderheight = galleryheader.offsetHeight;
  function GalleryMargin() {
    gallerymain.style.marginTop = galleryheaderheight + "px";
  }
  window.addEventListener("load", GalleryMargin);
  window.addEventListener("resize", GalleryMargin);

}

