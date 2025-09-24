import web1 from '../images/web1.webp';
import web2 from '../images/web2.webp';
import web3 from '../images/web3.webp';
import web4 from '../images/web4.webp';
import web5 from '../images/web5.webp';
import web6 from '../images/web6.webp';
import graphic1 from '../images/graphic1.webp';
import graphic2 from '../images/graphic2.webp';
import graphic3 from '../images/graphic3.webp';
import graphic4 from '../images/graphic4.webp';
import graphic5 from '../images/graphic5.webp';
import graphic6 from '../images/graphic6.webp';
import graphic7 from '../images/graphic7.webp';
import graphic8 from '../images/graphic8.webp';
import graphic9 from '../images/graphic9.webp';
import graphic10 from '../images/graphic10.webp';
import graphic11 from '../images/graphic11.webp';
import graphic12 from '../images/graphic12.webp';
import imageMapResize from 'image-map-resizer';

//메뉴 호버,포커스시 다운, 업 모션 
const gnbLis = document.querySelectorAll('nav .gnb > li');

gnbLis.forEach(li => {
  const submnu = li.querySelector('.sub');

  function openSubmenu() {
    const fullHeight = submnu.scrollHeight + 'px';
    submnu.style.height = fullHeight;
  }

  function closeSubmenu() {
    submnu.style.height = '0px';
  }

  li.addEventListener('mouseover', openSubmenu);
  li.addEventListener('focusin', openSubmenu);

  li.addEventListener('mouseleave', closeSubmenu);
  li.addEventListener('focusout', closeSubmenu);
});

//햄버거 버튼 클릭시 메뉴 나오기
const menuBtn= document.querySelector(".header_main i");
const menuBox =document.querySelector(".header_menu")
menuBtn.addEventListener("click",function(){
  menuBox.style.marginLeft = "0vw"
})

//닫기버튼 클릭시 메뉴 들어가기, 서브메뉴클릭시 메뉴 들어가기
const closeBtn =document.querySelector(".header_menu i");
const submnus = document.querySelectorAll(".gnb .sub a");
if(window.innerWidth < 1200){
  closeBtn.addEventListener("click",function(){
    menuBox.style.marginLeft = "-100vw"
  })
  submnus.forEach(submnu=>{
    submnu.addEventListener("click",function(){
      menuBox.style.marginLeft ="-100vw"
    })
  })
}else{
  closeBtn.addEventListener("click",function(){
    menuBox.style.marginLeft = ""
  })
  submnus.forEach(submnu=>{
    submnu.addEventListener("click",function(){
      menuBox.style.marginLeft =""
    })
  })
}

//라우터 
const routes = {
  boss:{
    id:"01",
    year:'2024년 7월',
    title:'01. BOSE',
    subtitle:'웹사이트 리뉴얼',
    keywords:["#피그마","#포토샵","#일러스트","#비주얼스튜디오코드","#일반코딩","#도시적","#모던","#심플","#자유"],
    img:web1,
    maphref:"https://snstkfkadkfka.github.io/BOSE/"
  },
  vintage:{
    id:"02",
    year:'2024년 7월',
    title:'02. The Vintage Wine Merchants',
    subtitle:'웹사이트 리뉴얼',
    keywords:["#피그마","#애프터이펙트","프리미어","#비주얼스튜디오코드","#일반코딩","#모던","#고급","#심플","#전통"],
    img:web2,
    maphref:"https://snstkfkadkfka.github.io/wine/"
  },
  budsies:{
    id:"03",
    year:'2024년 7월',
    title:'03 Budsies',
    subtitle:'웹사이트 리뉴얼',
    keywords:["#피그마","#포토샵","#일러스트","#비주얼스튜디오코드","#일반코딩","#봉제인형","#컬러","#아기자기","#동심"],
    img: web3,
    maphref:"https://snstkfkadkfka.github.io/Budsies/"
  },
  prelude:{
    id:"04",
    year:'2025년 5월',
    title:'04 Prelude Studio',
    subtitle:'웹사이트',
    keywords:["#포토샵","#일러스트","#비주얼스튜디오코드","#일반코딩","#문구","#여성적","#아기자기","#아름다움"],
    img: web4,
    maphref:"https://snstkfkadkfka.github.io/preludestudio/dist/"
  },
  tago:{
    id:"05",
    year:'2025년 6월',
    title:'05 타Go_모바일',
    subtitle:'개인 프로젝트',
    keywords:["#피그마","#비주얼스튜디오코드","#vue","#API","#타슈","#칼로리","활기","#운동"],
    img:web5,
    maphref:"https://snstkfkadkfka.github.io/tago/"
  },
  emotion:{
    id:"06",
    year:'2025년 7월',
    title:'06 감정 일기장',
    subtitle:'클론 프로젝트',
    keywords:["#피그마","#비주얼스튜디오코드","#React","#Router","#최적화","#일기","메모장","#다이어리","#표정"],
    img:web6,
    maphref:"https://winterlood-emotiondiary.web.app/"
  },
  diy_cardbanner:{
    id:"07",
    year:'2025년 1월',
    title:'g.brush DIY 팔레트',
    subtitle:'카드배너',
    keywords:["#포토샵","#일러스트","#GIF","#카드배너","#팔레트","#브러쉬","물감","#친근감"],
    img: graphic1,
    maphref:""
  },
  featured_eventbanner:{
    id:"08",
    year:'2024년 12월',
    title:'g.brush 연말특집 적립이벤트',
    subtitle:'카드배너',
    keywords:["#포토샵","#일러스트","#카드배너","#연말","#이벤트","#밤","#골드"],
    img: graphic2,
    maphref:""
  },
  xmas_cardbanner:{
    id:"09",
    year:'2024년 12월',
    title:'g.brush 크리스마스 이벤트',
    subtitle:'카드배너',
    keywords:["#포토샵","#일러스트","#카드배너","#크리스마스","#이벤트","#산타","#선물","눈"],
    img: graphic3,
    maphref:""
  },
  rieti:{
    id:"10",
    year:'2024년 6월',
    title:'Rieti 여름 SNS 이벤트',
    subtitle:'이벤트 배너',
    keywords:["#포토샵","#피그마","#이벤트배너","#여름","#해변","#여행","#사진","#선글라스"],
    img: graphic4,
    maphref:""
  },
  education_cardnews:{
    id:"11",
    year:'2024년 6월',
    title:'대전광역시교육시청 유·초등 교육',
    subtitle:'카드뉴스',
    keywords:["#일러스트","#피그마","#공공기관","#아이","#책","#교육"],
    img: graphic5,
    maphref:""
  },
  dunkin:{
    id:"12",
    year:'2024년 4월',
    title:'던킨도너츠',
    subtitle:'이벤트 배너',
    keywords:["#포토샵","#이벤트","#무료","#도넛","#즐거움"],
    img: graphic6,
    maphref:""
  },
  pepper_page:{
    id:"13",
    year:'2024년 6월',
    title:'우리농가수 햇고춧가루',
    subtitle:'상세페이지',
    keywords:["#포토샵","#피그마","#전통","#태양","#고춧가루"],
    img: graphic7,
    maphref:""
  },
  summer_eventbanner:{
    id:"14",
    year:'2024년 6월',
    title:'공영홈쇼핑 여름맞이 이벤트',
    subtitle:'카드배너',
    keywords:["#포토샵","#일러스트","#피그마","#여름","#시원함","#바닷가","#여름상품"],
    img: graphic8,
    maphref:""
  },
  institution_cardnews:{
    id:"15",
    year:'2025년 3월',
    title:'공공기관 스미싱 주의',
    subtitle:'카드뉴스',
    keywords:["#포토샵","#일러스트","#스미싱","#해킹","#경고","#위험"],
    img: graphic9,
    maphref:""
  },
  gallery_cardbanner:{
    id:"16",
    year:'2024년 11월',
    title:'g.brush 뷰티아트갤러리',
    subtitle:'카드배너',
    keywords:["#포토샵","#갤러리","#미술관","#작품","#모던"],
    img: graphic10,
    maphref:""
  },
  slide_banner:{
    id:"17",
    year:'2025년 3월',
    title:'2025년 트렌드백',
    subtitle:'슬라이드 배너',
    keywords:["#포토삽","#모델","#가방","#패션","#트렌드"],
    img: graphic11,
    maphref:""
  },
  launch_eventbanner:{
    id:"18",
    year:'2025년 3월',
    title:'올영 런칭 이벤트',
    subtitle:'앱 배너',
    keywords:["#포토삽","#화장품","#런칭","#봄맞이","#벗꽃","#자연","#천연"],
    img: graphic12,
    maphref:""
  },
}

function updateMainContent() {
  const hash = location.hash.replace("#", "");
  const route = routes[hash] || routes.boss;
  
  const article = document.querySelector("main article");
  const yearSpan  = document.querySelector("span.year");
  const titleP = document.querySelector(".main-title p");
  const subtitleH2 = document.querySelector(".main-title h2");
  const keywordBox = document.querySelector("main .tag");
  console.log(keywordBox)
  
  const bnt1 = document.querySelector(".bnt.bnt1");
  const bnt2 = document.querySelector(".bnt.bnt2");

  if (route) {
    // 메인 타이틀 정보 업데이트
    yearSpan.textContent = route.year;
    titleP.textContent = route.title;
    subtitleH2.textContent = route.subtitle;
    
    // 키워드 출력
    keywordBox.textContent = route.keywords.join(" ");
    
    //버튼노출제어
    if (parseInt(route.id) <= 6 && route.maphref){
      bnt1.style.display = "inline-block";
      bnt2.style.display = "inline-block";

      bnt1.href = route.maphref;
      bnt2.href = route.maphref;
    }else{
      bnt1.style.display = "none";
      bnt2.style.display = "none";
    }

    let areaTag = "";
    if (route.maphref) {
      areaTag = `<area target="_blank" alt="${route.title}" href="${route.maphref}" coords="86,881,348,937" shape="rect" />`;
    }
    
    // 이미지 출력
    article.innerHTML = `
    <img src="${route.img}" usemap="#${route.id}" alt="${route.title}" id="mapped-img" style="width: 100%;" />
    <map name="${route.id}">
    ${areaTag}
    </map>
    `;
    
    const img = document.getElementById("mapped-img");
    img.addEventListener("load", () => {
      imageMapResize(); // 이미지 로드 후에 반드시 호출
    });
    
  } else {
    // 초기 상태
    const defaultRoute = routes.boss;
    yearSpan.textContent = defaultRoute.year;
    titleP.textContent = route.title;
    subtitleH2.textContent = defaultRoute.subtitle;
    keywordBox.textContent = defaultRoute.keywords.join(" ");
    article.innerHTML = `
      <img src="${defaultRoute.img}" usemap="#${defaultRoute.id}" alt="${defaultRoute.title}" id="mapped-img" style="width: 100%;" />
      <map name="${defaultRoute.id}">
        <area target="_blank" alt="${defaultRoute.title}" href="${defaultRoute.maphref}" coords="86,881,348,937" shape="rect" />
      </map>
    `;
  }
}

// 이벤트 연결
window.addEventListener("DOMContentLoaded", updateMainContent);
window.addEventListener("hashchange", updateMainContent);


