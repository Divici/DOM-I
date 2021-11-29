const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// Header section
const logo = document.querySelector('#logo-img');
logo.src = siteContent.images['logo-img'];

const navLinks = document.querySelectorAll('nav a');
//navLinks.className = 'italic';
navLinks.forEach( (link, i) =>{
  link.className = 'italic';
  link.textContent = siteContent['nav'][`nav-item-${i+1}`];
});


// cta Section
const ctaHeader = document.querySelector('h1');
const ctaButton = document.querySelector('button');
const ctaImage = document.querySelector('#cta-img');

ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImage.src = siteContent.images['cta-img'];


// Main Content Section
const features = document.querySelector('.top-content .text-content:nth-of-type(1)');
const about = document.querySelector('.top-content .text-content:nth-of-type(2)');
const mcImage = document.querySelector('.middle-img');
const services = document.querySelector('.bottom-content .text-content:nth-of-type(1)');
const product = document.querySelector('.bottom-content .text-content:nth-of-type(2)');
const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3)');

features.querySelector('h4').textContent = siteContent['main-content']['features-h4'];
features.querySelector('p').textContent = siteContent['main-content']['features-content'];
about.querySelector('h4').textContent = siteContent['main-content']['about-h4'];
about.querySelector('p').textContent = siteContent['main-content']['about-content'];
mcImage.src = siteContent.images['accent-img'];
services.querySelector('h4').textContent = siteContent['main-content']['services-h4'];
services.querySelector('p').textContent = siteContent['main-content']['services-content'];
product.querySelector('h4').textContent = siteContent['main-content']['product-h4'];
product.querySelector('p').textContent = siteContent['main-content']['product-content'];
vision.querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
vision.querySelector('p').textContent = siteContent['main-content']['vision-content'];


// Contact Section
const contact = document.querySelector('.contact');
const para1 = contact.querySelector('p:nth-of-type(1)');
const para2 = para1.nextElementSibling;
const para3 = para2.nextElementSibling;

contact.querySelector('h4').textContent = siteContent.contact['contact-h4'];
para1.textContent = siteContent.contact.address;
para2.textContent = siteContent.contact.phone;
para3.textContent = siteContent.contact.email;


// Footer Section
const copyright = document.querySelector('footer a');
copyright.textContent = siteContent.footer.copyright;
copyright.className = 'bold';
