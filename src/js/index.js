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
      const step =this.step;
      
      //리본 deco 애니메니션
      const maxAnimRebon1 = s + step * 6;

      if(this.rebon1){
        if (scrollY <= s) {
          this.rebon1.style.transform = `translateX(-190vw) translateY(30vh) scale(0.5)`;
          this.rebon1.style.opacity = '0.1';
        } else if (scrollY > s && scrollY < maxAnimRebon1) {
          const progress = (scrollY - s) / (step * 6);
          const moveX = -190 + (progress * 230);
          const moveY = 30 - (progress * 40);
          this.rebon1.style.transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
          this.rebon1.style.opacity = '0.1';
        } else if (scrollY >= e && scrollY <= e + window.innerHeight) {
          this.rebon1.style.transform = `translateX(40vw) translateY(-10vh) scale(0.5)`;
          const fadeProgress = 0.1 * (1 - (scrollY - e) / window.innerHeight);
          this.rebon1.style.opacity = fadeProgress.toFixed(2);
        } else if (scrollY > e + window.innerHeight) {
          this.rebon1.style.opacity = '0';
        }
      }

      if(this.rebon2){
        if (scrollY <= s) {
          this.rebon2.style.transform = `translateX(160vw) translateY(0vh) scale(0.5)`;
          this.rebon2.style.opacity = '0.5';
        } else if (scrollY > s && scrollY < maxAnimRebon1) {
          const progress = (scrollY - s) / (step * 6);
          const moveX = 160 + (progress * -110);
          const moveY = 0 - (progress * -10);
          this.rebon2.style.transform = `translateX(${moveX}vw) translateY(${moveY}vh) scale(0.5)`;
          this.rebon2.style.opacity = '0.5';
        } else if (scrollY >= e && scrollY <= e + window.innerHeight) {
          this.rebon2.style.transform = `translateX(50vw) translateY(10vh) scale(0.5)`;
          const fadeProgress = 0.5 * (1 - (scrollY - e) / window.innerHeight);
          this.rebon2.style.opacity = fadeProgress.toFixed(2);
        } else if (scrollY > e + window.innerHeight) {
          this.rebon2.style.opacity = '0';
        }
      }


      //text 애니메이션
      const maxAnimRebon2 = s + step * 7;
      if (this.text) {
      if (scrollY <= s) {
          this.text.style.transform = `scale(1) `;
          this.text.style.opacity = `0 `;
        } else if (scrollY > s && scrollY < maxAnimRebon2) {
          const progress = (scrollY - s) / (step * 7);
          const scaleValue = 1 + progress * 0.5; // 1 → 1.5
          this.text.style.transform = `scale(${scaleValue})`;
          this.text.style.opacity = `${progress}`
        } else {
          this.text.style.transform = `scale(1.5)`;
          this.text.style.opacity = '1'
        }
      }
    }
  }
  
  // 실행
  const main = document.querySelector("#page2");
  const sticky = document.querySelector(".page2__inner");
  const scroll = new Scroll(main, sticky);
  
  scroll.init();
  
  window.addEventListener("scroll", () => {
    scroll.animate();
  });
  
  window.addEventListener("resize", () => {
    scroll.init();
    //  scroll.animate(); // 즉시 적용
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

/* page4 scrollAnimation */
{
  class page4_Scroll {
    constructor(main, sticky) {
      this.main = main;
      this.sticky = sticky;
      this.h2El = sticky.querySelector("h2");
      this.even = sticky.querySelectorAll(".even div");
      this.odd = sticky.querySelectorAll(".odd div");
      this.texts = sticky.querySelectorAll(".page4__text p");
      this.circle =  sticky.querySelector(".circle_bg");
      this.length = this.even.length + this.odd.length;
      this.start = 0;
      this.end = 0;
    }
    init() {
      this.start = this.main.offsetTop - window.innerHeight;
      this.end = (this.main.offsetTop + this.main.offsetHeight) - (window.innerHeight *1.5) ;
    }
    
    animate() {
      const s = this.start;
      const e = this.end;
      
      // .even: 위에서 아래로
    this.even.forEach((content) => {
      if (scrollY <= s) {
        content.style.transform = `translateY(-200vh)`;
        content.style.filter = 'brightness(120%)';
      } else if (scrollY > s && scrollY < e) {
        const progress = (scrollY - s) / (e - s);
        const move = -200 + (progress * 200);

        const brightness = 120 - (progress * 90);
        const rounded = brightness.toFixed(2);

        content.style.transform = `translateY(${move}vh)`;
        content.style.filter = `brightness(${rounded}%)`;
      } else if (scrollY >= e) {
        content.style.transform = `translateY(0vh)`;
        content.style.filter = `brightness(30%)`;
      }
    });

      
      // .odd: 아래에서 위로
      this.odd.forEach((content) => {
        if (scrollY <= s) {
          content.style.transform = `translateY(200vw)`;
          content.style.filter = 'brightness(120%)';
        } else if (scrollY > s && scrollY < e) {
          const progress = (scrollY - s) / (e - s);
          const brightness = 120 - (progress * 90);
          const rounded = brightness.toFixed(2);
          const move = 200 - (progress * 200);
          content.style.transform = `translateY(${move}vw)`;
          content.style.filter = `brightness(${rounded}%)`;
        } else if (scrollY >= e) {
          content.style.transform = `translateY(0vw)`;
          content.style.filter = `brightness(30%)`;
        }
      });
      
      //text 데코
      this.texts.forEach((text, i) => {
        const startLeft = [-250, -200, -100];     // index 0~2
        const endRight = [100, 100, 120];
        
        const startRight = [440, 400, 500];    // index 3~5
        const endLeft = [-100, -60, -70];
        
        const totalScroll = e - s;
        const progress = (scrollY - s) / totalScroll;

        // index 0~2: 왼쪽 → 오른쪽
        if (i <= 2) {
          if (scrollY <= s) {
            text.style.transform = `translateX(${startLeft[i]}vw)`;
          } else if (scrollY > s && scrollY < e) {
            const currentX = startLeft[i] + (endRight[i] - startLeft[i]) * progress;
            text.style.transform = `translateX(${currentX}vw)`;
          } else {
            text.style.transform = `translateX(${endRight[i]}vw)`;
          }
        }
        // index 3~5: 오른쪽 → 왼쪽
        else {
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

      //원형 배경
      if(scrollY <= s){
        this.circle.style.transform= 'translateX(-50%) translateY(70vh)'
        this.sticky.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.0),rgba(0,0,0,0.0))'
        this.h2El.style.opacity = `0`
      }else if(scrollY > s && scrollY < e){
        const progress = (scrollY - s) / (e - s);
        const move = 70 - (progress * 70);
        const alpha = 0.0 + (progress * 0.9);
        const roundedAlpha = alpha.toFixed(2); 
        

        this.circle.style.transform=`translateX(-50%) translateY(${move}vh)`
        this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,${roundedAlpha}),rgba(0,0,0,${roundedAlpha}))`
        this.h2El.style.opacity=`${roundedAlpha}`
      }else if(scrollY >= e){
        this.circle.style.transform = 'translateX(-50%) translateY(0vh)'
        this.sticky.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9))`
        this.h2El.style.opacity = '1'
      }

    }
  }
  // 실행
  const main = document.querySelector("#page4");
  const sticky = document.querySelector(".page4__inner");
  const scroll = new page4_Scroll(main, sticky);

  scroll.init();

  window.addEventListener("scroll", () => {
    scroll.animate();
  });

  window.addEventListener("resize", () => {
    scroll.init();
  });

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
  class page6_Scroll {
    constructor(main, sticky) {
      this.main = main;
      this.sticky = sticky;
      this.imaes = sticky.querySelector('.page6__img');
      this.h2El = sticky.querySelector('.page6__text');
      this.liEl = this.imaes.querySelectorAll('ul li');
      this.start = 0;
      this.end = 0;
    }
    init() {
      this.start = this.main.offsetTop - window.innerHeight * 1;
      this.end = (this.main.offsetTop + this.main.offsetHeight) - window.innerHeight ;
    }
    
    animate() {
      const s = this.start;
      const e = this.end;

      if (scrollY <= s) {
        this.imaes.style.transform = 'translateX(100vh)';
        this.h2El.style.opacity = '0';
        this.liEl.forEach(li => {
        li.style.filter = 'opacity(1) grayscale(0)';
        });

      } else if (scrollY > s && scrollY < e) {
        const progress = (scrollY - s) / (e - s);
        const move = 100 + (progress * -350); 
        const opacity = (1 - progress * 0.7).toFixed(2);
        const grayscale = (progress * 0.8).toFixed(2);
        const alpha = (progress * 0.9).toFixed(2);         
        this.imaes.style.transform = `translateX(${move}vh)`;
        this.h2El.style.opacity = alpha;

        this.liEl.forEach(li => {
          li.style.filter = `opacity(${opacity}) grayscale(${grayscale})`;
        });
      } else if (scrollY >= e) {
        this.imaes.style.transform = 'translateX(-250vh)';
        this.h2El.style.opacity = '1';
        this.liEl.forEach(li => {
          li.style.filter = 'opacity(0.3) grayscale(0.8)';
        });
      }

    }
  }
  // 실행
  const main = document.querySelector("#page6");
  const sticky = document.querySelector(".page6__inner");
  const scroll = new page6_Scroll(main, sticky);

  scroll.init();

  window.addEventListener("scroll", () => {
    scroll.animate();
  });

  window.addEventListener("resize", () => {
    scroll.init();
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

/* animte bounce */
const bounse = document.querySelector(".page7__button");
bounse.addEventListener("mouseover",function(){
  this.classList.remove('animate__bounceIn');
  this.classList.add('animate__bounceIn');
});
bounse.addEventListener("animationend",function(){
  this.classList.remove('animate__bounceIn');
});