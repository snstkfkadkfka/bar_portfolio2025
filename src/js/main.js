/* page2 gsap scrollTrigger */
{
gsap.registerPlugin(ScrollTrigger);

function createAnimation({ x1, y1, x2, y2, endValue }) {
  const tl = gsap.timeline();
  tl.from(".page2__inner .page2__bg .rebon1", { x: x1, y: y1 }, "rebon")
    .from(".page2__inner .page2__bg .rebon2", { x: x2, y: y2 }, "rebon")
    .from(".page2__inner .page2__text", { opacity: 0, scale: 0.9 }, "rebon")
    .to(".page2__inner .page2__text", { opacity: 1, scale: 1 });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".page2__inner",
    start: "top top",
    end: `+=${endValue}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    markers: false
  });
}

ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 1200px)": function () {
    createAnimation({
      x1: "-2000px",
      y1: "300px",
      x2: "2000px",
      y2: "-100px",
      endValue: 2000
    });
  },

  // Tablet
  "(min-width: 700px) and (max-width: 1199px)": function () {
    createAnimation({
      x1: "-1400px",
      y1: "100px",
      x2: "1400px",
      y2: "-100px",
      endValue: 2000
    });
  },

  // Mobile
  "(max-width: 699px)": function () {
    createAnimation({
      x1: "-900px",
      y1: "100px",
      x2: "900px",
      y2: "-100px",
      endValue: 900
    });
  }
});
}

/* page3 skill tep */
{
  const skillBut = document.querySelector('.page3__side__skill .button');
  const skillBox = document.querySelector('.page3__side__skill');
  skillBut.addEventListener("click",()=>{
    skillBox.classList.toggle('active')
  })
}

/* page4 gsap scrollTrigger */
{
  const ani2 = gsap.timeline();
  ani2
    .to("#page4 .page4__img .img1 div",{top:'0px'},"img")
    .to("#page4 .page4__img .img2 div",{top:'0px'},"img")
    .to("#page4 .page4__img .img3 div",{top:'-50px'},"img")
    .to("#page4 .page4__img .img4 div",{top:'-150px'},"img")
    .from("#page4 .page4__text .txt1",{left:'-80%'}, "img")
    .from("#page4 .page4__text .txt2",{left:'-80%'}, "img")
    .from("#page4 .page4__text .txt3",{left:'-60%'}, "img")
    .from("#page4 .page4__text .txt4",{right:'-100%'}, "img")
    .from("#page4 .page4__text .txt5",{right:'-100%'}, "img")
    .from("#page4 .page4__text .txt6",{right:'-150%'}, "img")
    .from("#page4",{backgroundColor:'#f3f6ff'}, "img+=0.25")
    .from("#page4 .page4__inner ",{backgroundColor:'#f3f6ff'}, "img+=0.25")
    .to("#page4 .page4__bg .black_bg",{backgroundColor:'rgba(0, 2, 14, 0.7)'}, "img+=0.10")
    .from("#page4 h2",{opacity:0}, "img+=0.3")
    
    ScrollTrigger.create({
      animation: ani2,
      trigger:".page4__inner",
      start: "top top",
      end:"+=800",
      scrub:true,
      pin:true,
      anticipatePin: 1,
      markers:false
    })
}

/* page5 swiper */
{
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides : 1,
    freeMode : false,
    slideToClickedSlide : false,
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
      pauseOnMouseEnter: true,
    },
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      slideChange: function () {
        const currentIndex = this.realIndex; 
        const allTextArticles = document.querySelectorAll('.page5__text__inner article');
        allTextArticles.forEach((el, index) => {
          if (index === currentIndex) {
            el.style.opacity = '1';
            el.style.visibility = 'visible'; 
          } else {
            el.style.opacity = '0'; 
            el.style.visibility = 'hidden';
          }
        });
      }
    },
    breakpoints:{
      1200:{
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  const allTextArticles = document.querySelectorAll('.page5__text__inner article');
  allTextArticles.forEach((el, index) => {
    el.style.opcity = (index === 0) ? '1' : '0';
    el.style.visibility = (index === 0) ? 'visible' : 'hidden';
  });
}

/* page6 gsap scrollTrigger */
{
  gsap.registerPlugin(ScrollTrigger);
  function createAnimation({endValue }) {
    const ani3 = gsap.timeline();
    ani3
      .to(".page6__inner .page6__img",{ left:'-90vw',filter:'grayscale(100%)'},"img")
      .from(".page6__inner .page6__bg",{ opacity:0 },"img+=0.02")
      .from(".page6__inner .page6__text h2",{ opacity:0},"img+=0.02")
    
    ScrollTrigger.create({
      animation: ani3,
      trigger:".page6__inner",
      start: "top 20% top",
      end:`+=${endValue}`,
      scrub:true,
      pin:true,
      anticipatePin: 1,
      markers:false
    })
  }
  ScrollTrigger.matchMedia({
  // Desktop
  "(min-width: 1200px)": function () {
    createAnimation({
      endValue: 600
    });
  },

  // Tablet
  "(min-width: 700px) and (max-width: 1199px)": function () {
    createAnimation({
      endValue: 600
    });
  },

  // Mobile
  "(max-width: 699px)": function () {
    createAnimation({
      endValue: 550
    });
  }
});
}

// /* page7 click Event */
{
  const clickBnt = document.querySelector('.page7__click p');
  const morImg = document.querySelector('.page7__inner');
  clickBnt.addEventListener("click",()=>{
  morImg.classList.toggle("active");
  })
}

/* scrollToplugin */
{
  // header
  const page1Home = document.querySelector('.page1__menu .home');
  const page1Prpfile = document.querySelector('.page1__menu .profile');
  const page1Ux = document.querySelector('.page1__menu .ux');
  const page1Graphic = document.querySelector('.page1__menu .graphic');
  
  page1Home.addEventListener('click', () => {gsap.to(window, 0.5, {scrollTo: 0})});
  page1Prpfile.addEventListener('click', () => {gsap.to(window, 0.8, {scrollTo: '#page3'})});
  page1Ux.addEventListener('click', () => {gsap.to(window, 1, {scrollTo: '#page5'})});
  page1Graphic.addEventListener('click', () => {gsap.to(window, 1.5, {scrollTo:'#page7'})});
  
  // footer
  const toTopEl = document.querySelector('.top_button');
  const page8Home = document.querySelector('.page8__menu .home');
  const page8Prpfile = document.querySelector('.page8__menu .profile');
  const page8Ux = document.querySelector('.page8__menu .ux');
  const page8Graphic = document.querySelector('.page8__menu .graphic');
  
  toTopEl.addEventListener('click', () => {gsap.to(window, 1, {scrollTo: 0})});
  page8Home.addEventListener('click', () => {gsap.to(window, 1, {scrollTo: 0})});
  page8Prpfile.addEventListener('click', () => {gsap.to(window, 0.5,{scrollTo: '#page3'})});
  page8Ux.addEventListener('click', () => {gsap.to(window, 0.5, {scrollTo: '#page5'})});
  page8Graphic.addEventListener('click', () => {gsap.to(window, 0.5,{scrollTo:'#page7'})});

}