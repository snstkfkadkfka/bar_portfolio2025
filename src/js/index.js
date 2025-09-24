function setVhUnit() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setVhUnit();

['resize', 'orientationchange'].forEach(event => {
  window.addEventListener(event, setVhUnit);
});
/* page2 scroll Animation */
{
  class Scroll {
    constructor(main, sticky) {
      this.main = main;
      this.sticky = sticky;
      this.rebon1 = sticky.querySelector('.rebon1');
      this.rebon2 = sticky.querySelector('.rebon2');
      this.text = sticky.querySelector('.page2__text');

      this.start = 0;
      this.end = 0;
      this.step = 0;
      this.ticking = false;
      this.isMobile = window.innerWidth < 768;
    }

    init() {
      this.isMobile = window.innerWidth < 768;
      this.start = this.main.offsetTop - 300;
      this.end = this.main.offsetTop + this.main.offsetHeight - window.innerHeight;
      this.step = (this.end - this.start) / (this.isMobile ? 5 : 8);
    }

    animate() {
      const scrollY = window.scrollY;
      const s = this.start;
      const e = this.end;
      const step = this.step;

      const maxAnimRebon1 = s + step * 6;
      const maxAnimRebon2 = s + step * 7;

      // 리본 1
      if (this.rebon1) {
        let transform = '';
        let opacity = '';

        const startX = this.isMobile ? -100 : -190;
        const endX = this.isMobile ? 20 : 40;
        const startY = this.isMobile ? 20 : 30;
        const endY = this.isMobile ? -5 : -10;

        if (scrollY <= s) {
          transform = `translateX(${startX}vw) translateY(${startY}vh) scale(0.5)`;
          opacity = '0.1';
        } else if (scrollY < maxAnimRebon1) {
          const progress = Math.min(Math.max((scrollY - s) / (step * 6), 0), 1);
          const moveX = startX + (progress * (endX - startX));
          const moveY = startY + (progress * (endY - startY));
          transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
          opacity = '0.1';
        } else if (scrollY <= e + window.innerHeight) {
          transform = `translateX(${endX}vw) translateY(${endY}vh) scale(0.5)`;
          const fadeProgress = 0.1 * (1 - (scrollY - e) / window.innerHeight);
          opacity = fadeProgress.toFixed(2);
        } else {
          opacity = '0';
        }

        this.rebon1.style.transform = transform;
        this.rebon1.style.opacity = opacity;
      }

      // 리본 2
      if (this.rebon2) {
        let transform = '';
        let opacity = '';

        const startX = this.isMobile ? 100 : 160;
        const endX = this.isMobile ? 30 : 50;
        const startY = this.isMobile ? 0 : 0;
        const endY = this.isMobile ? 5 : 10;

        if (scrollY <= s) {
          transform = `translateX(${startX}vw) translateY(${startY}vh) scale(0.5)`;
          opacity = '0.5';
        } else if (scrollY < maxAnimRebon1) {
          const progress = Math.min(Math.max((scrollY - s) / (step * 6), 0), 1);
          const moveX = startX + (progress * (endX - startX));
          const moveY = startY + (progress * (endY - startY));
          transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
          opacity = '0.5';
        } else if (scrollY <= e + window.innerHeight) {
          transform = `translateX(${endX}vw) translateY(${endY}vh) scale(0.5)`;
          const fadeProgress = 0.5 * (1 - (scrollY - e) / window.innerHeight);
          opacity = fadeProgress.toFixed(2);
        } else {
          opacity = '0';
        }

        this.rebon2.style.transform = transform;
        this.rebon2.style.opacity = opacity;
      }

      // 텍스트 애니메이션
      if (this.text) {
        let transform = '';
        let opacity = '';

        if (scrollY <= s) {
          transform = `scale(1)`;
          opacity = `0`;
        } else if (scrollY < maxAnimRebon2) {
          const progress = Math.min(Math.max((scrollY - s) / (step * 7), 0), 1);
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

    onScroll() {
      if (!this.ticking) {
        this.ticking = true;
        window.requestAnimationFrame(() => {
          this.animate();
          this.ticking = false;
        });
      }
    }
  }

  const main = document.querySelector("#page2");
  const sticky = document.querySelector(".page2__inner");
  const scroll = new Scroll(main, sticky);

  document.addEventListener("DOMContentLoaded", () => scroll.init());
  window.addEventListener("scroll", () => scroll.onScroll());

  let resizeTimeout;
  ['resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event, () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setVhUnit(); // 뷰포트 단위 업데이트
        scroll.init(); // 스크롤 위치 재계산
      }, 300);
    });
  });
}

/* page4 scrollAnimation */
{
  class Page4Scroll {
    constructor(main, sticky) {
      this.main = main;
      this.sticky = sticky;
      this.h2El = sticky.querySelector("h2");
      this.even = sticky.querySelectorAll(".even div");
      this.odd = sticky.querySelectorAll(".odd div");
      this.circle = sticky.querySelector(".circle_bg");
      this.start = 0;
      this.end = 0;
      this.ticking = false;

      this.isMobile = window.innerWidth < 768;
    }

    init() {
      const vh = window.innerHeight;
      this.start = this.main.offsetTop - vh;
      this.end = this.main.offsetTop + this.main.offsetHeight - vh * 1.5;
    }

    animate() {
      const scrollY = window.scrollY;
      const s = this.start;
      const e = this.end;
      const progress = Math.min(Math.max((scrollY - s) / (e - s), 0), 1);

      const evenMoveY = this.isMobile ? -100 + (progress * 100) : -200 + (progress * 200);
      const oddMoveY = this.isMobile ? 100 - (progress * 100) : 200 - (progress * 200);
      const brightness = Math.round((120 - progress * 90) / 10) * 10;

      this.even.forEach((el) => {
        el.style.transform = `translateY(calc(var(--vh) * ${evenMoveY}))`;
        el.style.filter = `brightness(${brightness}%)`;
      });

      this.odd.forEach((el) => {
        el.style.transform = `translateY(calc(var(--vh) * ${oddMoveY}))`;
        el.style.filter = `brightness(${brightness}%)`;
      });

      // 원형 배경 & 배경 색상 & h2 opacity
      if (scrollY <= s) {
        this.circle.style.transform = 'translateX(-50%) translateY(calc(var(--vh) * 70))';
        this.sticky.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0))';
        this.h2El.style.opacity = `0`;
      } else if (scrollY > s && scrollY < e) {
        const move = 70 - (progress * 70);
        const alpha = (progress * 0.9).toFixed(2);
        this.circle.style.transform = `translateX(-50%) translateY(calc(var(--vh) * ${move}))`;
        this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,${alpha}), rgba(0,0,0,${alpha}))`;
        this.h2El.style.opacity = alpha;
      } else {
        this.circle.style.transform = 'translateX(-50%) translateY(0)';
        this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9))`;
        this.h2El.style.opacity = '1';
      }
    }

    onScroll() {
      if (!this.ticking) {
        this.ticking = true;
        requestAnimationFrame(() => {
          this.animate();
          this.ticking = false;
        });
      }
    }
  }

  const main = document.querySelector("#page4");
  const sticky = document.querySelector(".page4__inner");
  const scroll = new Page4Scroll(main, sticky);

  document.addEventListener("DOMContentLoaded", () => scroll.init());
  window.addEventListener("scroll", () => scroll.onScroll());
  let resizeTimeout;
  ['resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event, () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setVhUnit(); // <-- 반드시 호출
        scroll.init(); // <-- 각 scroll 클래스의 init()
      }, 300); // orientation 대응은 살짝 여유 있는 시간 추천
    });
  });

}

/* page6 scrollAnimation */
{
  class Page6Scroll {
    constructor(main, sticky) {
      this.main = main;
      this.sticky = sticky;
      this.images = sticky.querySelector('.page6__img');
      this.h2El = sticky.querySelector('.page6__text');
      this.liEl = this.images.querySelectorAll('ul li');
      this.start = 0;
      this.end = 0;
      this.ticking = false;

      this.isMobile = window.innerWidth < 768;
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
      const progress = Math.min(Math.max((scrollY - s) / (e - s), 0), 1);

      const moveStart = this.isMobile ? 60 : 100;
      const moveEnd = this.isMobile ? -150 : -250;
      const move = moveStart + (progress * (moveEnd - moveStart));

      const opacity = 1 - progress * 0.7;
      const grayscale = progress * 0.8;
      const alpha = progress * 0.9;

      if (scrollY <= s) {
        this.images.style.transform = `translate3d(calc(var(--vh) * ${moveStart}), 0, 0)`;
        this.h2El.style.opacity = '0';
        this.liEl.forEach(li => {
          li.style.filter = 'opacity(1) grayscale(0)';
        });
      } else if (scrollY > s && scrollY < e) {
        this.images.style.transform = `translate3d(calc(var(--vh) * ${move}), 0, 0)`;
        this.h2El.style.opacity = alpha;
        this.liEl.forEach(li => {
          li.style.filter = `opacity(${opacity}) grayscale(${grayscale})`;
        });
      } else if (scrollY >= e) {
        this.images.style.transform = `translate3d(calc(var(--vh) * ${moveEnd}), 0, 0)`;
        this.h2El.style.opacity = '1';
        this.liEl.forEach(li => {
          li.style.filter = 'opacity(0.3) grayscale(0.8)';
        });
      }
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
  }

  const main = document.querySelector("#page6");
  const sticky = document.querySelector(".page6__inner");
  const scroll = new Page6Scroll(main, sticky);

  document.addEventListener("DOMContentLoaded", () => {
    scroll.init();
  });

  window.addEventListener("scroll", () => {
    scroll.onScroll();
  });


  let resizeTimeout;
  ['resize', 'orientationchange'].forEach(event => {
    window.addEventListener(event, () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setVhUnit(); // <-- 반드시 호출
        scroll.init(); // <-- 각 scroll 클래스의 init()
      }, 300); // orientation 대응은 살짝 여유 있는 시간 추천
    });
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
