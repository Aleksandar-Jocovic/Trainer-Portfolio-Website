// burger menu

const navSlide = () => {
  var burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');
    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });
    // burrger animation
    burger.classList.toggle('toggle');
  });
};
navSlide();

// back to top btn
var button = document.getElementById('back-to-top-btn');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  scrollSpy();
  if (window.pageYOffset > 200) {
    if (!button.classList.contains('btnIn')) {
      button.classList.remove('btnOut');
      button.classList.add('btnIn');
      button.style.display = 'block';
    }
  } else {
    if (button.classList.contains('btnIn')) {
      button.classList.remove('btnIn');
      button.classList.add('btnOut');
      setTimeout(function () {
        button.style.display = 'none';
      }, 250);
    }
  }
}

button.addEventListener('click', smoothScroll);

/* function backToTop() {
  window.scrollTo(0, 0);
} */

function smoothScroll() {
  var targetPosition = 0;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 450;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

var nav = document.getElementById('nav');

function resize() {
  if (window.pageYOffset > 51) {
    if (!nav.classList.contains('smallNav')) {
      nav.classList.remove('bigNav');
      nav.classList.add('smallNav');
    }
  } else {
    if (nav.classList.contains('smallNav')) {
      nav.classList.remove('smallNav');
      nav.classList.add('bigNav');
    }
  }
}
var logo = document.getElementById('logoImgId');

function logoImgResize() {
  if (window.pageYOffset > 51) {
    if (!logo.classList.contains('logoImgSmall')) {
      logo.classList.remove('logoImg');
      logo.classList.add('logoImgSmall');
    }
  } else {
    if (logo.classList.contains('logoImgSmall')) {
      logo.classList.remove('logoImgSmall');
      logo.classList.add('logoImg');
    }
  }
}

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    //window.addEventListener('scroll', logoResize);
    //window.addEventListener('scroll', batoAlPvcResize);
    logoImgResize();
    window.addEventListener('scroll', logoImgResize);
    window.addEventListener('scroll', resize);
  } else {
  }
}

var x = window.matchMedia('(min-width: 800px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

//owl button
const nextOwlBtn = document.querySelectorAll('.owl-next');
const prevOwlBtn = document.querySelectorAll('.owl-prev');

nextOwlBtn.forEach((item) => {
  item.innerHTML = '<svg style="fill:#2e3944;"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>';
});
prevOwlBtn.forEach((item) => {
  item.innerHTML = '<svg style="transform:rotate(180deg);fill:#2e3944;"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>';
});

const fullImgButtons = document.querySelectorAll('.saznajteVise');

const fullImgOuter = document.getElementById('full-img-outer');

const displayWorkInfo = (e) => {
  const fullImg = document.getElementById('full-img');
  let index = e.target.name;
  console.log(index);
  fullImgOuter.classList.add('active-full-img');

  fullImg.style.background = `url('../images/img${index}.jpg') center center / cover`;
};

fullImgButtons.forEach((el) => {
  el.addEventListener('click', displayWorkInfo);
});

// close image on outside click
// fullImgOuter.addEventListener('click', (e) => {
//   if (e.target.tagName !== 'BUTTON') {
//     if (fullImgOuter.classList.contains('active-full-img')) {
//       fullImgOuter.classList.remove('active-full-img');
//     }
//   }
// });


//gallery carousel 
//get oter width
const galleryInner = document.querySelector('.carousel-inner');
const galleryOuter = document.getElementById('carousel-outer');

const galleryNextBtn = document.getElementById('carousel-next');
const galleryPrevBtn = document.getElementById('carousel-prev');
let moved = 0;


console.log(galleryInner.offsetWidth)

const galleryPrevSlide = () => {
  const width = galleryOuter.offsetWidth;
  let moveFor = Math.round(moved + width - (width / 9));
  console.log(moveFor)

  galleryInner.style.transform = `translateX(${moveFor}px)`;
  moved = Math.round(moved + width - (width / 9));
  console.log(moved)
  checkPosition()
}

const galleryNextSlide = () => {
  const width = galleryOuter.offsetWidth;
  let moveFor = Math.round(moved - width + (width / 9));
  console.log(moveFor)
  galleryInner.style.transform = `translateX(${moveFor}px)`;
  moved = Math.round(moved - width + (width / 9));
  console.log(moved)
  checkPosition()
}

// close gallery
const closeFullImgBtn = document.querySelector('.full-img-close-button');
closeFullImgBtn.addEventListener('click', () => {
  fullImgOuter.classList.remove('active-full-img');
  //reset carousel position
  galleryInner.style.transform = 'none';
  moved = 0;
  galleryPrevBtn.style.pointerEvents = 'none';
  galleryPrevBtn.style.opacity = '0.3';
});

const checkPosition = () => {
  const width = galleryOuter.offsetWidth;
  const innerWidth = -(galleryInner.offsetWidth - width);
  if (moved === 0) {
    galleryPrevBtn.style.pointerEvents = 'none';
    galleryPrevBtn.style.opacity = '0.3';
  } else {
    galleryPrevBtn.style.pointerEvents = 'auto';
    galleryPrevBtn.style.opacity = '1';
  }

  if (moved <= innerWidth) {
    galleryNextBtn.style.pointerEvents = 'none';
    galleryNextBtn.style.opacity = '0.3';
  } else {
    galleryNextBtn.style.pointerEvents = 'auto';
    galleryNextBtn.style.opacity = '1';
  }
}
galleryPrevBtn.addEventListener('click', galleryPrevSlide);
galleryNextBtn.addEventListener('click', galleryNextSlide);


// change zoomed image src
const allCarouselImages = document.querySelectorAll('.carouserl-image');

const changeZoomImg = (e) => {
  let imageName = e.target.id;
  const fullImg = document.getElementById('full-img');

  fullImg.style.background = `url('../images/${imageName}.jpg') center center / cover`;


}

allCarouselImages.forEach(item => {
  item.addEventListener('click', changeZoomImg)
})

function scrollSpy() {
  const targets = document.querySelectorAll('.itemSpy'),
    options = {
      threshold: 0.5,
    };
  //check if IntersectionObserver is suported
  if ('IntersectionObserver' in window) {
    (() => {
      const inView = (target) => {
        const interSec = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const el = entry.target;
            let currentNav = document.querySelector(`#${el.id}Id`);
            entry.isIntersecting ? currentNav.classList.add('current') : currentNav.classList.remove('current');
          });
        }, options);
        interSec.observe(target);
      };
      targets.forEach(inView);
    })();
  }
}





