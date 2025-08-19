// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/images/web1.webp":[function(require,module,exports) {
module.exports = "/web1.10633ea3.webp";
},{}],"src/images/web2.webp":[function(require,module,exports) {
module.exports = "/web2.ab2af74b.webp";
},{}],"src/images/web3.webp":[function(require,module,exports) {
module.exports = "/web3.64c5b680.webp";
},{}],"src/images/web4.webp":[function(require,module,exports) {
module.exports = "/web4.93610f62.webp";
},{}],"src/images/web5.webp":[function(require,module,exports) {
module.exports = "/web5.109bad36.webp";
},{}],"src/images/web6.webp":[function(require,module,exports) {
module.exports = "/web6.a3db59e7.webp";
},{}],"src/images/graphic1.webp":[function(require,module,exports) {
module.exports = "/graphic1.f3600985.webp";
},{}],"src/images/graphic2.webp":[function(require,module,exports) {
module.exports = "/graphic2.79263813.webp";
},{}],"src/images/graphic3.webp":[function(require,module,exports) {
module.exports = "/graphic3.09c664b1.webp";
},{}],"src/images/graphic4.webp":[function(require,module,exports) {
module.exports = "/graphic4.3f172901.webp";
},{}],"src/images/graphic5.webp":[function(require,module,exports) {
module.exports = "/graphic5.7aa55b52.webp";
},{}],"src/images/graphic6.webp":[function(require,module,exports) {
module.exports = "/graphic6.aca35efb.webp";
},{}],"src/images/graphic7.webp":[function(require,module,exports) {
module.exports = "/graphic7.f2e847d0.webp";
},{}],"src/images/graphic8.webp":[function(require,module,exports) {
module.exports = "/graphic8.d08bb49c.webp";
},{}],"src/images/graphic9.webp":[function(require,module,exports) {
module.exports = "/graphic9.d81198e7.webp";
},{}],"src/images/graphic10.webp":[function(require,module,exports) {
module.exports = "/graphic10.6fd4d31c.webp";
},{}],"src/images/graphic11.webp":[function(require,module,exports) {
module.exports = "/graphic11.d054f0c9.webp";
},{}],"src/images/graphic12.webp":[function(require,module,exports) {
module.exports = "/graphic12.3e590e98.webp";
},{}],"node_modules/image-map-resizer/js/imageMapResizer.min.js":[function(require,module,exports) {
var define;
/*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
 *  Desc: Resize HTML imageMap to scaled image.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function () {
  "use strict";

  function r() {
    function e() {
      var r = {
          width: u.width / u.naturalWidth,
          height: u.height / u.naturalHeight
        },
        a = {
          width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10),
          height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10)
        };
      i.forEach(function (e, t) {
        var n = 0;
        o[t].coords = e.split(",").map(function (e) {
          var t = 1 == (n = 1 - n) ? "width" : "height";
          return a[t] + Math.floor(Number(e) * r[t]);
        }).join(",");
      });
    }
    function t(e) {
      return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",");
    }
    function n() {
      clearTimeout(d), d = setTimeout(e, 250);
    }
    function r(e) {
      return document.querySelector('img[usemap="' + e + '"]');
    }
    var a = this,
      o = null,
      i = null,
      u = null,
      d = null;
    "function" != typeof a._resize ? (o = a.getElementsByTagName("area"), i = Array.prototype.map.call(o, t), u = r("#" + a.name) || r(a.name), a._resize = e, u.addEventListener("load", e, !1), window.addEventListener("focus", e, !1), window.addEventListener("resize", n, !1), window.addEventListener("readystatechange", e, !1), document.addEventListener("fullscreenchange", e, !1), u.width === u.naturalWidth && u.height === u.naturalHeight || e()) : a._resize();
  }
  function e() {
    function t(e) {
      e && (!function (e) {
        if (!e.tagName) throw new TypeError("Object is not a valid DOM element");
        if ("MAP" !== e.tagName.toUpperCase()) throw new TypeError("Expected <MAP> tag, found <" + e.tagName + ">.");
      }(e), r.call(e), n.push(e));
    }
    var n;
    return function (e) {
      switch (n = [], typeof e) {
        case "undefined":
        case "string":
          Array.prototype.forEach.call(document.querySelectorAll(e || "map"), t);
          break;
        case "object":
          t(e);
          break;
        default:
          throw new TypeError("Unexpected data type (" + typeof e + ").");
      }
      return n;
    };
  }
  "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : window.imageMapResize = e(), "jQuery" in window && (window.jQuery.fn.imageMapResize = function () {
    return this.filter("map").each(r).end();
  });
}();
},{}],"src/js/sub.js":[function(require,module,exports) {
"use strict";

var _web = _interopRequireDefault(require("../images/web1.webp"));
var _web2 = _interopRequireDefault(require("../images/web2.webp"));
var _web3 = _interopRequireDefault(require("../images/web3.webp"));
var _web4 = _interopRequireDefault(require("../images/web4.webp"));
var _web5 = _interopRequireDefault(require("../images/web5.webp"));
var _web6 = _interopRequireDefault(require("../images/web6.webp"));
var _graphic = _interopRequireDefault(require("../images/graphic1.webp"));
var _graphic2 = _interopRequireDefault(require("../images/graphic2.webp"));
var _graphic3 = _interopRequireDefault(require("../images/graphic3.webp"));
var _graphic4 = _interopRequireDefault(require("../images/graphic4.webp"));
var _graphic5 = _interopRequireDefault(require("../images/graphic5.webp"));
var _graphic6 = _interopRequireDefault(require("../images/graphic6.webp"));
var _graphic7 = _interopRequireDefault(require("../images/graphic7.webp"));
var _graphic8 = _interopRequireDefault(require("../images/graphic8.webp"));
var _graphic9 = _interopRequireDefault(require("../images/graphic9.webp"));
var _graphic0 = _interopRequireDefault(require("../images/graphic10.webp"));
var _graphic1 = _interopRequireDefault(require("../images/graphic11.webp"));
var _graphic10 = _interopRequireDefault(require("../images/graphic12.webp"));
var _imageMapResizer = _interopRequireDefault(require("image-map-resizer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
//메뉴 호버,포커스시 다운, 업 모션 
var gnbLis = document.querySelectorAll('nav .gnb > li');
gnbLis.forEach(function (li) {
  var submnu = li.querySelector('.sub');
  function openSubmenu() {
    var fullHeight = submnu.scrollHeight + 'px';
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
var menuBtn = document.querySelector(".header_main i");
var menuBox = document.querySelector(".header_menu");
menuBtn.addEventListener("click", function () {
  menuBox.style.marginLeft = "0vw";
});

//닫기버튼 클릭시 메뉴 들어가기, 서브메뉴클릭시 메뉴 들어가기
var closeBtn = document.querySelector(".header_menu i");
var submnus = document.querySelectorAll(".gnb .sub a");
if (window.innerWidth < 1200) {
  closeBtn.addEventListener("click", function () {
    menuBox.style.marginLeft = "-100vw";
  });
  submnus.forEach(function (submnu) {
    submnu.addEventListener("click", function () {
      menuBox.style.marginLeft = "-100vw";
    });
  });
} else {
  closeBtn.addEventListener("click", function () {
    menuBox.style.marginLeft = "";
  });
  submnus.forEach(function (submnu) {
    submnu.addEventListener("click", function () {
      menuBox.style.marginLeft = "";
    });
  });
}

//라우터 
var routes = {
  boss: {
    id: "01",
    year: '2024년 7월',
    title: '01. BOSE',
    subtitle: '웹사이트 리뉴얼',
    keywords: ["#피그마", "#포토샵", "#일러스트", "#비주얼스튜디오코드", "#일반코딩", "#도시적", "#모던", "#심플", "#자유"],
    img: _web.default,
    maphref: "https://snstkfkadkfka.github.io/BOSE/"
  },
  vintage: {
    id: "02",
    year: '2024년 7월',
    title: '02. The Vintage Wine Merchants',
    subtitle: '웹사이트 리뉴얼',
    keywords: ["#피그마", "#애프터이펙트", "프리미어", "#비주얼스튜디오코드", "#일반코딩", "#모던", "#고급", "#심플", "#전통"],
    img: _web2.default,
    maphref: "https://snstkfkadkfka.github.io/wine/"
  },
  budsies: {
    id: "03",
    year: '2024년 7월',
    title: '03 Budsies',
    subtitle: '웹사이트 리뉴얼',
    keywords: ["#피그마", "#포토샵", "#일러스트", "#비주얼스튜디오코드", "#일반코딩", "#봉제인형", "#컬러", "#아기자기", "#동심"],
    img: _web3.default,
    maphref: "https://snstkfkadkfka.github.io/Budsies/"
  },
  prelude: {
    id: "04",
    year: '2025년 5월',
    title: '04 Prelude Studio',
    subtitle: '웹사이트',
    keywords: ["#포토샵", "#일러스트", "#비주얼스튜디오코드", "#일반코딩", "#문구", "#여성적", "#아기자기", "#아름다움"],
    img: _web4.default,
    maphref: "https://snstkfkadkfka.github.io/preludestudio/dist/"
  },
  tago: {
    id: "05",
    year: '2025년 6월',
    title: '05 타Go_모바일',
    subtitle: '개인 프로젝트',
    keywords: ["#피그마", "#비주얼스튜디오코드", "#vue", "#API", "#타슈", "#칼로리", "활기", "#운동"],
    img: _web5.default,
    maphref: "https://snstkfkadkfka.github.io/tago/"
  },
  emotion: {
    id: "06",
    year: '2025년 7월',
    title: '06 감정 일기장',
    subtitle: '클론 프로젝트',
    keywords: ["#피그마", "#비주얼스튜디오코드", "#React", "#Router", "#최적화", "#일기", "메모장", "#다이어리", "#표정"],
    img: _web6.default,
    maphref: "https://winterlood-emotiondiary.web.app/"
  },
  diy_cardbanner: {
    id: "07",
    year: '2025년 1월',
    title: 'g.brush DIY 팔레트',
    subtitle: '카드배너',
    keywords: ["#포토샵", "#일러스트", "#GIF", "#카드배너", "#팔레트", "#브러쉬", "물감", "#친근감"],
    img: _graphic.default,
    maphref: ""
  },
  featured_eventbanner: {
    id: "08",
    year: '2024년 12월',
    title: 'g.brush 연말특집 적립이벤트',
    subtitle: '카드배너',
    keywords: ["#포토샵", "#일러스트", "#카드배너", "#연말", "#이벤트", "#밤", "#골드"],
    img: _graphic2.default,
    maphref: ""
  },
  xmas_cardbanner: {
    id: "09",
    year: '2024년 12월',
    title: 'g.brush 크리스마스 이벤트',
    subtitle: '카드배너',
    keywords: ["#포토샵", "#일러스트", "#카드배너", "#크리스마스", "#이벤트", "#산타", "#선물", "눈"],
    img: _graphic3.default,
    maphref: ""
  },
  rieti: {
    id: "10",
    year: '2024년 6월',
    title: 'Rieti 여름 SNS 이벤트',
    subtitle: '이벤트 배너',
    keywords: ["#포토샵", "#피그마", "#이벤트배너", "#여름", "#해변", "#여행", "#사진", "#선글라스"],
    img: _graphic4.default,
    maphref: ""
  },
  education_cardnews: {
    id: "11",
    year: '2024년 6월',
    title: '대전광역시교육시청 유·초등 교육',
    subtitle: '카드뉴스',
    keywords: ["#일러스트", "#피그마", "#공공기관", "#아이", "#책", "#교육"],
    img: _graphic5.default,
    maphref: ""
  },
  dunkin: {
    id: "12",
    year: '2024년 4월',
    title: '던킨도너츠',
    subtitle: '이벤트 배너',
    keywords: ["#포토샵", "#이벤트", "#무료", "#도넛", "#즐거움"],
    img: _graphic6.default,
    maphref: ""
  },
  pepper_page: {
    id: "13",
    year: '2024년 6월',
    title: '우리농가수 햇고춧가루',
    subtitle: '상세페이지',
    keywords: ["#포토샵", "#피그마", "#전통", "#태양", "#고춧가루"],
    img: _graphic7.default,
    maphref: ""
  },
  summer_eventbanner: {
    id: "14",
    year: '2024년 6월',
    title: '공영홈쇼핑 여름맞이 이벤트',
    subtitle: '카드배너',
    keywords: ["#포토샵", "#일러스트", "#피그마", "#여름", "#시원함", "#바닷가", "#여름상품"],
    img: _graphic8.default,
    maphref: ""
  },
  institution_cardnews: {
    id: "15",
    year: '2025년 3월',
    title: '공공기관 스미싱 주의',
    subtitle: '카드뉴스',
    keywords: ["#포토샵", "#일러스트", "#스미싱", "#해킹", "#경고", "#위험"],
    img: _graphic9.default,
    maphref: ""
  },
  gallery_cardbanner: {
    id: "16",
    year: '2024년 11월',
    title: 'g.brush 뷰티아트갤러리',
    subtitle: '카드배너',
    keywords: ["#포토샵", "#갤러리", "#미술관", "#작품", "#모던"],
    img: _graphic0.default,
    maphref: ""
  },
  slide_banner: {
    id: "17",
    year: '2025년 3월',
    title: '2025년 트렌드백',
    subtitle: '슬라이드 배너',
    keywords: ["#포토삽", "#모델", "#가방", "#패션", "#트렌드"],
    img: _graphic1.default,
    maphref: ""
  },
  launch_eventbanner: {
    id: "18",
    year: '2025년 3월',
    title: '올영 런칭 이벤트',
    subtitle: '앱 배너',
    keywords: ["#포토삽", "#화장품", "#런칭", "#봄맞이", "#벗꽃", "#자연", "#천연"],
    img: _graphic10.default,
    maphref: ""
  }
};
function updateMainContent() {
  var hash = location.hash.replace("#", "");
  var route = routes[hash] || routes.boss;
  var article = document.querySelector("main article");
  var yearSpan = document.querySelector("span.year");
  var titleP = document.querySelector(".main-title p");
  var subtitleH2 = document.querySelector(".main-title h2");
  var keywordBox = document.querySelector("main .tag");
  console.log(keywordBox);
  var bnt1 = document.querySelector(".bnt.bnt1");
  var bnt2 = document.querySelector(".bnt.bnt2");
  if (route) {
    // 메인 타이틀 정보 업데이트
    yearSpan.textContent = route.year;
    titleP.textContent = route.title;
    subtitleH2.textContent = route.subtitle;

    // 키워드 출력
    keywordBox.textContent = route.keywords.join(" ");

    //버튼노출제어
    if (parseInt(route.id) <= 6 && route.maphref) {
      bnt1.style.display = "inline-block";
      bnt2.style.display = "inline-block";
      bnt1.href = route.maphref;
      bnt2.href = route.maphref;
    } else {
      bnt1.style.display = "none";
      bnt2.style.display = "none";
    }
    var areaTag = "";
    if (route.maphref) {
      areaTag = "<area target=\"_blank\" alt=\"".concat(route.title, "\" href=\"").concat(route.maphref, "\" coords=\"86,881,348,937\" shape=\"rect\" />");
    }

    // 이미지 출력
    article.innerHTML = "\n    <img src=\"".concat(route.img, "\" usemap=\"#").concat(route.id, "\" alt=\"").concat(route.title, "\" id=\"mapped-img\" style=\"width: 100%;\" />\n    <map name=\"").concat(route.id, "\">\n    ").concat(areaTag, "\n    </map>\n    ");
    var img = document.getElementById("mapped-img");
    img.addEventListener("load", function () {
      (0, _imageMapResizer.default)(); // 이미지 로드 후에 반드시 호출
    });
  } else {
    // 초기 상태
    var defaultRoute = routes.boss;
    yearSpan.textContent = defaultRoute.year;
    titleP.textContent = route.title;
    subtitleH2.textContent = defaultRoute.subtitle;
    keywordBox.textContent = defaultRoute.keywords.join(" ");
    article.innerHTML = "\n      <img src=\"".concat(defaultRoute.img, "\" usemap=\"#").concat(defaultRoute.id, "\" alt=\"").concat(defaultRoute.title, "\" id=\"mapped-img\" style=\"width: 100%;\" />\n      <map name=\"").concat(defaultRoute.id, "\">\n        <area target=\"_blank\" alt=\"").concat(defaultRoute.title, "\" href=\"").concat(defaultRoute.maphref, "\" coords=\"86,881,348,937\" shape=\"rect\" />\n      </map>\n    ");
  }
}

// 이벤트 연결
window.addEventListener("DOMContentLoaded", updateMainContent);
window.addEventListener("hashchange", updateMainContent);
},{"../images/web1.webp":"src/images/web1.webp","../images/web2.webp":"src/images/web2.webp","../images/web3.webp":"src/images/web3.webp","../images/web4.webp":"src/images/web4.webp","../images/web5.webp":"src/images/web5.webp","../images/web6.webp":"src/images/web6.webp","../images/graphic1.webp":"src/images/graphic1.webp","../images/graphic2.webp":"src/images/graphic2.webp","../images/graphic3.webp":"src/images/graphic3.webp","../images/graphic4.webp":"src/images/graphic4.webp","../images/graphic5.webp":"src/images/graphic5.webp","../images/graphic6.webp":"src/images/graphic6.webp","../images/graphic7.webp":"src/images/graphic7.webp","../images/graphic8.webp":"src/images/graphic8.webp","../images/graphic9.webp":"src/images/graphic9.webp","../images/graphic10.webp":"src/images/graphic10.webp","../images/graphic11.webp":"src/images/graphic11.webp","../images/graphic12.webp":"src/images/graphic12.webp","image-map-resizer":"node_modules/image-map-resizer/js/imageMapResizer.min.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62774" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/sub.js"], null)
//# sourceMappingURL=/sub.7a8ecf99.js.map