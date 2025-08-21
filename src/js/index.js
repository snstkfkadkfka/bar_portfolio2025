/* page2, page4, page6 scroll Animation */
class ScrollBase {
  constructor(mainSelector, stickySelector) {
    this.main = document.querySelector(mainSelector);
    this.sticky = document.querySelector(stickySelector);
    this.start = 0;
    this.end = 0;
    this.ticking = false;

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  init() {
    // 각 클래스에서 오버라이드
  }

  animate() {
    // 각 클래스에서 오버라이드
  }

  onScroll() {
    if (!this.ticking) {
      this.ticking = true;
      window.requestAnimationFrame(() => {
        this.animate();
        this.ticking = false;
      });
    }
  }

  onResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.init();
      this.animate();
    }, 200);
  }

  addListeners() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.onResize);
    document.addEventListener("DOMContentLoaded", () => {
      this.init();
      this.animate();
    });
  }
}


// page2 스크롤 애니메이션
class Page2Scroll extends ScrollBase {
  constructor(mainSelector, stickySelector) {
    super(mainSelector, stickySelector);
    this.rebon1 = this.sticky.querySelector('.rebon1');
    this.rebon2 = this.sticky.querySelector('.rebon2');
    this.text = this.sticky.querySelector('.page2__text');
    this.step = 0;
  }

  init() {
    this.start = this.main.offsetTop - 300;
    this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight;
    this.step = (this.end - this.start) / 8;
  }

  animate() {
    const scrollY = window.scrollY;
    const s = this.start;
    const e = this.end;
    const step = this.step;
    const maxAnimRebon1 = s + step * 6;
    const maxAnimRebon2 = s + step * 7;

    // rebon1
    if (this.rebon1) {
      let transform = '';
      let opacity = '';

      if (scrollY <= s) {
        transform = `translateX(-190vw) translateY(30vh) scale(0.5)`;
        opacity = '0.1';
      } else if (scrollY < maxAnimRebon1) {
        const progress = (scrollY - s) / (step * 6);
        const moveX = -190 + (progress * 230);
        const moveY = 30 - (progress * 40);
        transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
        opacity = '0.1';
      } else if (scrollY <= e + window.innerHeight) {
        transform = `translateX(40vw) translateY(-10vh) scale(0.5)`;
        const fadeProgress = 0.1 * (1 - (scrollY - e) / window.innerHeight);
        opacity = fadeProgress.toFixed(2);
      } else {
        opacity = '0';
      }
      this.rebon1.style.transform = transform;
      this.rebon1.style.opacity = opacity;
    }

    // rebon2
    if (this.rebon2) {
      let transform = '';
      let opacity = '';
      if (scrollY <= s) {
        transform = `translateX(160vw) translateY(0vh) scale(0.5)`;
        opacity = '0.5';
      } else if (scrollY < maxAnimRebon1) {
        const progress = (scrollY - s) / (step * 6);
        const moveX = 160 + (progress * -110);
        const moveY = 0 - (progress * -10);
        transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
        opacity = '0.5';
      } else if (scrollY <= e + window.innerHeight) {
        transform = `translateX(50vw) translateY(10vh) scale(0.5)`;
        const fadeProgress = 0.5 * (1 - (scrollY - e) / window.innerHeight);
        opacity = fadeProgress.toFixed(2);
      } else {
        opacity = '0';
      }
      this.rebon2.style.transform = transform;
      this.rebon2.style.opacity = opacity;
    }

    // text
    if (this.text) {
      let transform = '';
      let opacity = '';
      if (scrollY <= s) {
        transform = `scale(1)`;
        opacity = `0`;
      } else if (scrollY < maxAnimRebon2) {
        const progress = (scrollY - s) / (step * 7);
        const scaleValue = 1 + progress * 0.5;
        transform = `scale(${scaleValue})`;
        opacity = `${progress.toFixed(2)}`;
      } else {
        transform = `scale(1.5)`;
        opacity = '1';
      }
      this.text.style.transform = transform;
      this.text.style.opacity = opacity;
    }
  }
}


// page4 스크롤 애니메이션
class Page4Scroll extends ScrollBase {
  constructor(mainSelector, stickySelector) {
    super(mainSelector, stickySelector);
    this.h2El = this.sticky.querySelector("h2");
    this.even = this.sticky.querySelectorAll(".even div");
    this.odd = this.sticky.querySelectorAll(".odd div");
    this.texts = this.sticky.querySelectorAll(".page4__text p");
    this.circle = this.sticky.querySelector(".circle_bg");
  }

  init() {
    this.start = this.main.offsetTop - window.innerHeight;
    this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight * 1.5;
  }

  animate() {
    const scrollY = window.scrollY;
    const s = this.start;
    const e = this.end;

    // even
    this.even.forEach(content => {
      if (scrollY <= s) {
        content.style.transform = `translateY(-200vh)`;
        content.style.filter = 'brightness(120%)';
      } else if (scrollY > s && scrollY < e) {
        const progress = (scrollY - s) / (e - s);
        const move = -200 + (progress * 200);
        const brightness = 120 - (progress * 90);
        const rounded = Math.round(brightness / 10) * 10;

        content.style.transform = `translateY(${move}vh)`;
        content.style.filter = `brightness(${rounded}%)`;
      } else {
        content.style.transform = `translateY(0vh)`;
        content.style.filter = `brightness(30%)`;
      }
    });

    // odd
    this.odd.forEach(content => {
      if (scrollY <= s) {
        content.style.transform = `translateY(200vw)`;
        content.style.filter = 'brightness(120%)';
      } else if (scrollY > s && scrollY < e) {
        const progress = (scrollY - s) / (e - s);
        const brightness = 120 - (progress * 90);
        const rounded = Math.round(brightness / 10) * 10;
        const move = 200 - (progress * 200);
        content.style.transform = `translateY(${move}vw)`;
        content.style.filter = `brightness(${rounded}%)`;
      } else {
        content.style.transform = `translateY(0vw)`;
        content.style.filter = `brightness(30%)`;
      }
    });

    // texts
    this.texts.forEach((text, i) => {
      const startLeft = [-250, -200, -100];
      const endRight = [100, 100, 120];

      const startRight = [440, 400, 500];
      const endLeft = [-100, -60, -70];

      const totalScroll = e - s;
      const progress = (scrollY - s) / totalScroll;

      if (i <= 2) {
        if (scrollY <= s) {
          text.style.transform = `translateX(${startLeft[i]}vw)`;
        } else if (scrollY > s && scrollY < e) {
          const currentX = startLeft[i] + (endRight[i] - startLeft[i]) * progress;
          text.style.transform = `translateX(${currentX}vw)`;
        } else {
          text.style.transform = `translateX(${endRight[i]}vw)`;
        }
      } else {
        const index = i - 3;
        if (scrollY <= s) {
          text.style.transform = `translateX(${startRight[index]}vw)`;
        } else if (scrollY > s && scrollY < e) {
          const currentX = startRight[index] + (endLeft[index] - startRight[index]) * progress;
          text.style.transform = `translateX(${currentX}vw)`;
        } else {
          text.style.transform = `translateX(${endLeft[index]}vw)`;
        }
      }
    });

    // circle background
    if (scrollY <= s) {
      this.circle.style.transform = 'translateX(-50%) translateY(70vh)';
      this.sticky.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0))';
      this.h2El.style.opacity = '0';
    } else if (scrollY > s && scrollY < e) {
      const progress = (scrollY - s) / (e - s);
      const move = 70 - (progress * 70);
      const alpha = 0 + (progress * 0.9);
      const roundedAlpha = alpha.toFixed(2);

      this.circle.style.transform = `translateX(-50%) translateY(${move}vh)`;
      this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,${roundedAlpha}), rgba(0,0,0,${roundedAlpha}))`;
      this.h2El.style.opacity = roundedAlpha;
    } else {
      this.circle.style.transform = 'translateX(-50%) translateY(0vh)';
      this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))`;
      this.h2El.style.opacity = '1';
    }
  }
}


// page6 스크롤 애니메이션
class Page6Scroll extends ScrollBase {
  constructor(mainSelector, stickySelector) {
    super(mainSelector, stickySelector);
    this.images = this.sticky.querySelector('.page6__img');
    this.h2El = this.sticky.querySelector('.page6__text');
    this.liEl = this.images.querySelectorAll('ul li');
  }

  init() {
    const vh = window.innerHeight;
    this.start = this.main.offsetTop - vh;
    this.end = this.main.offsetTop + this.main.offsetHeight - vh;
  }

  animate() {
    const scrollY = window.scrollY;
    const s = this.start;
    const e = this.end;

    if (scrollY <= s) {
      this.images.style.transform = 'translate3d(100vh, 0, 0)';
      this.h2El.style.opacity = '0';
      this.liEl.forEach(li => {
        li.style.filter = 'opacity(1) grayscale(0)';
      });
    } else if (scrollY > s && scrollY < e) {
      const progress = (scrollY - s) / (e - s);
      const move = 100 + (progress * -350);
      const opacity = 1 - progress * 0.7;
      const grayscale = progress * 0.8;
      const alpha = progress * 0.9;

      this.images.style.transform = `translate3d(${move}vh, 0, 0)`;
      this.h2El.style.opacity = alpha;

      this.liEl.forEach(li => {
        li.style.filter = `opacity(${opacity}) grayscale(${grayscale})`;
      });
    } else {
      this.images.style.transform = 'translate3d(-250vh, 0, 0)';
      this.h2El.style.opacity = '1';
      this.liEl.forEach(li => {
        li.style.filter = 'opacity(0.3) grayscale(0.8)';
      });
    }
  }
}


// 인스턴스 생성 및 이벤트 등록

const page2Scroll = new Page2Scroll("#page2", ".page2__inner");
const page4Scroll = new Page4Scroll("#page4", ".page4__inner");
const page6Scroll = new Page6Scroll("#page6", ".page6__inner");

// 공통 이벤트 등록
function onScroll() {
  page2Scroll.onScroll();
  page4Scroll.onScroll();
  page6Scroll.onScroll();
}
function onResize() {
  page2Scroll.onResize();
  page4Scroll.onResize();
  page6Scroll.onResize();
}

document.addEventListener("DOMContentLoaded", () => {
  page2Scroll.init();
  page4Scroll.init();
  page6Scroll.init();

  page2Scroll.animate();
  page4Scroll.animate();
  page6Scroll.animate();
});

window.addEventListener("scroll", onScroll);
window.addEventListener("resize", onResize);

/* page3 skill tep */
{
  const skillBut = document.querySelector('.page3__side__skill .button');
  const skillBox = document.querySelector('.page3__side__skill');
  skillBut.addEventListener("click",()=>{
    skillBox.classList.toggle('active')
  })
}
/* page5 swiper */
{
  let prevIndex = 0;
  const allTextArticles = document.querySelectorAll('.page5__text__inner article');
  
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
        if (prevIndex !== currentIndex){
          if(allTextArticles[prevIndex]){
            allTextArticles[prevIndex].classList.remove('active'); 
          }
          if(allTextArticles[currentIndex]){
            allTextArticles[currentIndex].classList.add('active');
          }
          prevIndex = currentIndex;
        }
      }
    },
    breakpoints:{
      1200:{
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
  allTextArticles.forEach((el, index) => {
    el.classList.toggle('active',index === 0);
  });
}



/* page7 click Event */
{
  const clickBnt = document.querySelector('.page7__click p');
  const morImg = document.querySelector('.page7__inner');
  clickBnt.addEventListener("click",()=>{
  morImg.classList.toggle("active");
  })
}

/* scrollToplugin */
{
  const scrollToTarget = (target, duration = 1) => {
    gsap.to(window,{
      scrollTo:target,
      duration,
      ease : 'power2.out'
    });
  };

  // header
  const headerMenu = document.querySelector('.page1__menu');
  headerMenu.querySelector('.home').addEventListener('click', () => scrollToTarget(0, 0.8));
  headerMenu.querySelector('.profile').addEventListener('click', () => scrollToTarget('#page3', 1));
  headerMenu.querySelector('.ux').addEventListener('click', () => scrollToTarget('#page5', 1));
  headerMenu.querySelector('.graphic').addEventListener('click', () => scrollToTarget('#page7', 1));

  
  // footer
  const footerMenu = document.querySelector('.page8__menu');

  footerMenu.querySelector('.home').addEventListener('click', () => scrollToTarget(0, 0.8));
  footerMenu.querySelector('.profile').addEventListener('click', () => scrollToTarget('#page3', 1));
  footerMenu.querySelector('.ux').addEventListener('click', () => scrollToTarget('#page5', 1));
  footerMenu.querySelector('.graphic').addEventListener('click', () => scrollToTarget('#page7', 1) );

  document.querySelector('.top_button').addEventListener('click',() => scrollToTarget(0, 0.8))
}
